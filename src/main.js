(() => {
  // footer 年份
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // 可選：在本機 file:/// 開啟時，提醒你相對路徑是正常的
  // 這段不影響 GitHub Pages
})();
