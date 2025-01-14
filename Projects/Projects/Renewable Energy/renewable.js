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
const topContainer = document.querySelector('.top-container');

document.getElementById('theme-switcher').addEventListener('click', () => {
    if (document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode'); // Remove dark mode
        topContainer.classList.remove('darkmode');
        localStorage.setItem('darkmode', 'inactive'); // Store the inactive state
    } else {
        document.body.classList.add('darkmode'); // Add dark mode
        topContainer.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active'); // Store the active state
    }
});

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active'); // Store the active state
}

// Check if dark mode is active on initial load
if (darkMode === "active") enableDarkmode();

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
    menuIcon.style.display = 'none';
    sidebar.classList.add("open");
    sidebar.classList.remove("hidden");
    sidebar.classList.remove("removed");
}

menuIcon.addEventListener('click', displaysidebar);
sidebar.addEventListener('click', closesidebar);

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

const elements = document.querySelectorAll('.type-solar, .type-hydro, .type-wind');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fade-in 2s linear forwards';
        }
    });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

window.onload = () => {
    const path = document.querySelector('.growth-line path');
    const pathLength = path.getTotalLength();
    
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    console.log(pathLength);
    
    // Now apply the animations
  };

  const pathObserver = new IntersectionObserver((entries, pathObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const path = entry.target.querySelector('.growth-line path');
        const polygon = entry.target.querySelector('.growth-line polygon');
  
        // Trigger the path animation
        path.style.animation = 'drawPath 2s ease forwards';
  
        // Trigger the arrowhead animation after the path animation completes
        polygon.style.animation = 'showArrowHead 1.5s ease 2s forwards';
  
        pathObserver.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, {
    threshold: 0.5 // Trigger the animation when 50% of the container is in view
  });
  
  // Start observing the container
  const arrowContainer = document.querySelector('.arrow-container');
  pathObserver.observe(arrowContainer);


