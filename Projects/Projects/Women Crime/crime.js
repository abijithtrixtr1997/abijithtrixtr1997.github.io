async function loadChartData() {
    const response = await fetch('./Data/State_Sum.json');
    const data = await response.json();

    const states = data.map(item => item.State);
    const assaults = data.map(item => item["Sum of Total Assaults"]);
    

    const ctx = document.getElementById('mychart');
    ctx.style.height = "50dvh";
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: states,
            datasets: [{
                label: 'Number of Assaults',
                data: assaults,
                backgroundColor: 'rgb(121, 128, 128, 0.5)',
                borderColor: 'rgb(121, 128, 128, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: {
                    ticks: {
                        rotation: 0,
                        align: 'center'
                    }
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}

loadChartData();

const assaultdata = await fetch('./Data/Population_Assault.json');
const populationdatadata = await assaultdata.json();

const states = populationdatadata.map(item => item.State);
const assault1 = populationdatadata.map(item => item["2001 Assaults"]);
const assault2 = populationdatadata.map(item => item["2011 Assaults"]);
const assault3 = populationdatadata.map(item => item["2021 Assaults"]);

const increase1 = assault1.map((val, index) => assault2[index] - val);
const increase2 = assault2.map((val, index) => assault3[index] - val);

const ctx = document.getElementById("assaultratio");
ctx.style.height = "50dvh";
const myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: states,
        datasets: [{
            label: "2001-2011 Increase",
            data: increase1,
            backgroundColor: 'rgba(100, 100, 100, 0.3)',
            borderColor: 'rgba(100, 100, 100, 0.7)',
            borderWidth: 1
        },
        {
            label: "2011-2021 Increase",
            data: increase2,
            backgroundColor: 'rgba(200, 100, 150, 0.3)',
            borderColor: 'rgba(200, 100, 150, 0.7)',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    font: { size: 14}
                }
            },
            y: {
                beginAtZero: true,
                stacked: true
            }
        }
    }
})

const yearwsie = await fetch('./Data/yearwiseassaults.json');
const yeardata = await yearwsie.json();

const years = yeardata.map(item => item.Year);
const numbers = yeardata.map(item => item["Sum of Total Assaults"])

const difference = numbers.map((val, index, arr) => {
    if (index === 0) return null; // Placeholder for index 0
    return arr[index] - arr[index - 1]; // Difference calculation
});

const numbersfinal = difference.map((val, index) => numbers[index] - val)

const ctx1 = document.getElementById("Yearwise");
ctx1.style.height = "30dvh";

const myChart1 = new Chart(ctx1,{
    data: {
        labels: years,
        datasets: [{
            type: 'line',
            label: "Total Assaults",
            data: numbers,
            backgroundColor: 'rgba(100, 100, 100, 0.3)',
            borderColor: 'rgba(100, 100, 100, 0.7)',
            borderWidth: 1
        },
        {
            type: 'bar',
            label: "Variation",
            data: difference,
            backgroundColor: difference.map(value => 
                value > 0 ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0, 128, 0, 0.3)' // Red for negative, Green for positive
            ),
            borderColor: difference.map(value => 
                value > 0 ? 'rgba(255, 0, 0, 0.7)' : 'rgba(0, 128, 0, 0.7)' // Darker red and green for contrast
            ),
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    font: { size: 14}
                }
            },
            y: {
                beginAtZero: true,
                stacked: true
            }
        }
    }
})

const treejson = await fetch('./Data/heatmap.json');
const treedata = await treejson.json();

const types = treedata.map(item => item.Type);
const counts = treedata.map(item => item["SelectedColumnValue"]);

const ctx2 = document.getElementById("treemap").getContext('2d');
const canvas2 = document.getElementById("treemap");
canvas2.style.maxHeight = "35dvh";

const myChart2 = new Chart(ctx2, {
        type: 'polarArea',
        data: {
            labels: types,
            datasets: [{
                label: "Test",
                data: counts,
                backgroundColor: counts.map(() => {
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    return `rgba(${r}, ${g}, ${b}, 0.6)`; // Background with 60% opacity
                })
            }]
        },
        options: {}
    }
)

const themeSwitch = document.getElementById("theme-switcher");
let darkMode = localStorage.getItem('darkmode'); 

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

const svgjson = await fetch("./Data/svgHover.json");
const svgdata = await svgjson.json();
console.log(svgdata)

const sID = svgdata.map(item => item["ID"]);
const sColor = svgdata.map(item => item["Sum of Total Assaults"]);

console.log(sID);
console.log(sColor);

const maxColorValue = Math.max(...sColor);

function updateSVGFill() {
    // Iterate over the sID and sColor arrays
    sID.forEach((id, index) => {
      // Normalize the sColor value to range [0, 1]
      const normalizedAlpha = sColor[index] / maxColorValue;  // Normalize by the max value
      const rgbaColor = `rgba(255, 87, 51, ${normalizedAlpha})`;  // Assuming a black fill with normalized alpha
      
      // Find the SVG element with the corresponding ID
      const svgPaths = document.querySelectorAll(`#${id}`);
      svgPaths.forEach(svgPath => {
        // Update the fill attribute for each path with the same ID
        svgPath.setAttribute('fill', rgbaColor);
      });
    });
  }
  
  // Call the function to update the fill
updateSVGFill();

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Get the SVG element
  const svgElement = document.querySelector('.india-map');
  const checkElement = document.querySelector('.india-map');
  
  // Listen for scroll events to detect when the SVG is in view
  window.addEventListener('scroll', function() {
    if (isInViewport(checkElement)) {
      svgElement.classList.add('visible'); // Trigger the animation when in view
    }
  });

  // Get all path elements
const paths = document.querySelectorAll('svg path');

// Get the tooltip element
const tooltip = document.getElementById('tooltip');

// Function to show tooltip
function showTooltip(event) {
  const pathName = event.target.getAttribute('name');
  tooltip.textContent = pathName;  // Set tooltip text

  // Position the tooltip based on the mouse position
  const x = event.pageX + 10;  // Add some offset for better positioning
  const y = event.pageY + 10;

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;

  tooltip.style.opacity = 1;  // Make the tooltip visible
}

// Function to hide tooltip
function hideTooltip() {
  tooltip.style.opacity = 0;  // Hide the tooltip
}

// Add event listeners to each path
paths.forEach(path => {
  path.addEventListener('mouseenter', showTooltip);
  path.addEventListener('mouseleave', hideTooltip);
});

document.querySelectorAll('.growth-breakdown').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#e0f2fe';
        item.style.transform = 'scale(1.02)';
        item.style.transition = 'all 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#f0f9ff';
        item.style.transform = 'scale(1)';
    });
});

console.log(populationdatadata)

const population2001 = populationdatadata.map(item => item["2001 Population"])
const population2011 = populationdatadata.map(item => item["2011 Population"])
const population2021 = populationdatadata.map(item => item["2021 Population"])

const popctx = document.getElementById("population-2021");
popctx.style.height = "70dvh";
popctx.style.width = "100%";
const populationChart = new Chart(popctx,{
    type: 'line',
    data: {
        labels: states,
        datasets: [{
            label: "Population 2001",
            data: population2001,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: "Population 2011",
            data: population2011,
            fill: false,
            borderColor: 'rgb(175, 92, 192)',
            tension: 0.1
        },
        {
            label: "Population 2021",
            data: population2021,
            fill: false,
            borderColor: 'rgb(175, 92, 92)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    font: { size: 14}
                }
            },
            y: {
                beginAtZero: true,
                stacked: true
            }
        }
    }
})
