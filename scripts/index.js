'use strict'
//Metodo principal
var menu = document.querySelector(".main-page-welcome-header-nav");
var mobile_menu_btn = document.querySelector(".main-page-welcome-header-mobile-nav-list-item-menu");
var mobile_menu_displayed = false;
window.addEventListener('load', () =>{
    mobile_menu_btn.addEventListener('click', ()=>{
        if(mobile_menu_displayed){
            menu.style.display = "none";
            mobile_menu_displayed = false;
            console.log(mobile_menu_displayed);
        }else{
            menu.style.display = "block";
            mobile_menu_displayed = true;
            console.log(mobile_menu_displayed);
        }
        
    });

});