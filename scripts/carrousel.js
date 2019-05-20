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
    },
    actualPosition: 0
}

class carrousel{
    
    constructor (avatar, nombre, descripcion, cover, position){
        this.avatar = avatar
        this.nombre = nombre
        this.descripcion = descripcion
        this.cover = cover
        this.position = position
    }

    set (object)
        {
            let maxDescLength = 320
            object.carrousel.style.backgroundImage = "url("+this.cover+")"
            object.tittle.innerHTML = this.nombre
            let shortDescription= cutTxt(this.descripcion, maxDescLength)
           //La funcion está en DJ'S 
            object.description.innerHTML = shortDescription
            object.avatarImg.style.backgroundImage = "url("+this.avatar+")"
            object.position = this.position
            let puntoUno= object.navPoints.puntoUno
            let puntoDos = object.navPoints.puntoDos
            let puntoTres = object.navPoints.puntoTres
           
            switch(this.position){
                case 1:
                    puntoUno.className = "carousel-point-one"
                    puntoDos.className = "carousel-point-two"
                    puntoTres.className = "carousel-point-two"
                break
                case 2:
                    puntoDos.className = "carousel-point-one"
                    puntoUno.className = "carousel-point-two"
                    puntoTres.className = "carousel-point-two"
                break
                case 3:
                    puntoTres.className = "carousel-point-one"
                    puntoDos.className = "carousel-point-two"
                    puntoUno.className = "carousel-point-two"
                break
            }
        }
        

}    
//Objetos carrusel creados
let firstCarrousel = new carrousel('data:image/jpeg;base64,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',
    'IGOR', 'The production here is superb. Tyler has never been one for traditional song structure, but on IGOR he’s like the Minotaur luring you through a maze that twists and turns around seemingly impossible corners, drawing you into the thrilling unknown.',
    'https://www.magneticmag.com/.image/t_share/MTYzODc1MDI3NzQwMDEwMjA5/unnamed.png', 1)
let secondCarrousel= new carrousel('data:image/jpeg;base64,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',
    'Vulnicura', "Björk's ninth proper full-length, filled with lush arrangements and some of her most powerful singing, can be slotted among the most human, emotionally candid, even functional of art forms: the breakup album.",
    'https://i.pinimg.com/originals/85/07/b9/8507b9d85cc879be2c78c7440997df03.jpg', 2)
let thirdCarrosuel = new carrousel('https://exclaim.ca//images/American_Football_-_Shervin_Lainez.jpg',
    'American Football', "This album is an advancement rather than a return to form. Despite their previous effort struggling against the weight of the band's dormancy, this album is a moving experience that brings with it a sense of fading youth. "
    ,'https://exclaim.ca//images/football_2.jpg', 3)

    function avanzarCarrosel(object){
        let actualPosition= object.position
        let nuevaPosition;
        //console.log('La posición actual es: ' + actualPosition)
        if (actualPosition===3){
            nuevaPosition = 1
        }else{
             nuevaPosition = actualPosition + 1
        }
        //console.log('La posición nueva es: ' + nuevaPosition)
        switch(nuevaPosition){
            case 1:
                firstCarrousel.set(object)
            break
            case 2:
                secondCarrousel.set(object)
            break
            case 3:
                thirdCarrosuel.set(object)
            break
        }
    }//Esta función se encarga de hacer avanzar el arrousel
    //Recibe como parametro un objeto que será el carrosuel

let navPoints=[document.querySelector(".carousel-point-one"), 
    document.querySelector(".carousel-point-two"), 
    document.querySelector(".carousel-point-three")];
    
firstCarrousel.set(domCarrousel)
navPoints[0].addEventListener('click',()=>{
    //console.log('Haz hehco click en el boton 1')
    firstCarrousel.set(domCarrousel)
})
navPoints[1].addEventListener('click',()=>{
    //console.log('Haz hehco click en el boton 2')
    secondCarrousel.set(domCarrousel)
})
navPoints[2].addEventListener('click',()=>{
    //console.log('Haz hehco click en el boton 3')    
    thirdCarrosuel.set(domCarrousel)
})

//Cambia el carrousel cada 3 segundos :)
setInterval(()=>{
    avanzarCarrosel(domCarrousel)
}, 8000)
