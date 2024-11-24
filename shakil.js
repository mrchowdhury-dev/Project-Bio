let theme = localStorage.getItem("theme") || "light";

if (theme === "blue") {
    document.documentElement.setAttribute("data-theme", "blue");
    document.getElementById("theme-icon").innerText = "🌞";
}

function toggleTheme() {
    if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "blue");
        document.getElementById("theme-icon").innerText = "🌞";
        theme = "blue";
    } else {
        document.documentElement.removeAttribute("data-theme");
        document.getElementById("theme-icon").innerText = "🌙";
        theme = "light";
    }

    localStorage.setItem("theme", theme);
}
