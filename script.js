const hamburger = document.querySelector(".hamburger");
const navMeni = document.querySelector(".nav-meni");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMeni.classList.toggle("active");
})

const name = document.querySelector("#name");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const greska = document.querySelector("#greska");

form.addEventListener('submit', (e) =>{
    let poruke = []
    if (name.value == '' || name.value == null){
        poruke.push('Molimo vas unesite vase ime')

    }
    if(password.value.length <= 6){
        poruke.push("Lozinka mora biti duza od 6 karaktera")
    }
    if(password.value.length >= 20){
        poruke.push("Lozinka mora biti kraca od 20 karaktera")
    }
    if (poruke.length > 0 ){ // ime.length > 0 provjerava da li ima ikakvih poruka samim tim postoji greska.
        e.preventDefault()//Ovo korisitim da se ne refresuje sajt svaki put kad kliknem dugme.
        greska.innerText = poruke.join(", \n  ")
    }
})

const d1 = document.querySelector(".dugme");
const d2 = document.querySelector(".kvacica");
const d3 = document.querySelector(".loader");
d1.addEventListener("click", ()=>{
    d1.style.display = "none";
    d3.style.display = "flex";
    d3.addEventListener('animationend', () =>{
        d3.classList.add("loader-hidden");
        d3.addEventListener("transitionend", () =>{
            d3.remove(); //Uklanjanje .loader-a
            d2.style.display ="flex";
        })
      
    })

})    
