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
const greska1 = document.querySelector("#greska1");
const greska2 = document.querySelector("#greska2");
const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function enable(){
    submit.disabled = true;//Isljucujem dugme dok se ne popune sva polja.
    let clanovi = document.querySelectorAll("#name, #email, #text");
    for (var i = 0; i < clanovi.length; i++) {
        const element = clanovi[i];
        if(element.value.trim() === "" || element.value === null){//Provjeravam da li je ista upisano u polje 
            submit.disabled = true;
        }else{
            submit.disabled = false;
        }
        
    }

}

const loader = document.querySelector(".loader");


$(document).ready(function() {
    $("#form").on('submit', function(e) {
        var podaciString = $(this).serialize();
       $.ajax({
            url: 'baza.php',
            type: 'POST',
            data: podaciString,
            success: function(){
                $("#form").hide();
                $("#forma").html("<div id='ucitavanje'></div>");
                $("#ucitavanje").addClass("loader");
                $("#ucitavanje").on('animationend',function(){
                    $(this).addClass("loader-hidden");
                    $("#ucitavanje").on("transitionend", function(){
                        $(this).removeClass("loader loader-hidden");
                        $(this).append("<img src='slike/check.png'/>");
                        $(this).append("<h1>Uspjesno ste poslali vasu poruku!</h2>");

                    });
                });
               
                //$("#ucitavanje").addClass("kvacica");
            }
            
       })
            e.preventDefault();
        })
    });
        // d1.classList.add("loader");
        // loader.style.display = "flex";
        // var podaciForma = new FormData(document.querySelector("#form"));

        // $.ajax({
        //     url: "baza.php",
        //     type: "POST",
        //     data: podaciForma,
        //     processData: false,
        //     contentType: false
        // }).done((response) =>{
        //     console.log(response);
        // })

        
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     loader.style.display = "flex";
//     loader.classList.add("loader-hidden");
  
//     loader.addEventListener("animationend", () => {
//         loader.remove();
//     });
//   });


    // form.addEventListener('submit', (e) =>{
    //     if (name.value.trim() === '' || name.value == null){
    //         e.preventDefault();
    //         greska.innerHTML="Molimo vas unesite vase ime."
    //     }
    //     if(!email.value.match(regex)){
    //         e.preventDefault();
    //         greska1.innerHTML="Neispravan email.";
    //     }
    //     if (text.value === '' || text.value == null || text.length < 5){
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


