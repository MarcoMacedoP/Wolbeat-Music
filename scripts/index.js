'use strict'
//Metodo principal
var menu = document.querySelector(".main-page-welcome-header-nav");
var mobile_menu_btn = document.querySelector(".main-page-welcome-header-mobile-nav-list-item-menu");
window.addEventListener('load', () =>{
    mobile_menu_btn.addEventListener('click', ()=>{
        menu.style.display = "block";
    });

});