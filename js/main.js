
const THEMES = ["default", "night"];

function toggleTheme() {
    const current = document.documentElement.dataset.theme || "default";
    const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];

    document.documentElement.dataset.theme = next;
    try {localStorage.setItem("theme", next); } catch {}
}

// const updated = document.getElementById("updated");
// if (updated) updated.textContent = new Date(document.lastModified).toLocaleDateString("en-GB")