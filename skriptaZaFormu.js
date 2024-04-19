const submit = document.querySelector("#submit");

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