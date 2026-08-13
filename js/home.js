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
})();
