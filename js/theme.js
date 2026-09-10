(() => {
  const STORAGE_KEY = "mu-theme";
  const META_DARK = "#08080b";
  const META_LIGHT = "#eef1f4";

  const systemTheme = () =>
    window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

  const read = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (_) {}
    return systemTheme();
  };

  const apply = (theme) => {
    const next = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "light" ? META_LIGHT : META_DARK);
    syncButton(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {}
  };

  const labelKey = (theme) => (theme === "light" ? "nav.theme.dark" : "nav.theme.light");

  const syncButton = (theme) => {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const key = labelKey(theme);
    let label = theme === "light" ? "Dark theme" : "Light theme";
    try {
      if (window.MU_I18N?.t) {
        const lang = document.documentElement.lang || "en";
        label = window.MU_I18N.t(key, lang) || label;
      }
    } catch (_) {}
    btn.setAttribute("aria-label", label);
    btn.title = label;
  };

  const toggle = () => {
    const current = document.documentElement.getAttribute("data-theme") || read();
    apply(current === "light" ? "dark" : "light");
  };

  const init = () => {
    apply(read());
    document.getElementById("theme-toggle")?.addEventListener("click", toggle);
    document.addEventListener("mu:langchange", () => {
      syncButton(document.documentElement.getAttribute("data-theme") || "dark");
    });
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch (_) {}
      apply(e.matches ? "light" : "dark");
    });
  };

  window.MU_THEME = { apply, toggle, read };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
