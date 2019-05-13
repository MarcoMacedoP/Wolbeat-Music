'use strict'
//Metodo principal
var mobile_nav = document.querySelector("#mobile-nav");
var menu = document.querySelector("#navigation_bar");
var mobile_menu_btn = document.querySelector("#menu_mobile_btn");
var mobile_menu_displayed = false;
//main
window.addEventListener('load', () =>{
    mobile_nav.addEventListener('click', ()=>{
        //¿El menú está desplegado?
        if(mobile_menu_displayed){
            //regresamos la clase original la barra de nav
            mobile_nav.className = "mobile-nav";
             //Desaparecemos el menu desplegable
            menu.style.display = "none";
            mobile_menu_displayed = false;
            console.log(mobile_menu_displayed);
        }else{
            //Le damos una clase blur
            mobile_nav.className ="mobile-nav-blur";
            //se muestra el menu
            menu.style.display = "block";
            mobile_menu_displayed = true;
            console.log(mobile_menu_displayed);
        }
        
    });
    
});