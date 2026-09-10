(() => {
  const STORAGE_KEY = "mu-lang";
  let data = null;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const detect = () => {
    const params = new URLSearchParams(location.search);
    const fromQuery = params.get("lang");
    if (fromQuery) return fromQuery;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    } catch (_) {}
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return nav;
  };

  const normalize = (code) => {
    if (!code || !data) return data?.fallback || "en";
    const raw = String(code).replace("_", "-");
    const lower = raw.toLowerCase();
    const packs = data.packs || {};
    if (packs[raw]) return raw;
    if (packs[lower]) return lower;
    const short = lower.split("-")[0];
    if (packs[short]) return short;
    // zh-TW / zh-HK style
    if (lower.startsWith("zh-hant") || lower === "zh-tw" || lower === "zh-hk") {
      if (packs["zh-TW"]) return "zh-TW";
      if (packs.zh) return "zh";
    }
    if (lower.startsWith("zh")) return packs.zh ? "zh" : data.fallback;
    return data.fallback || "en";
  };

  const t = (key, lang) => {
    const pack = data.packs[lang] || data.packs[data.fallback] || {};
    const fb = data.packs[data.fallback] || {};
    return pack[key] ?? fb[key] ?? key;
  };

  const fillSelect = (select, lang) => {
    if (!select || select.dataset.filled === "1") return;
    const display = new Intl.DisplayNames([lang || "en"], { type: "language" });
    select.innerHTML = "";
    (data.languages || []).forEach(({ code, native }) => {
      const opt = document.createElement("option");
      opt.value = code;
      let label = native;
      try {
        label = display.of(code.split("-")[0]) || native;
        if (code.includes("-") && code !== "zh-TW") {
          label = display.of(code) || native;
        }
      } catch (_) {}
      opt.textContent = native && native !== label ? `${native}` : label || code;
      select.appendChild(opt);
    });
    select.dataset.filled = "1";
  };

  const apply = (requested) => {
    if (!data) return;
    const lang = normalize(requested);
    const rtl = (data.rtl || []).includes(lang.split("-")[0]) || (data.rtl || []).includes(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const val = t(key, lang);
      if (el.dataset.i18nHtml === "1") el.innerHTML = val;
      else el.textContent = val;
    });

    $$("[data-i18n-attr]").forEach((el) => {
      // format: data-i18n-attr="title:meta.title,aria-label:nav.lang"
      const spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(",").forEach((part) => {
        const [attr, key] = part.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key, lang));
      });
    });

    const title = t("meta.title", lang);
    if (title) document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.description", lang));

    const select = $("#lang-switch");
    if (select) {
      fillSelect(select, lang);
      select.value = lang;
      // if exact code missing, pick normalized
      if (select.value !== lang) {
        const opt = Array.from(select.options).find((o) => o.value === lang);
        if (!opt) {
          const short = lang.split("-")[0];
          select.value = Array.from(select.options).some((o) => o.value === short) ? short : data.default;
        }
      }
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}

    const url = new URL(location.href);
    if (url.searchParams.get("lang") !== lang) {
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    }

    document.dispatchEvent(new CustomEvent("mu:langchange", { detail: { lang } }));
  };

  const init = async () => {
    const res = await fetch("js/i18n-data.json", { cache: "force-cache" });
    data = await res.json();
    const initial = normalize(detect() || data.default || "en");
    apply(initial);

    const select = $("#lang-switch");
    select?.addEventListener("change", () => apply(select.value));
  };

  window.MU_I18N = { init, apply, t, detect, normalize };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      init().catch(console.error);
    });
  } else {
    init().catch(console.error);
  }
})();
