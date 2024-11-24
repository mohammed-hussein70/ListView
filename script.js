let div = document.querySelector(".row");

// script for list
let listBtn = document.querySelector(".listbtn");
listBtn.addEventListener("click", function () {
  div.classList.add("list");
  div.classList.remove("row");
  this.style.backgroundColor = "#666";
  this.style.color = "white";
  gridBtn.style = "none";
});

// script for Grid
let gridBtn = document.querySelector(".grid");
gridBtn.addEventListener("click", function () {
  div.classList.add("row");
  div.classList.remove("list");
  this.style.backgroundColor = "#666";
  this.style.color = "white";
  listBtn.style = "none";
});
