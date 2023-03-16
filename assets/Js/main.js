
var intentos = 0;
var numeroRandom = 0;

function numeroMagico(){
    let numero = document.getElementById('numero').value;

    if(intentos == 0){
        numeroRandom = Math.floor(Math.random()*100)+1;
    }

    if(intentos < 10){
        if(numero == numeroRandom){
            alert("el numero es correto");
        }else{
            if(numero < numeroRandom){
                $(document).ready(function(){
                    $("#pista").text("el numero ingresado es menor");
                });
            }else{
                $(document).ready(function(){
                    $("#pista").text("el numero ingresado es mayor");
                });
            }
            $(document).ready(function(){
                $("#intentos").text("Tu numero de intentos es : "+intentos);
            });
            intentos++;
        }
    }

}