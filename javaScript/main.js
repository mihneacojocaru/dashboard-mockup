let btnClose = document.addEventListener("click", (e) => {
  let obj = e.target;
  if (obj.id == "alertClose") {
    obj.parentNode.classList.add("moveRight");
  }
});
