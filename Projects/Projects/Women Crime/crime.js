
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

console.log(treedata)

const types = treedata.map(item => item.Type);
const counts = treedata.map(item => item["SelectedColumnValue"]);

console.log(types);
console.log(counts);

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
