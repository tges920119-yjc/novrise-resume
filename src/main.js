<<<<<<< HEAD
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const buildEl = document.getElementById("buildInfo");
  if (buildEl) {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    buildEl.textContent =
      "Build: " +
      now.getFullYear() + "-" +
      pad(now.getMonth() + 1) + "-" +
      pad(now.getDate()) + " " +
      pad(now.getHours()) + ":" +
      pad(now.getMinutes());
  }
})();

const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
>>>>>>> ade1589 (feat: add projects page)
