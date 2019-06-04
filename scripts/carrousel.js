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
//constructor (avatar, nombre, descripcion, cover, position)
let firstCarrousel = new carrousel(DJS.FELIX_GARREL.avatar, DJS.FELIX_GARREL.nombre, DJS.FELIX_GARREL.discos.BREZZE.description
    , DJS.FELIX_GARREL.discos.BREZZE.cover, 1)
let secondCarrousel= new carrousel(DJS.OCECA.avatar, DJS.OCECA.nombre, DJS.OCECA.discos.NO_NAME.description, 
    DJS.OCECA.discos.NO_NAME.cover, 2)
let thirdCarrosuel = new carrousel(DJS.WOLBEAT.nombre,DJS.WOLBEAT.discos.WMVOLI.Nombre,
    DJS.WOLBEAT.discos.WMVOLI.description, DJS.WOLBEAT.discos.WMVOLI.cover, 3)

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
