let darkMode = localStorage.getItem('darkmode'); 


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
if (darkMode === "active") {
    enableDarkmode();
    console.log("active")
} else {
    console.log("inactive")
}

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
    setTimeout(() => {
        sidebar.classList.remove("removed");
        sidebar.style.display = "none";
      }, 350);
}

function displaysidebar() {
    sidebar.style.display = "flex";
    sidebar.classList.add("open");
}

menuIcon.addEventListener('click', displaysidebar);
sidebar.addEventListener('click', closesidebar);


// // Optional: If you want to hide the sidebar when clicking outside of it
document.addEventListener('click', (e) => {
    if (
        sidebar.classList.contains('open') && // Check if sidebar has the 'open' class
        !sidebar.contains(e.target) &&
        !menuIcon.contains(e.target) &&
        window.innerWidth < 1000
    ) {
        sidebar.classList.remove('open');
    }
});

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
