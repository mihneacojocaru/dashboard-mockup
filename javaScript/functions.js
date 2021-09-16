
function createGraph(vector){

    let canvasContainer = document.querySelector('.traffic-graph');
    canvasContainer.innerHTML = "";

    let newCanvas = document.createElement('canvas');
    newCanvas.className = ".traffic-chart";
    
    let trafficChart = new Chart(newCanvas,{
        
    type:'line',

    data:vector,

    options:trafficOptions,

    });

    canvasContainer.appendChild(newCanvas);
}

function dailyGraph(){
    let dailyGraphContainer = document.querySelector('.daily-graph');
    dailyGraphContainer.innerHTML = "";

    let newCanvas = document.createElement('canvas');
    newCanvas.className = ".mobile-chart";

    let dailyGraph = new Chart(newCanvas, {
        type:'bar',
        data:trafficDataDaily,
        options:trafficOptions,
    })

    dailyGraphContainer.appendChild(newCanvas);
}

dailyGraph();

function mobileUsers(){
    let mobileUsersContainer = document.querySelector('.mobile-graph');
    mobileUsersContainer.innerHTML = "";

    let newCanvas = document.createElement('canvas');
    newCanvas.className = ".mobile-chart";

    let mobileUsers = new Chart(newCanvas, {
        type:'pie',
        data:trafficDataDaily,
        options:trafficOptions,
    })

    mobileUsersContainer.appendChild(newCanvas);
}

mobileUsers();





// function createGraphBars(trafficData){
//     let chartContainer = document.querySelector('.daily-graph');
//     chartContainer.innerHTML = "";

//     let chartCanvas = document.createElement('canvas');
//     chartCanvas.className = "traffic-chart";

//     let trafficChart = new Chart(chartCanvas,{
    
//         type:'bar',
    
//         data:trafficData,
    
//         options:trafficOptions,
//     });

//     chartContainer.appendChild(chartCanvas);
// }

// createGraphBars(trafficDataDaily);

// function createPieGraph(trafficData){
//     let chartContainer = document.querySelector('.mobile-graph');
//     chartContainer.innerHTML = "";

//     let chartCanvas = document.createElement('canvas');
//     chartCanvas.className = "traffic-chart";

//     let trafficChart = new Chart(chartCanvas,{
    
//         type:'pie',
    
//         data:trafficData,
    
//         options:trafficOptions,
//     });

//     chartContainer.appendChild(chartCanvas);
// }

// createPieGraph(trafficDataMonthly);