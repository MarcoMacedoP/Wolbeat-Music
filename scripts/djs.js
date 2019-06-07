//import 'JSON-DATA' //FIX THIS
class DJ { 
    
    constructor(image, name, genres,description, url, socialMedia){
        //image debe de ser un enlace.
        this.image= image
        this.name= name
        this.genres= genres
        this.description = description
        this.socialMedia= socialMedia
        if(url){
            this.url = url
        }
        

    }
    createIn(object, fn){
        let maxDescriptionChars=228
        //Contenedor del DJ
        let article = document.createElement('article')
        article.className  = 'section-dj-article'

        //Imagén del DJ
      
        let imgContainer = document.createElement('div')
        imgContainer.style.backgroundImage = 'url('+this.image+')'
        imgContainer.className = 'section-dj-img'

        //Información del DJ
        let djInfo = document.createElement('div')
        djInfo.className= 'section-dj-info'
        let linkName = document.createElement('a')
        let name= document.createElement('h3')
        name.innerHTML = this.name
        linkName.appendChild(name)
        let genres = document.createElement('span')
        genres.innerHTML = this.genres
        
        let description = document.createElement('p')
        description.innerHTML = 
        cutTxt(this.description, maxDescriptionChars)
     
        //Caja de social Media
        let socialMediaContainer = document.createElement('div')
        socialMediaContainer.className='section-dj-info-social-media'
        let iconSpotify = document.createElement('a')
        iconSpotify.className = 'section-dj-info-social-media-spotify'
        let iconYoutube = document.createElement('a')
        iconYoutube.className = 'section-dj-info-social-media-youtube'
        socialMediaContainer.appendChild(iconSpotify)
        socialMediaContainer.appendChild(iconYoutube)
        //Le pasamos la informacion al container
        djInfo.appendChild(linkName)
        djInfo.appendChild(genres)
        djInfo.appendChild(description)
        djInfo.appendChild(socialMediaContainer)
        //Le pasamos la imagen y la información al article
        article.appendChild(imgContainer)
        article.appendChild(djInfo)

        object.append(article)

        if(fn){
            fn(this.url, djInfo)
            fn(this.url, linkName)
        }
    }
    setInfoPage(headline, headerPicture, infoContainer){
        headline.innerHTML= this.name
        let subtittle= infoContainer.querySelector('.dj-information-tittle')
        subtittle.innerHTML= "Sobre " + this.name
        let genres= infoContainer.querySelector('.dj-information-genres')
        genres.innerHTML = this.genres
        let description = infoContainer.querySelector('.dj-information-p')
        description.innerHTML = this.description
        let img = headerPicture.querySelector('img')
        img.setAttribute('src', this.image)

        //seteo de los valores de los iconos
        let spotify= document.querySelector('.dj-information-links-spotify')
        let youtube= document.querySelector('.dj-information-links-youtube')
        spotify.setAttribute('href', this.socialMedia.spotify)
        youtube.setAttribute('href', this.socialMedia.youtube)
        youtube.setAttribute('target', "_blank")
        spotify.setAttribute('target', "_blank")
    }

}
function setUrl(url, aTag){
    aTag.setAttribute('href', url)
    aTag.setAttribute('target', '_blank')
}
function cutTxt(txt, ancho){
    let newTxt =txt
    while(newTxt.length>=ancho){
        newTxt= newTxt.slice(0, newTxt.length-1)
        }
    if(txt.length>ancho){
        newTxt = newTxt + ' (...)'
        return newTxt
        }
    return newTxt
}





//Nuevos Talentos
let WOLBEAT = new DJ(DJS.WOLBEAT.avatar, DJS.WOLBEAT.nombre, DJS.WOLBEAT.generos, DJS.WOLBEAT.biografia, DJS.WOLBEAT.url, DJS.WOLBEAT.socialMedia);    
let FELIX_GARREL = new DJ(DJS.FELIX_GARREL.avatar, DJS.FELIX_GARREL.nombre, DJS.FELIX_GARREL.generos, DJS.FELIX_GARREL.biografia, DJS.FELIX_GARREL.url, DJS.FELIX_GARREL.socialMedia)
let OCECA= new DJ(DJS.OCECA.avatar,DJS.OCECA.nombre, DJS.OCECA.generos, DJS.OCECA.biografia, DJS.OCECA.url, DJS.OCECA.socialMedia)
//Clasicos de WOLBEAT
let HAUZZA = new DJ(DJS.HAUZZA.avatar, DJS.HAUZZA.nombre, DJS.HAUZZA.generos, DJS.HAUZZA.biografia, DJS.HAUZZA.url, DJS.HAUZZA.socialMedia)
let LIVJ = new DJ(DJS.LIVJ.avatar, DJS.LIVJ.nombre, DJS.LIVJ.generos, DJS.LIVJ.biografia,DJS.LIVJ.url, DJS.LIVJ.socialMedia)
let ROSSWELL  = new DJ(DJS.ROSSWELL.avatar,DJS.ROSSWELL.nombre, DJS.ROSSWELL.generos, DJS.ROSSWELL.biografia, DJS.ROSSWELL.url, DJS.ROSSWELL.socialMedia)
let LUILLY= new DJ(DJS.LUILLY.avatar, DJS.LUILLY.nombre, DJS.LUILLY.generos, DJS.LUILLY.biografia, DJS.LUILLY.url, DJS.LUILLY.socialMedia)
let MCKLED=new DJ(DJS.MCKLED.avatar, DJS.MCKLED.nombre, DJS.MCKLED.generos, DJS.MCKLED.biografia, DJS.MCKLED.url, DJS.MCKLED.socialMedia)

let nuevosTalentos = [
    //WOLBEAT,FELIX_GARREL,OCECA
    FELIX_GARREL,OCECA

]
let clasicosWolbeat = [
    HAUZZA,LIVJ,ROSSWELL, LUILLY, MCKLED
]

let mainSectionDJ= document.getElementById('mainDjs')

    if(mainSectionDJ){
        FELIX_GARREL.createIn(mainSectionDJ, setUrl)
        //WOLBEAT.createIn(mainSectionDJ, setUrl)
        OCECA.createIn(mainSectionDJ, setUrl)
    }

/***********************SECCION DE DJS********************************** */
let genericDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius venenatis neque eu tempor. Nullam ac laoreet sapien. Pellentesque vitae ante lectus. Phasellus blandit sed felis non maximus. Ut eleifend id nisi sit amet tempus. Donec eu tincidunt sapien. Cras sollicitudin molestie condimentum. Etiam at neque ut lorem dignissim vulputate. '
let sectionNuevosTalentos = document.getElementById('section-nuevos-talentos')
//Declaración de nuevos talentos.

class djPages {
    constructor(pageNumber, container, navsObject, djsObject){
        this.pageNumber = pageNumber
        this.container = container
        this.navsObject= navsObject
        this.djsObject = djsObject
    }
    setPage(){
        //Buscamos los aricles existentes en el container
        let elements= this.container.getElementsByClassName('section-dj-article')
       //Si existen elementos los borramos
        if(elements.length){
            for(let i= 0; i<elements.length;i++){
                elements[i].style.display= "none"
            }
        }
        //Creamos los nuevos DJ's
        this.djsObject.uno.createIn(this.container,setUrl)
        this.djsObject.dos.createIn(this.container)
        this.djsObject.tres.createIn(this.container)
        //Seteamos el boton de navegación correspondiente el numero de pagina
        let puntoUno=this.navsObject.one
        let puntoDos=this.navsObject.two
        let puntoTres =this.navsObject.three
        switch(this.pageNumber){
            case 1:
                    puntoUno.className = "carousel-point-one"
                    puntoDos.className = "carousel-point-two"
                    puntoTres.className = "carousel-point-two"
                break;
            case 2:
                    puntoDos.className = "carousel-point-one"
                    puntoUno.className = "carousel-point-two"
                    puntoTres.className = "carousel-point-two"
                break;
            case 3:
                    puntoTres.className = "carousel-point-one"
                    puntoDos.className = "carousel-point-two"
                    puntoUno.className = "carousel-point-two"
                break;
        }


    }
}
    const navsTalento = {
        one: document.querySelector('#nav_nuevos_talentos_1'),
        two: document.querySelector('#nav_nuevos_talentos_2'),
        three: document.querySelector('#nav_nuevos_talentos_3')
    }
    
    const djsPageOne  = {
        //uno : WOLBEAT,
        dos : FELIX_GARREL,
        tres : OCECA,
    }


//let paginaUno = new djPages(1, sectionNuevosTalentos, navsTalento, djsPageOne)

if(sectionNuevosTalentos){   
    nuevosTalentos.forEach(element =>{
        element.createIn(sectionNuevosTalentos, setUrl)
    });
    

    //paginaUno.setPage()
    navsTalento.one.style.display =  "none";
    navsTalento.two.style.display =  "none";
    navsTalento.three.style.display =  "none";
}

let sectionClasicos = document.getElementById('section-clasicos')
if(sectionClasicos){
    clasicosWolbeat.forEach(element =>{
            element.createIn(sectionClasicos, setUrl)
    });
}