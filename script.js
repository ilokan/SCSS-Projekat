const hamburger = document.querySelector(".hamburger");
const navMeni = document.querySelector(".nav-meni");
var color = 'red';
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMeni.classList.toggle("active");
})
function check(x) {
    x.style.backgroundColor='color';
}