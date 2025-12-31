// Year in footer
(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// Expandable project cards
(() => {
  const cards = document.querySelectorAll("[data-expandable]");
  if (!cards.length) return;

  cards.forEach((card) => {
    const btn = card.querySelector("[data-expand-btn]");
    const panel = card.querySelector("[data-expand-panel]");
    if (!btn || !panel) return;

    btn.addEventListener("click", () => {
      const open = card.classList.toggle("is-open");
      btn.textContent = open ? "收合細節" : "展開細節";
    });
  });
})();
