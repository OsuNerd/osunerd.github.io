
document.addEventListener('DOMContentLoaded', () => {
    let isDarkMode = sessionStorage.isDarkMode;
    if(isDarkMode !== undefined && isDarkMode){
        toggleDarkMode()
    }
});

function toggleDarkMode() {
    let element = document.body;
    sessionStorage.isDarkMode = element.classList.toggle("dark-mode");
}

