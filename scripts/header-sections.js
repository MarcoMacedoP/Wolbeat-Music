const sectionOne = document.getElementById("section_one");
const sectionTwo= document.getElementById("section_two");
const btnSectionOne = document.getElementById("btn_section_one");
const btnSectionTwo = document.getElementById("btn_section_two");
const yellow_bar= document.querySelector(".header-sections-selection");
window.addEventListener('load', ()=>{
    
    sectionTwo.style.display= "none";

    btnSectionOne.addEventListener('click',()=> {
        //console.log("Haz hecho click en la sección 1")
        sectionTwo.style.display= "none";
        sectionOne.style.display= "";
        yellow_bar.style.left= "";
        btnSectionOne.className = "header-sections-focus";
        btnSectionTwo.className = "header-sections-blur";
        
        
    });
    btnSectionTwo.addEventListener('click', ()=>{
        //console.log("Haz hecho click en la sección 2")
        sectionOne.style.display= "none";
        sectionTwo.style.display= "";
        if(yellow_bar.classList[1]){
        //Si una segunda clase, movemos menos la barra amarilla
            yellow_bar.style.left= "7rem";
        }else{
            yellow_bar.style.left= "11rem";
        }
        btnSectionOne.className = "header-sections-blur";
        btnSectionTwo.className = "header-sections-focus";
    });


});
