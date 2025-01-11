let darkMode = localStorage.getItem('darkmode'); // Use the same key as in enable/disable functions
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

(function(){
    emailjs.init("3UO7ivrnDDE_WT_ZY"); // Replace with your EmailJS user ID
})();

document.getElementById('connectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var message = document.getElementById('connect-message').value;

    emailjs.send("service_jgwb1sj", "template_ucjuy2r", {
        message: message
    }).then(function(response) {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('Failed to send message. Error:', error);
    });
});

const viewMoreButton = document.getElementById("ViewMoreButton");

viewMoreButton.addEventListener("click", () => {
  window.location.href = './Projects/Projects.html';
});
