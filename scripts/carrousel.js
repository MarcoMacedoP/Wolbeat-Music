'use strict'
var description = document.querySelector("#carrousel_article_description");
var image_artist = document.querySelector("#carrousel_article_img"); 
var carrousel = document.querySelector("#carrousel-dj");
var tittle = document.querySelector("#carrousel_article_tittle");

window.addEventListener('load', () =>{
        //Main code
    let artboard_one_url= "https://raw.githubusercontent.com/MarcoMacedoP/Wolbeat-Music/master/img/artboard.jpg";
    
    let artboard_two_url= "https://raw.githubusercontent.com/MarcoMacedoP/Wolbeat-Music/master/img/artboard_2.jpg";
    let artist_two = "https://media.metrolatam.com/2018/01/22/vaca-600x400.jpg";

    let artboard_three_url= "https://raw.githubusercontent.com/MarcoMacedoP/Wolbeat-Music/master/img/artboard_3.jpg";
    window.setTimeout(()=>{
        changeCarrousel("Titulo 2", "Descripción dos",artist_two, artboard_two_url);

    }, 1000);
});
function changeCarrousel(tit, des, artist_img, cover_img){
            changeText(tit, tittle);
            changeText(des, description);
            changeBackgroundImg(artist_img,image_artist);
            changeBackgroundImg(cover_img, carrousel);       
}

function changeText(new_text, object){
    object.innerHTML = new_text;
}
function changeBackgroundImg(url, object){
    object.style.backgroundImage = "url("+url+")";
}