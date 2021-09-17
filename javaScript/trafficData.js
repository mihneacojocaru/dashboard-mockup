//Hourly DATA

let trafficDataHourly = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [150, 100, 200, 500, 550, 250, 450, 300, 350, 400, 200],
      backgroundColor: "#7476c0",

      borderWidth: 1,
    },
  ],
};

//Daily DATA

let trafficDataDaily = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [ 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 750, 1250, 1000],
      backgroundColor: ["#7476c0","#be0027","cf8d2e"],

      borderWidth: 1,
    },
  ],
};

//Weekly DATA

let trafficDataWeekly = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 1850, 2250, 1500, 2500, 2000, 1500, 1750, 1250],
      backgroundColor: ["#7476c0","#be0027","cf8d2e","e4e932"],

      borderWidth: 1,
    },
  ],
};

//Monthly DATA

let trafficDataMonthly = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 5500],
      backgroundColor: "#7476c0",

      borderWidth: 1,
    },
  ],
};

//Graph Options

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};
