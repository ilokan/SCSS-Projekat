const hamburger = document.querySelector(".hamburger");
const navMeni = document.querySelector(".nav-meni");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMeni.classList.toggle("active");
})



const name = document.querySelector("#name");
const text = document.querySelector("#text");
const form = document.querySelector("#form");
const greska = document.querySelector("#greska");
const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function enable(){
    let clanovi = document.querySelectorAll("#name, #email, #text");
    let isValid = true;
    for (var i = 0; i < clanovi.length; i++) {
        const element = clanovi[i];
        if(element.value.trim() === "" || element.value === null){
            isValid = false;
            break;
        }
        
    }
    submit.disabled = !isValid;

}

    // form.addEventListener('submit', (e) =>{
    //     if (name.value === '' || name.value == null){
    //         e.preventDefault();
    //         greska.innerHTML="Molimo vas unesite vase ime."
    //     }
    //     if(!email.value.match(regex)){
    //         e.preventDefault();
    //         greska1.innerHTML="Neispravan email.";
    //     }
    //     if (text.value === '' || text.value == null){
    //         e.preventDefault();
    //         greska2.innerHTML="Molimo vas unesite vasu poruku."
    //     }
    // })


// const d1 = document.querySelector(".dugme");
// const d2 = document.querySelector(".kvacica");
// const d3 = document.querySelector(".loader");
// const d4 = document.querySelector(".natpis");
// d1.addEventListener('click', ()=>{
//     d1.style.display = "none";
//     d3.style.display = "flex";
//     d3.addEventListener('animationend', () =>{
//         d3.classList.add("loader-hidden");
//         d3.addEventListener("transitionend", () =>{
//             d3.remove(); //Uklanjanje .loader-a
//             d2.style.display ="flex";
//             d4.style.display ="flex";
//         })
      
//     })

// })  



// function formFetch(){
// var data =new FormData(form);
// fetch("",{
//     method: "post",
//     body: data
// })
// .then(() =>{
//     const d1 = document.querySelector(".dugme");
// const d2 = document.querySelector(".kvacica");
// const d3 = document.querySelector(".loader");
// d1.addEventListener('click', ()=>{
//     d1.style.display = "none";
//     d3.style.display = "flex";
//     d3.addEventListener('animationend', () =>{
//         d3.classList.add("loader-hidden");
//         d3.addEventListener("transitionend", () =>{
//             d3.remove(); //Uklanjanje .loader-a
//             d2.style.display ="flex";
//         })
      
//     })

// })    

// });
// return false;

// }


