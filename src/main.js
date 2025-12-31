(function () {
  // footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // active nav (based on URL)
  const path = (location.pathname || "").toLowerCase();

  function setActive(key) {
    document.querySelectorAll(".nav-link").forEach((a) => {
      if (a.dataset.nav === key) a.classList.add("active");
    });
  }

  if (path.endsWith("/projects.html") || path.includes("/pages/projects.html")) setActive("projects");
  else if (path.endsWith("/contact.html") || path.includes("/pages/contact.html")) setActive("contact");
  else setActive("home");
})();
