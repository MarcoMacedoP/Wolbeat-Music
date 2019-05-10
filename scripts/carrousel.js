let colorAmarillo= "#FFCD00"
let colorGrisClaro= "#929298"


let domCarrousel = {
    description: document.querySelector("#carrousel_article_description"), 
    avatarImg : document.querySelector("#carrousel_article_img"),
    carrousel : document.querySelector("#carrousel-dj"),
    tittle : document.querySelector("#carrousel_article_tittle"),
    navPoints : {
        puntoUno: document.querySelector(".carousel-point-one"), 
        puntoDos: document.querySelector(".carousel-point-two"), 
        puntoTres: document.querySelector(".carousel-point-three") 
    }
}


class carrousel{
    
    constructor (avatar, nombre, descripcion, cover, position){
        this.avatar = avatar
        this.nombre = nombre
        this.descripcion = descripcion
        this.cover = cover
        this.position = position
    }

    cambiarCarrousel (object)
        {
            object.carrousel.style.backgroundImage = "url("+this.cover+")"
            object.tittle.innerHTML = this.nombre
            object.description.innerHTML = this.descripcion
            object.avatarImg.style.backgroundImage = "url("+this.avatar+")"
            let puntoUno= object.navPoints.puntoUno
            let puntoDos = object.navPoints.puntoDos
            let puntoTres = object.navPoints.puntoTres
           
            switch(this.position){
                case 1:
                    puntoUno.style.background = colorAmarillo
                    puntoDos.style.background = colorGrisClaro
                    puntoTres.style.background = colorGrisClaro
                break
                case 2:
                    puntoDos.style.background = colorAmarillo
                    puntoUno.style.background = colorGrisClaro
                    puntoTres.style.background = colorGrisClaro
                break
                case 3:
                    puntoTres.style.background = colorAmarillo
                    puntoDos.style.background = colorGrisClaro
                    puntoUno.style.background = colorGrisClaro
                break
            }
        }

}

var carrouselUno = new carrousel("https://media.metrolatam.com/2018/01/22/vaca-600x400.jpg",
"DJ Pepino", "Esta es la descripcion del artista", 
"https://raw.githubusercontent.com/MarcoMacedoP/Wolbeat-Music/master/img/artboard_2.jpg",1);


window.addEventListener('load', () =>{
     
 
})