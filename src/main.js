// 1. Loading 動畫控制
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('is-hidden');
    }, 800);
  }
});

// 2. 自動更新 Footer 年份
(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// 3. 專案卡片展開/收合功能
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
