document.addEventListener("DOMContentLoaded", () => {
    const text = "Tracing the Path to a Greener Tomorrow:<br> Uncovering Decades of Renewable Energy Progress";
    const speed = 10; // Typing speed in milliseconds
    let i = 0;

    function type() {
        if (i < text.length) {
            // Check if the current character starts an HTML tag
            if (text.substring(i, i + 4) === "<br>") {
                document.getElementById("typing-text").innerHTML += "<br>";
                i += 4; // Move index past the <br> tag
            } else {
                document.getElementById("typing-text").innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }

    type();
});

let darkMode = localStorage.getItem('darkmode'); // Use the same key as in enable/disable functions
const themeSwitch = document.getElementById("theme-switcher");
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

function showsidebar(){
    sidebar.style.display = 'flex';
    menuIcon.style.display = 'none'
}

function closesidebar(){
    sidebar.style.display = 'none';
    menuIcon.style.display = 'flex'
}

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuIcon.contains(e.target) && window.innerWidth < 1000) {
        sidebar.style.display = 'none'; // Hide the sidebar
        menuIcon.style.display = 'flex'; // Show the menu icon again
    }
});

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
}

function disableDarkMode() {
    darkMode = "inactive";
    localStorage.setItem('darkmode', darkMode);
}

// Event listener for theme toggle (you can implement this based on your design)
document.querySelector('#theme-switcher').addEventListener('change', toggleDarkMode);

const navLinks = document.querySelectorAll('.left-navbar a');
        
        // Add click event listeners to each link
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                
                // Get the target container's ID from the data attribute
                const target = link.getAttribute('data-target');
                console.log(target)
                
                // Hide all containers
                document.querySelectorAll('.container').forEach(container => {
                    console.log(container)
                    container.classList.remove('active');
                });
                
                // Show the selected container
                document.getElementById(target).classList.add('active');
            });
        });

        // Display Solar Energy by default
        document.getElementById('wind-energy').classList.add('active');


$(document).ready(function() {
    $('#dataTable').DataTable();
});

import data from "./correlation.json" with {type: "json"}
console.log(data)

function convertJSONToTable(jsonData) {
    let headers = Object.keys(jsonData[0]);
    let table = '<table><thead><tr>';
  
    headers.forEach(header => table += `<th>${header}</th>`);
    table += '</tr></thead><tbody>';
  
    jsonData.forEach(row => {
      table += '<tr>';
      headers.forEach(
        header => {
            let value = row[header];
            if(typeof value == 'number') {
                value = value.toFixed(2);
            }
            table += `<td>${value}</td>`
        }
      );
      table += '</tr>';
    });
  
    table += '</tbody></table>';
  
    document.getElementById('dataTable').innerHTML = table;
  }

  convertJSONToTable(data)

