let btnClose = document.addEventListener("click", e => {
  let obj = e.target;
  if (obj.id == "alertClose") {
    obj.parentNode.classList.add("moveRight");
    setTimeout(() => {
      obj.parentNode.style.display = "none";
    }, 500);
  }
});

let trafficButtons = document.addEventListener("click", element => {
  let obj = element.target;
  let allSpans = document.querySelectorAll(".buttons > span");
  if (obj.textContent == "Hourly") {
    allSpans.forEach(element => {
      element.classList.remove("selectedBtn");
    });
    obj.classList.add("selectedBtn");
  } else if (obj.textContent == "Daily") {
    allSpans.forEach(element => {
      element.classList.remove("selectedBtn");
    });
    obj.classList.add("selectedBtn");
  } else if (obj.textContent == "Weekly") {
    allSpans.forEach(element => {
      element.classList.remove("selectedBtn");
    });
    obj.classList.add("selectedBtn");
  } else if (obj.textContent == "Monthly") {
    allSpans.forEach(element => {
      element.classList.remove("selectedBtn");
    });
    obj.classList.add("selectedBtn");
  }
});