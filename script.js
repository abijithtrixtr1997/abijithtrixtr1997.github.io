
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

const menuIcon = document.getElementById('menuIcon');
const sidebar = document.querySelector(".sidebar");

function showsidebar(){
    
    sidebar.style.display = 'flex';
    menuIcon.style.display = 'none'
    
}

function closesidebar(){
    sidebar.style.display = 'none';
    menuIcon.style.display = 'flex'
}

// menuIcon.addEventListener('click', () => {
//     sidebar.classList.toggle('active'); // Toggle the sidebar visibility
//     menuIcon.classList.toggle('hidden'); // Hide the menu icon when the sidebar is active
// });

// // Optional: If you want to hide the sidebar when clicking outside of it
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
