
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

let sectionNuevosTalentos = document.getElementById('section-nuevos-talentos')
if(sectionNuevosTalentos){
    let numero_djs = 4 //Siempre mantener en numero par
        for(let i= 0; i<numero_djs; i++){
            Marco.createIn(sectionNuevosTalentos)
        }
}
let sectionClasicos = document.getElementById('section-clasicos')
if(sectionClasicos){
    let numero_djs = 4 //Siempre mantener en numero par
    for(let i= 0; i<numero_djs; i++){
        fka.createIn(sectionClasicos)
    }
}