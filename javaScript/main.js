let btnClose = document.addEventListener("click", e => {
  let obj = e.target;
  if (obj.id == "alertClose") {
    obj.parentNode.classList.add("moveRight");
    setTimeout(() => {
      obj.parentNode.style.display = "none";
    }, 400);
  }
});


createGraph(trafficDataHourly);



let trafficButtons = document.addEventListener("click", element => {

  let obj = element.target;

  let allSpans = document.querySelectorAll(".buttons > span");

  if (obj.textContent == "Hourly") {

    allSpans.forEach(element => {
      element.classList.remove("selectedBtn");
    });
    obj.classList.add("selectedBtn");
    createGraph(trafficDataHourly);

  } else if (obj.textContent == "Daily") {

    allSpans.forEach(element => {
      element.classList.remove("selectedBtn");
    });
    obj.classList.add("selectedBtn");
    createGraph(trafficDataDaily);

  } else if (obj.textContent == "Weekly") {

    allSpans.forEach(element => {
      element.classList.remove("selectedBtn");
    });
    obj.classList.add("selectedBtn");
    createGraph(trafficDataWeekly);
  } else if (obj.textContent == "Monthly") {
    allSpans.forEach(element => {
      element.classList.remove("selectedBtn");
    });
    obj.classList.add("selectedBtn");

    let chartCanvas = document.querySelector('.traffic-chart');

    createGraph(trafficDataMonthly);

    
  }
});

/***
 * 
 * TEST THINGS
 * 
 */
// let trafficData = {
//   labels: [
//     "16-22",
//     "23-29",
//     "30-5",
//     "6-12",
//     "13-19",
//     "20-26",
//     "27-3",
//     "4-10",
//     "11-17",
//     "18-24",
//     "25-31",
//   ],
//   datasets: [
//     {
//       data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 5500],
//       backgroundColor: "#7476c0",

//       borderWidth: 1,
//     },
//   ],
// };

// //Graph Options

// let trafficOptions = {
//   aspectRatio: 2.5,
//   animation: {
//     duration: 0,
//   },
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//   },
//   legend: {
//     display: false,
//   },
// };


// let chartCanvas = document.querySelector('.traffic-chart');

// let trafficChart = new Chart(chartCanvas,{
    
//   type:'line',

//   data:trafficDataHourly,

//   options:trafficOptions,

// });