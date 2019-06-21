'use strict'
var mobile_nav = document.querySelector("#mobile-nav");
var menu = document.querySelector("#navigation_bar");
var mobile_menu_btn = document.querySelector("#menu_mobile_btn");
var mobile_menu_displayed = false;
let mobile_icon_logo = mobile_nav.querySelector('.mobile-nav-list-item-logo')

mobile_icon_logo.setAttribute('href', '\\')
//Media querys
// function quitarInicio(mediaQuery) {
   
//     if (mediaQuery.matches) { // If media query matches
       
//     } else {
       
        
//     }
//   }
  
//   let mediaQuery = window.matchMedia("(min-width: 700px)")
//   quitarInicio(mediaQuery) // Call listener function at run time
//   mediaQuery.addListener(quitarInicio) // Attach listener function on state changes
  


    mobile_nav.addEventListener('click', event =>{
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
        mobile_icon_logo.addEventListener('click', () =>{
            event.preventDefault();
        })
    })
