var nome=document.getElementById("nome");
var km=document.getElementById("km");
var genera=document.getElementById("genera");
var annulla=document.getElementById("annulla");
var eta=document.getElementById("eta");

genera.addEventListener("click", 
    function(){
        if (eta.value==="minorenne"){
            console.log(eta.value)
        }
    })