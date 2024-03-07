const hamburger = document.querySelector(".hamburger");
const navMeni = document.querySelector(".nav-meni");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMeni.classList.toggle("active");
})