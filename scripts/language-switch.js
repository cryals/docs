document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        link.href = updateLinkWithLanguage(link.href);
    });

    const langSwitch = document.createElement("div");
    langSwitch.id = "language-switch";
    langSwitch.innerHTML = `
        <div class="dropdown">
            <button class="dropbtn">
                🌐 ${window.location.pathname.includes("/ru/") ? "Русский" : "English"}
            </button>
            <div class="dropdown-content">
                <a href="${changeLanguageUrl("/en/")}" ${window.location.pathname.includes("/en/") ? 'class="selected"' : ''}>
                    English ${window.location.pathname.includes("/en/") ? '' : ''}
                </a>
                <a href="${changeLanguageUrl("/ru/")}" ${window.location.pathname.includes("/ru/") ? 'class="selected"' : ''}>
                    Русский ${window.location.pathname.includes("/ru/") ? '' : ''}
                </a>
            </div>
        </div>
    `;

    const menuBar = document.querySelector(".menu-bar");
    if (menuBar) {
        menuBar.appendChild(langSwitch);
    }
});

function updateLinkWithLanguage(url) {
    return url.replace(/^\/(en|ru)\//, '/$1/');
}

function changeLanguageUrl(lang) {
    const pathname = window.location.pathname;
    const currentLangMatch = pathname.match(/^\/(en|ru)\//);

    if (currentLangMatch) {
        return pathname.replace(currentLangMatch[0], lang);
    } else if (!pathname.startsWith(lang)) {
        return lang + pathname;
    }
    return pathname;
}
