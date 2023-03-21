
var intentos = 0;
var numeroRandom = 0;

function numeroMagico(){
    let numero = document.getElementById('numero').value;

    if(intentos == 0){
        numeroRandom = Math.floor(Math.random()*100)+1;
    }

    if(intentos < 10){
        if(numero == numeroRandom){
            intentos++;
            msjIntentos(intentos);
            historial(intentos,numero);
            alert("el numero es correto");
        }else{
            if(numero < numeroRandom){
                $(document).ready(function(){
                    $("#pista").text("el numero ingresado es menor al numero magico");
                });
            }else{
                $(document).ready(function(){
                    $("#pista").text("el numero ingresado es mayor al numero magico");
                });
            }
            intentos++;
            msjIntentos(intentos);
            historial(intentos,numero);
        }
    }

}

function historial(i,n){
    $(document).ready(function(){
        var text = "<tr><td>"+i+"</td><td>"+n+"</td></tr>"
        $(".historial__tabla__cuerpo").before(text);
    });
}

function msjIntentos(i){
    $(document).ready(function(){
        $("#intentos").text("Tu numero de intentos es : "+i);
    });
}