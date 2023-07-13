console.clear();
const showbtn = document.querySelector(".nav-btn");
const closebtn = document.querySelector(".close-btn");
const menubar = document.querySelector(".menu-bar");
showbtn.addEventListener("click", () => {
  menubar.classList.add("showcontent");
});
closebtn.addEventListener("click", () => {
  menubar.classList.remove("showcontent");
});
