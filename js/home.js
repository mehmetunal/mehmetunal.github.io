(() => {
  const header = document.querySelector(".site-header");
  const filters = document.querySelectorAll(".filter-btn");
  const tiles = document.querySelectorAll(".game-tile");

  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filter;
      filters.forEach((item) => item.classList.toggle("is-active", item === btn));
      tiles.forEach((tile) => {
        const show = cat === "all" || tile.dataset.cat === cat;
        tile.hidden = !show;
      });
    });
  });

  // Hover GIF: phone screen shows loader for ~1.5s, then GIF
  document.querySelectorAll(".phone-frame--hover-gif").forEach((frame) => {
    const tile = frame.closest(".game-tile");
    const gif = frame.querySelector(".phone-frame__gif");
    const src = gif?.dataset.src;
    if (!tile || !gif || !src) return;

    const MIN_LOADING_MS = 500;
    let loading = false;
    let gifReady = false;
    let hoverStartedAt = 0;
    let revealTimer = 0;

    const clearRevealTimer = () => {
      if (revealTimer) {
        window.clearTimeout(revealTimer);
        revealTimer = 0;
      }
    };

    const revealGif = () => {
      clearRevealTimer();
      if (!frame.classList.contains("is-hover")) return;
      frame.classList.remove("is-loading");
      frame.classList.add("is-ready");
    };

    const tryReveal = () => {
      if (!frame.classList.contains("is-hover") || !gifReady) return;
      const elapsed = Date.now() - hoverStartedAt;
      const wait = Math.max(0, MIN_LOADING_MS - elapsed);
      clearRevealTimer();
      revealTimer = window.setTimeout(revealGif, wait);
    };

    const ensureGif = () => {
      if (gif.dataset.loaded === "1") {
        gifReady = true;
        return;
      }
      if (loading) return;
      loading = true;

      const onReady = () => {
        gif.dataset.loaded = "1";
        loading = false;
        gifReady = true;
        tryReveal();
      };

      gif.addEventListener("load", onReady, { once: true });
      gif.addEventListener(
        "error",
        () => {
          loading = false;
          frame.classList.remove("is-loading");
        },
        { once: true }
      );
      gif.src = src;

      if (gif.complete && gif.naturalWidth > 0) {
        onReady();
      }
    };

    const enter = () => {
      frame.classList.add("is-hover");
      hoverStartedAt = Date.now();
      gifReady = gif.dataset.loaded === "1";

      // Always show phone loading for at least MIN_LOADING_MS
      frame.classList.remove("is-ready");
      frame.classList.add("is-loading");

      ensureGif();
      tryReveal();
    };

    const leave = () => {
      frame.classList.remove("is-hover", "is-loading", "is-ready");
      clearRevealTimer();
    };

    tile.addEventListener("mouseenter", enter);
    tile.addEventListener("mouseleave", leave);
    tile.addEventListener("focusin", enter);
    tile.addEventListener("focusout", () => {
      if (!tile.contains(document.activeElement)) leave();
    });
  });
})();
