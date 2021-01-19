var btnMenu = document.getElementById('btn-menu'); //Guardamos el elemento btn-menu en la variable btnMenu
var nav = document.getElementById('nav'); //Guardamos el elemento nav en la variable nav

btnMenu.addEventListener('click', function(){ //Agregamos un evento de click al boton menu
    nav.classList.toggle('mostrar'); //Agregamos la clase mostrar a nav 
})

var btnCalculate = document.getElementById('btn-calculate');

function crearTabla(){
    var n = document.getElementById('n').value;
    
    var tabla = "<table class=\"matriz\" id=\"matriz\">";
    for(i = 0; i < n; i++){
        tabla += "<tr border=\"10\">";
        for(j = 0; j < n; j++){ 
            if(i == j){
                tabla += "<td>" + 1 + "</td>";
            }else{
                tabla += "<td>"+  0 + "</td>";
            }
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById("resultado").innerHTML = tabla;
}


