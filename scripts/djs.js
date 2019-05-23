
class DJ { 
    
    constructor(image, name, genres,description, url){
        //image debe de ser un enlace.
        this.image= image
        this.name= name
        this.genres= genres
        this.description = description
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
        let imgLink = document.createElement('a')
        imgLink.className = 'section-dj-img'
        let imgContainer = document.createElement('div')
        imgContainer.style.backgroundImage = 'url('+this.image+')'
        let img = document.createElement('img')
        //img.setAttribute('src', this.image)
        imgContainer.append(img) 
        imgLink.append(imgContainer)

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
        article.appendChild(imgLink)
        article.appendChild(djInfo)

        object.append(article)

        if(fn){
            fn(this.url, djInfo)
            fn(this.url, linkName)
        }
    }

}
function setUrl(url, aTag){
    aTag.setAttribute('href', url)
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
let Marco = new DJ()
Marco.image = 'https://smoda.elpais.com/wp-content/uploads/2019/04/Dj-Nano-635x953.jpg'
Marco.description = 'Esta es la descripción del DJ, hace música para gatitos muy cool.'
Marco.genres = "Cumbias progresivas"
Marco.name = "DJ Peligro"
let fka = new DJ()
fka.image= 'https://pixel.nymag.com/imgs/daily/vulture/2019/04/24/24-fka-twigs.w700.h467.jpg'
fka.name = 'FKA Twings'
fka.description = 'Even before she became involved with an A-list celebrity, FKA Twigs wrote songs about being looked at. She took seriously the bizarre exchange of being seen and recognized by strangers. Before setting off on her own music career, Twigs had danced in other people’s popular videos, and her 2014 song “Video Girl” documented the uncanny phenomenon of being stopped on the street by people who thought she looked familiar. '
fka.genres = "Reggeton lento"
fka.url = 'https://www.vulture.com/2019/04/fka-twigs-cellophane-song-review.html'





let mainSectionDJ= document.getElementById('mainDjs')

if(mainSectionDJ){

//DJ's mostrados en la página principal

let numero_djs = 3 //Siempre mantener en numero par
for(let i= 0; i<numero_djs; i++){
    Marco.createIn(mainSectionDJ)
    
}
fka.createIn(mainSectionDJ, setUrl)


}
/***********************SECCION DE DJS********************************** */
let genericDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius venenatis neque eu tempor. Nullam ac laoreet sapien. Pellentesque vitae ante lectus. Phasellus blandit sed felis non maximus. Ut eleifend id nisi sit amet tempus. Donec eu tincidunt sapien. Cras sollicitudin molestie condimentum. Etiam at neque ut lorem dignissim vulputate. '
let sectionNuevosTalentos = document.getElementById('section-nuevos-talentos')
//Declaración de nuevos talentos.
class nuevosTalentos 
    extends DJ{
      constructor(image, name, genres,description, url){
          super(image, name, genres,description, url)
      }
      setName(){
          //Esta función les setea una clase adicional a los djs que sean nuevos talentos
          
      }
      
}
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
        this.djsObject.uno.createIn(this.container)
        this.djsObject.dos.createIn(this.container)
        this.djsObject.tres.createIn(this.container)
        this.djsObject.cuatro.createIn(this.container)
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
        uno : new nuevosTalentos('http://127.0.0.1:5500/img/dj_uno.jpeg', 'Dj Shadow', 'IDM / HOUSE', genericDescription),
        dos : new nuevosTalentos('http://127.0.0.1:5500/img/dj_dos.jpeg', 'Dj Emmet', 'Dance / HOUSE', genericDescription),
        tres : new nuevosTalentos('http://127.0.0.1:5500/img/dj_tres.jpeg', 'Dj Reset', 'Future Bass / IDM', genericDescription),
        cuatro : new nuevosTalentos('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/DJ_Shadow.jpg/250px-DJ_Shadow.jpg', 'Dj Amazon', 'Ambient / dark', genericDescription)
    }
    const djsPageTwo = {
        uno:  new nuevosTalentos('https://mxcity.mx/wp-content/uploads/2014/08/Kris.jpg', 'Vanessa', 'IDM / HOUSE', genericDescription),
        dos:  new nuevosTalentos('https://mxcity.mx/wp-content/uploads/2014/08/Tatiana.jpg', 'Karla ', 'IDM / HOUSE', genericDescription),
        tres:  new nuevosTalentos('https://danzeria.com/wp-content/uploads/2015/07/10413436_471251846388926_4328523394725781363_n.jpg', 'Paola', 'IDM / HOUSE', genericDescription),
        cuatro:  new nuevosTalentos('http://danzeria.com/wp-content/uploads/2016/08/unnamed-78.jpg', 'Dj Girly', 'IDM / HOUSE', genericDescription)
    }
    const djsPageThree = {
        uno:  new nuevosTalentos('https://xombitmusic.com/files/2013/12/DJ.jpg', 'DJ Mint', 'IDM / HOUSE', genericDescription),
        dos:  new nuevosTalentos('https://i1.wp.com/knobstudio.com.mx/wp-content/uploads/2016/09/Diplomado-Electronic-Music-DJ-Set-2017.png', 'DJ Sasha ', 'IDM / HOUSE', genericDescription),
        tres:  new nuevosTalentos('http://ottofm.com/wp-content/uploads/2018/09/will-marshmello-save-edm-body-image-1479921716.jpg', 'Dj Marshmello', 'IDM / HOUSE', genericDescription),
        cuatro:  new nuevosTalentos('https://los40es00.epimg.net/los40/imagenes/2019/03/12/musica/1552414961_036011_1552419779_noticia_normal.jpg', 'Dj Green', 'IDM / HOUSE', genericDescription)
    }
let paginaTresNuevosTalentos = djsPageOne;

let paginaUno = new djPages(1, sectionNuevosTalentos, navsTalento, djsPageOne)
let paginaDos= new djPages(2, sectionNuevosTalentos, navsTalento,djsPageTwo)
let paginaTres= new djPages(3, sectionNuevosTalentos, navsTalento, djsPageThree)

if(sectionNuevosTalentos){        
paginaUno.setPage()
    navsTalento.one.addEventListener('click', ()=>{
       paginaUno.setPage() 
    })
    navsTalento.two.addEventListener('click', ()=>{
        paginaDos.setPage() 
     })
    navsTalento.three.addEventListener('click', ()=>{
        paginaTres.setPage() 
     })
}

let sectionClasicos = document.getElementById('section-clasicos')
if(sectionClasicos){
    let numero_djs = 4 //Siempre mantener en numero par
    for(let i= 0; i<numero_djs; i++){
        fka.createIn(sectionClasicos, setUrl)
    }
}