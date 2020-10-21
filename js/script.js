var nome=document.getElementById("nome");
var km;
var genera=document.getElementById("genera");
var annulla=document.getElementById("annulla");
var eta=document.getElementById("eta");
var prezzoKm=0.21;
var subtotale

genera.addEventListener("click", 
    function(){
        km=parseInt(document.getElementById("km").value)
        subtotale=(prezzoKm * km).toFixed(2)
        document.getElementById("container-risultato").style.display = "block";
        if (eta.value==="minorenne"){
            var costoUno=(subtotale-((subtotale/100)*20)).toFixed(2)
            document.getElementById("costo").innerHTML=costoUno;
            document.getElementById("utente").innerHTML=nome.value;
            document.getElementById("offerta").innerHTML="Sconto Minorenne";
            document.getElementById("carrozza").innerHTML=Math.floor(Math.random() * 10);
            document.getElementById("codice").innerHTML=Math.floor(Math.random() * 100000);
            
        } else if(eta.value==="over65"){
            var costoDue=(subtotale-((subtotale/100)*40)).toFixed(2)
            document.getElementById("costo").innerHTML=costoDue;
            document.getElementById("utente").innerHTML=nome.value;
            document.getElementById("offerta").innerHTML="Sconto Over 65";
            document.getElementById("carrozza").innerHTML=Math.floor(Math.random() * 10);
            document.getElementById("codice").innerHTML=Math.floor(Math.random() * 100000);
        } else{
            var costoTre=subtotale;
            document.getElementById("costo").innerHTML=costoTre;
            document.getElementById("utente").innerHTML=nome.value;
            document.getElementById("offerta").innerHTML="No sconto";
            document.getElementById("carrozza").innerHTML=Math.floor(Math.random() * 10);
            document.getElementById("codice").innerHTML=Math.floor(Math.random() * 100000);
        }
    })

// annulla.addEventListener("click",
// function(){
//     document.getElementById("myForm").reset();
// }