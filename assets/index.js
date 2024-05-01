const humberger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
humberger.addEventListener("click", () => {
  console.log("telah diklik");
  humberger.classList.toggle("active");
  navList.classList.toggle("active");
});
