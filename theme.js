// Alternância de tema claro/escuro.
// Sem escolha salva, o site segue o tema do sistema. Ao escolher o mesmo tema
// do sistema, a preferência é apagada e o site volta a acompanhar o sistema.
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const themeColorMetas = document.querySelectorAll('meta[name="theme-color"]');

function systemTheme() {
  return prefersDark.matches ? "dark" : "light";
}

function currentTheme() {
  return root.dataset.theme || systemTheme();
}

function saveTheme(theme) {
  try {
    if (theme) localStorage.setItem("theme", theme);
    else localStorage.removeItem("theme");
  } catch { }
}

function sync() {
  toggle.setAttribute("aria-checked", String(currentTheme() === "dark"));

  // Mantém a cor da barra do navegador (mobile) igual ao fundo do tema ativo
  const bg = getComputedStyle(root).getPropertyValue("--bg").trim();
  themeColorMetas.forEach((meta) => meta.setAttribute("content", bg));
}

toggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";

  if (next === systemTheme()) {
    delete root.dataset.theme;
    saveTheme(null);
  } else {
    root.dataset.theme = next;
    saveTheme(next);
  }

  sync();
});

prefersDark.addEventListener("change", sync);
sync();
