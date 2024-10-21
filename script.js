
let darkMode = localStorage.getItem('darkmode') // Use the same key as in enable/disable functions
const themeSwitch = document.getElementById("theme-switcher");

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active'); // Store the active state
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', ''); // Clear the darkmode state
}

// Check if dark mode is active on initial load
if (darkMode === "active") enableDarkmode();

// Event listener for the toggle switch
themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkmode'); // Get the updated state
    darkMode !== "active" ? enableDarkmode() : disableDarkmode(); // Toggle based on current state
});

function showsidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
}

function closesidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}

const aboutWidth = document.getElementById('right-container');
const widthOfRightContainer = aboutWidth.offsetWidth;

const labelWidth = document.getElementById('connect-container');
labelWidth.style.width = widthOfRightContainer - 40+ 'px';
