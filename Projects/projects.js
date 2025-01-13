const colorThemes = {
    dark: [
        '#323445', // Indigo
        '#5f616e', // DarkRed
        '#767783', // OrangeRed
        '#a4a5ac', // SeaGreen
        '#ffffff', // Gold
    ],
    light: [
        '#3D5A73', // LightSteelBlue
        '#2F3D40', // LightSlateGray
        '#455559', // LightGray
        '#28403D', // DarkGray
        '#182625', // RosyBrown
    ],
};

let darkMode = localStorage.getItem('darkmode'); // Use the same key as in enable/disable functions
const themeSwitch = document.getElementById("theme-switcher");
let currentTheme = darkMode === "active" ? colorThemes.dark : colorThemes.light; // Set theme based on dark mode state
let barCount;
let barWidth;
let barHeight = []; // Array to hold the heights of the bars
let barColors = []; // Array to hold the colors of the bars
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const themeSelector = document.getElementById('theme-switcher');

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
    toggleDarkMode();
});

const menuIcon = document.getElementById('menuIcon');
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-button a");

function closesidebar(){
    sidebar.classList.remove("open");
    sidebar.classList.add("removed");
    menuIcon.style.display = 'flex'
    setTimeout(() => {
        sidebar.classList.add("hidden"); // Hide sidebar completely
      }, 350);
}

function displaysidebar() {
    sidebar.classList.add("open");
    sidebar.classList.remove("hidden");
    sidebar.classList.remove("removed");
}

menuIcon.addEventListener('click', displaysidebar);
sidebar.addEventListener('click', closesidebar);

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuIcon.contains(e.target) && window.innerWidth < 1000) {
        sidebar.style.display = 'none'; // Hide the sidebar
        menuIcon.style.display = 'flex'; // Show the menu icon again
    }
});

function matchContainerWidth() {
    const rightContainer = document.querySelector('.right-container');
    const connectContainer = document.querySelector('.connect-container');

    if (rightContainer && connectContainer) {
        const computedStyle = window.getComputedStyle(rightContainer);
        
        // Calculate the total width excluding padding and margins
        const rightContainerWidth = rightContainer.clientWidth 
                                    - parseFloat(computedStyle.paddingLeft) 
                                    - parseFloat(computedStyle.paddingRight)
                                    - parseFloat(computedStyle.marginLeft) 
                                    - parseFloat(computedStyle.marginRight);
        
        // Set the width of the connect container to match
        connectContainer.style.width = rightContainerWidth + 'px';
    }
}

window.addEventListener('load', matchContainerWidth);
window.addEventListener('resize', matchContainerWidth);



// Set initial canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log("Initial canvas width: " + canvas.width);

// Bar properties


// Initialize bar heights and assign random colors based on the selected theme
function initializeBars(theme) {
    barCount = Math.floor(canvas.width / 8); // Calculate number of bars based on the canvas width
    barWidth = canvas.width / (barCount * 2);

    for (let i = 0; i < barCount; i++) {
        barHeight[i] = Math.random() * (canvas.height * 3 / 5); // Random heights up to 3/4 of the canvas height
        barColors[i] = theme[Math.floor(Math.random() * theme.length)]; // Random color from the theme
    }
}

function initializeBars_theme(theme) {
    for (let i = 0; i < barCount; i++) {
        barColors[i] = theme[Math.floor(Math.random() * theme.length)]; // Random color from the theme
    }
}

// Function to draw bars
function drawBars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    for (let i = 0; i < barCount; i++) {
        // Calculate bar position
        const x = (i * 2 + 1) * barWidth; // Center the bars
        const y = canvas.height - barHeight[i];

        // Draw the bar with the assigned color
        ctx.fillStyle = barColors[i];
        ctx.fillRect(x, y, barWidth, barHeight[i]);
    }
}

// Function to respond to mouse movement
function onMouseMove(event) {
    const mouseX = event.clientX; // Get mouse X position
    const mouseY = event.clientY; // Get mouse Y position

    // Get the bounding rectangle of the .top-container
    const container = document.querySelector('.top-container');
    const rect = container.getBoundingClientRect();

    // Check if the mouse is inside the .top-container
    if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
        for (let i = 0; i < barCount; i++) {
            // Calculate bar position
            const x = (i * 2 + 1) * barWidth;

            // Check if the mouse is over the bar (only x coordinate)
            if (mouseX > x && mouseX < x + barWidth) {
                // Change the bar height and color when hovered
                barHeight[i] = Math.random() * (canvas.height * 3 / 5); // Set height to a random value when hovered
                barColors[i] = currentTheme[Math.floor(Math.random() * currentTheme.length)]; // Set a new random color from the current theme
                drawBars(); // Redraw the bars after interaction
                break; // Exit loop after changing one bar
            }
        }
    }
}

// Check the current dark mode state and apply the theme


console.log(currentTheme)

// Handle dark mode toggle
function toggleDarkMode() {
    if (darkMode === "active") {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Functions to enable and disable dark mode
function enableDarkMode() {
    darkMode = "active";
    localStorage.setItem('darkmode', darkMode);
    currentTheme = colorThemes.dark; // Use dark theme
    initializeBars_theme(currentTheme);
    drawBars();
}

function disableDarkMode() {
    darkMode = "inactive";
    localStorage.setItem('darkmode', darkMode);
    currentTheme = colorThemes.light; // Use light theme
    initializeBars_theme(currentTheme);
    drawBars();
}

// Initial setup
initializeBars(currentTheme);
drawBars();
window.addEventListener('mousemove', onMouseMove);

window.addEventListener('resize', () => {
    // Update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const barCount = Math.floor(canvas.width / 8); // Number of bars (adjusted for visibility)
    const barWidth = canvas.width / (barCount * 2); // Width of each bar

    // Reinitialize the bars with the current theme when the window is resized
    initializeBars(currentTheme);
    drawBars(); // Redraw the bars to reflect new sizes
});


// Event listener for theme toggle (you can implement this based on your design)
document.querySelector('#theme-switcher').addEventListener('change', toggleDarkMode);

const clickableContainer1 = document.getElementById('renewable');

// Add click event listener to navigate to a new page
clickableContainer1.addEventListener('click', () => {
    window.location.href = 'Projects/Renewable Energy/renewable.html'; // URL of the new page
});

const clickableContainer2 = document.getElementById('Women');

// Add click event listener to navigate to a new page
clickableContainer2.addEventListener('click', () => {
    window.location.href = 'Projects/Women Crime/Crime.html'; // URL of the new page
});

const clickableContainer3 = document.getElementById('Stock');

// Add click event listener to navigate to a new page
clickableContainer3.addEventListener('click', () => {
    window.location.href = 'Projects/Stock Exchange Database/Stock.html'; // URL of the new page
});

