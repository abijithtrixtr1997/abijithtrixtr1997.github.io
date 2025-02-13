async function loadChartData() {
  const response = await fetch("./Data/State_Sum.json");
  const data = await response.json();

  const states = data.map((item) => item.State);
  const assaults = data.map((item) => item["Sum of Total Assaults"]);

  const ctx = document.getElementById("mychart");
  ctx.style.height = "50dvh";
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: states,
      datasets: [
        {
          label: "Number of Assaults",
          data: assaults,
          backgroundColor: "rgb(121, 128, 128, 0.5)",
          borderColor: "rgb(121, 128, 128, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      scales: {
        x: {
          ticks: {
            rotation: 0,
            align: "center",
          },
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });
}

loadChartData();

const assaultdata = await fetch("./Data/Population_Assault.json");
const populationdatadata = await assaultdata.json();

const states = populationdatadata.map((item) => item.State);
const assault1 = populationdatadata.map((item) => item["2001 Assaults"]);
const assault2 = populationdatadata.map((item) => item["2011 Assaults"]);
const assault3 = populationdatadata.map((item) => item["2021 Assaults"]);

const increase1 = assault1.map((val, index) => assault2[index] - val);
const increase2 = assault2.map((val, index) => assault3[index] - val);

const ctx = document.getElementById("assaultratio");
ctx.style.height = "80dvh";
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: states,
    datasets: [
      {
        label: "2001-2011 Increase",
        data: increase1,
        backgroundColor: "rgba(100, 100, 100, 0.3)",
        borderColor: "rgba(100, 100, 100, 0.7)",
        borderWidth: 1,
      },
      {
        label: "2011-2021 Increase",
        data: increase2,
        backgroundColor: "rgba(200, 100, 150, 0.3)",
        borderColor: "rgba(200, 100, 150, 0.7)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: { size: 14 },
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
  },
});

const yearwsie = await fetch("./Data/yearwiseassaults.json");
const yeardata = await yearwsie.json();

const years = yeardata.map((item) => item.Year);
const numbers = yeardata.map((item) => item["Sum of Total Assaults"]);

const difference = numbers.map((val, index, arr) => {
  if (index === 0) return null; // Placeholder for index 0
  return arr[index] - arr[index - 1]; // Difference calculation
});

const numbersfinal = difference.map((val, index) => numbers[index] - val);

const ctx1 = document.getElementById("Yearwise");
ctx1.style.height = "30dvh";

const myChart1 = new Chart(ctx1, {
  data: {
    labels: years,
    datasets: [
      {
        type: "line",
        label: "Total Assaults",
        data: numbers,
        backgroundColor: "rgba(100, 100, 100, 0.3)",
        borderColor: "rgba(100, 100, 100, 0.7)",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "Variation",
        data: difference,
        backgroundColor: difference.map(
          (value) =>
            value > 0 ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 128, 0, 0.3)" // Red for negative, Green for positive
        ),
        borderColor: difference.map(
          (value) =>
            value > 0 ? "rgba(255, 0, 0, 0.7)" : "rgba(0, 128, 0, 0.7)" // Darker red and green for contrast
        ),
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: { size: 14 },
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
  },
});

const treejson = await fetch("./Data/heatmap.json");
const treedata = await treejson.json();

const types = treedata.map((item) => item.Type);
const counts = treedata.map((item) => item["SelectedColumnValue"]);

const ctx2 = document.getElementById("treemap").getContext("2d");
const canvas2 = document.getElementById("treemap");
canvas2.style.maxHeight = "35dvh";

const myChart2 = new Chart(ctx2, {
  type: "polarArea",
  data: {
    labels: types,
    datasets: [
      {
        label: "Test",
        data: counts,
        backgroundColor: counts.map(() => {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          return `rgba(${r}, ${g}, ${b}, 0.6)`; // Background with 60% opacity
        }),
      },
    ],
  },
  options: {},
});

const themeSwitch = document.getElementById("theme-switcher");
let darkMode = localStorage.getItem("darkmode");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active"); // Store the active state
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", ""); // Clear the darkmode state
};

// Check if dark mode is active on initial load
if (darkMode === "active") {
  enableDarkmode();
  console.log("active");
} else {
  console.log("inactive");
}

// Event listener for the toggle switch
themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkmode"); // Get the updated state
  darkMode !== "active" ? enableDarkmode() : disableDarkmode(); // Toggle based on current state
});

const menuIcon = document.getElementById("menuIcon");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-button a");

function closesidebar() {
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

menuIcon.addEventListener("click", displaysidebar);
sidebar.addEventListener("click", closesidebar);

// // Optional: If you want to hide the sidebar when clicking outside of it
document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("open") && // Check if sidebar has the 'open' class
    !sidebar.contains(e.target) &&
    !menuIcon.contains(e.target) &&
    window.innerWidth < 1000
  ) {
    sidebar.classList.remove("open");
  }
});

const svgjson = await fetch("./Data/svgHover.json");
const svgdata = await svgjson.json();
console.log(svgdata);

const sID = svgdata.map((item) => item["ID"]);
const sColor = svgdata.map((item) => item["Sum of Total Assaults"]);

console.log(sID);
console.log(sColor);

const maxColorValue = Math.max(...sColor);

function updateSVGFill() {
  // Iterate over the sID and sColor arrays
  sID.forEach((id, index) => {
    // Normalize the sColor value to range [0, 1]
    const normalizedAlpha = sColor[index] / maxColorValue; // Normalize by the max value
    const rgbaColor = `rgba(255, 87, 51, ${normalizedAlpha})`; // Assuming a black fill with normalized alpha

    // Find the SVG element with the corresponding ID
    const svgPaths = document.querySelectorAll(`#${id}`);
    svgPaths.forEach((svgPath) => {
      // Update the fill attribute for each path with the same ID
      svgPath.setAttribute("fill", rgbaColor);
    });
  });
}

// Call the function to update the fill
updateSVGFill();

// Get the SVG element

// Get all path elements
// const paths = document.querySelectorAll('svg path');

// // Get the tooltip element
// const tooltip = document.getElementById('tooltip');

// // Function to show tooltip
// function showTooltip(event) {
//   const pathName = event.target.getAttribute('name');
//   tooltip.textContent = pathName;  // Set tooltip text

//   // Position the tooltip based on the mouse position
//   const x = event.pageX + 10;  // Add some offset for better positioning
//   const y = event.pageY + 10;

//   tooltip.style.left = `${x}px`;
//   tooltip.style.top = `${y}px`;

//   tooltip.style.opacity = 1;  // Make the tooltip visible
// }

// // Function to hide tooltip
// function hideTooltip() {
//   tooltip.style.opacity = 0;  // Hide the tooltip
// }

// // Add event listeners to each path
// paths.forEach(path => {
//   path.addEventListener('mouseenter', showTooltip);
//   path.addEventListener('mouseleave', hideTooltip);
// });

console.log(populationdatadata);

const population2001 = populationdatadata.map(
  (item) => item["2001 Population"]
);
const population2011 = populationdatadata.map(
  (item) => item["2011 Population"]
);
const population2021 = populationdatadata.map((item) =>
  parseInt(item["2021 Population"].replace(/,/g, ""), 10)
);

const popctx = document.getElementById("population-2021");

console.log(population2001);
console.log(population2011);
console.log(population2021);

popctx.style.height = "50dvh";
popctx.style.width = "100%";
const populationChart = new Chart(popctx, {
  type: "line",
  data: {
    labels: states,
    datasets: [
      {
        label: "Population 2001",
        data: population2001,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Population 2011",
        data: population2011,
        fill: false,
        borderColor: "rgb(175, 92, 192)",
        tension: 0.1,
      },
      {
        label: "Population 2021",
        data: population2021,
        fill: false,
        borderColor: "rgb(175, 92, 92)",
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: { size: 14 },
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
  },
});

const stateidjson = await fetch("./Data/State_ID.json");
const stateiddata = await stateidjson.json();

const statewisejson = await fetch("./Data/State_Wise.json");
const statewisedata_1 = await statewisejson.json();
const statewisedata = statewisedata_1.filter((item) => item.Year < 2020);

console.log(stateiddata);
console.log(statewisedata);
const uniqueIDs = [...new Set(statewisedata.map((item) => item.ID))];
console.log(uniqueIDs);

const drawyearlyassaults = (smalldata) => {
  const ctx_1 = document.getElementById("yearly-assaults");
  const years = smalldata.map((item) => item.Year);

  const numbers = smalldata.map((item) => item["Sum of Total Assaults"]);
  const myChart1 = new Chart(ctx_1, {
    data: {
      labels: years,
      datasets: [
        {
          type: "line",
          label: "Total Assaults",
          data: numbers,
          borderColor: "#640404",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: false,
          ticks: {
            font: { size: 14, color: "#640404" },
          },
        },
        y: {
          beginAtZero: true,
          stacked: false,
        },
      },
    },
  });
};

const drawtypevsyear = (smalldata) => {
  const ctx_2 = document.getElementById("category-assaults");
  const years = smalldata.map((item) => item.Year);
  const modesty = smalldata.map((item) => item["Sum of Assault on Modesty"]);
  const domestic = smalldata.map((item) => item["Sum of Domestic Violence"]);
  const kidnap = smalldata.map((item) => item["Sum of Kidnap and Assault"]);
  const rape = smalldata.map((item) => item["Sum of Rape"]);
  const trafficking = smalldata.map((item) => item["Sum of Trafficking"]);
  const dowry = smalldata.map((item) => item["Sum of Dowry Deaths"]);
  ctx_2.style.height = "auto";
  ctx_2.style.maxWidth = "90%";
  const myChart1 = new Chart(ctx_2, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "Domestic Violence",
          backgroundColor: "#FF5733", // Bright Red-Orange
          borderColor: "#C70039", // Deep Red
          data: domestic,
          fill: "origin",
        },
        {
          label: "Kidnap and Assault",
          backgroundColor: "#1F618D", // Strong Blue
          borderColor: "#154360", // Darker Blue
          data: kidnap,
          fill: "origin",
        },
        {
          label: "Assault on Modesty",
          backgroundColor: "#2ECC71", // Bright Green
          borderColor: "#1D8348", // Dark Green
          data: modesty,
          fill: "origin",
        },
        {
          label: "Dowry Deaths",
          backgroundColor: "#F1C40F", // Yellow
          borderColor: "#B7950B", // Dark Yellow/Gold
          data: dowry,
          fill: "origin",
        },
        {
          label: "Rape",
          backgroundColor: "#9B59B6", // Purple
          borderColor: "#6C3483", // Darker Purple
          data: rape,
          fill: "origin",
        },
        {
          label: "Trafficking",
          backgroundColor: "#E74C3C", // Bright Red
          borderColor: "#922B21", // Darker Red
          data: trafficking,
          fill: "origin",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: true,
          ticks: {
            font: { size: 14 },
          },
        },
        y: {
          beginAtZero: true,
          stacked: true,
        },
      },
    },
  });
};

stateiddata.forEach((item) => {
  const svgPath = document.getElementById(item.ID);
  if (svgPath) {
    svgPath.addEventListener("click", function () {
      console.log(item.State + " clicked");
      const clickedID = item.State + "-report";
      console.log(clickedID);
      const newDiv = document.createElement("div");
      newDiv.id = "to-remove"; // Add ID
      newDiv.classList.add("layer-on");
      newDiv.style.display = "flex";
      newDiv.style.position = "absolute";
      newDiv.style.height = "100dvh";
      newDiv.style.width = "100dvw";
      console.log(newDiv);
      document.getElementById("svg-map-selector").appendChild(newDiv);
      const inDiv = document.createElement("div");
      inDiv.classList.add("in-full");
      document.getElementById("to-remove").appendChild(inDiv);
      const someID = item.ID; // Example ID
      const smalldata = statewisedata.filter((item) => item.ID === someID);
      console.log(smalldata);
      const totalAssaults = smalldata.reduce(
        (sum, item) => sum + item["Sum of Total Assaults"],
        0
      );
      const totalDomesticViolence = smalldata.reduce(
        (sum, item) => sum + item["Sum of Domestic Violence"],
        0
      );
      const totalKidnap = smalldata.reduce(
        (sum, item) => sum + item["Sum of Kidnap and Assault"],
        0
      );
      const totalRape = smalldata.reduce(
        (sum, item) => sum + item["Sum of Rape"],
        0
      );
      const totalModesty = smalldata.reduce(
        (sum, item) => sum + item["Sum of Assault on Modesty"],
        0
      );
      const totalDowry = smalldata.reduce(
        (sum, item) => sum + item["Sum of Dowry Deaths"],
        0
      );
      const totalTrafficking = smalldata.reduce(
        (sum, item) => sum + item["Sum of Trafficking"],
        0
      );
      console.log(totalAssaults);
      console.log(totalDomesticViolence);
      console.log(totalKidnap);
      console.log(totalRape);
      console.log(totalModesty);
      console.log(totalDowry);
      console.log(totalTrafficking);
      inDiv.innerHTML = `
        <div class="indiv">
          <h1>${item.State}</h1>
        </div>
        <div class="graphs-inside">
          <div class="leftGraphs">
            <div class="topGraph">
              <div class="topLeftTable">
                <h2 class="statistics-title">Crime Statistics Report</h2>
                <table class="statistics-table">
                  <tr>
                    <th>Type</th>
                    <th>Count</th>
                  </tr>
                  <tr>
                    <td>Domestic Violence</td>
                    <td>${totalDomesticViolence}</td>
                  </tr>
                  <tr>
                    <td>Kidnap and Assault</td>
                    <td>${totalKidnap}</td>
                  </tr>
                  <tr>
                    <td>Rape</td>
                    <td>${totalRape}</td>
                  </tr>
                  <tr>
                    <td>Assault on Modesty</td>
                    <td>${totalModesty}</td>
                  </tr>
                  <tr>
                    <td>Dowry Deaths</td>
                    <td>${totalDowry}</td>
                  </tr>
                  <tr>
                    <td>Trafficking</td>
                    <td>${totalTrafficking}</td>
                  </tr>
                </table>
              </div>
              <div class="topTotalAssaults">
                <h1><span class="headingAssaults">Total Assaults</span> <br>${totalAssaults}</h1>
              </div>
            </div>
            <div class="bottomGraph">
              <h1>Assaults per Year</h1>
              <canvas id="yearly-assaults"></canvas>
            </div>
          </div>
          <div class="rightGraph">
            <div class="right-graph-container">
              <h1>Assaults by Category</h1>
              <canvas id="category-assaults"></canvas>
            </div>
          </div>
        </div>
      `;
      drawyearlyassaults(smalldata);
      drawtypevsyear(smalldata);
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const divToRemove = document.getElementById("to-remove");
    console.log(divToRemove);
    divToRemove.remove();
  }
});
