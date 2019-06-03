

class disc{
    constructor (avatar,nombre, cover, description, genres, url){
        this.avatar= avatar
        this.nombre= nombre
        this.cover = cover
        this.description = description
        this.genres = genres
        if(url){this.url = url}
    }
    createIn(container, fn){
        //creamos el contenedor
        let section = document.createElement('section')
        section.className = 'discos-disco'
        //Titulo
        let tittleContainer = document.createElement('div')
        tittleContainer.className= 'disco-avatar-tittle-container'
        let avatar = document.createElement('picture')
        avatar.className= 'article-img'
        let h2 = document.createElement('h2')
        h2.className = 'disco-tittle'
        let tittle = document.createElement('a')
        h2.appendChild(tittle)
        tittleContainer.appendChild(avatar)
        tittleContainer.appendChild(h2)
        //picture
        let discPicture= document.createElement('picture')
        discPicture.className = 'disco-picture'
        let discPictureContainer= document.createElement('div')
        discPictureContainer.className= 'disco-picture-container'
        let img = document.createElement('img')
        img.className= 'disco-img-picture-img'
        discPictureContainer.appendChild(img)
        discPicture.appendChild(discPictureContainer)
        //description
        let discDescription = document.createElement('p')
        discDescription.className= ('disco-p')
        //Crear card
        tittle.innerHTML = this.nombre
        avatar.style.backgroundImage = 'url('+this.avatar+')' 
        img.setAttribute('src', this.cover)
        discPicture.style.backgroundImage = 'url('+this.cover+')'
        let cutDescription= cutTxt(this.description, 140 )
        discDescription.innerHTML = cutDescription
        //Meter card al DOM
        section.appendChild(tittleContainer)
        section.appendChild(discPicture)
        section.appendChild(discDescription)
        
        
        container.appendChild(section)
        if(fn){
            fn(this.url, tittle)
        }

    }
    setInfoPage(headline, headerPicture, infoContainer ){
        headline.innerHTML= this.nombre
        let subtittle= infoContainer.querySelector('.disc-information-tittle')
        subtittle.innerHTML= "Sobre " + this.nombre
        subtittle= document.querySelector('.disc-songs-tittle')
        subtittle.innerHTML = "Canciones de " + this.nombre
        let genres= infoContainer.querySelector('.disc-information-genres')
        genres.innerHTML = this.genres
        genres= document.querySelector('.disc-songs-genres')
        genres.innerHTML = this.genres
        let description = infoContainer.querySelector('.disc-information-p')
        description.innerHTML = this.description
        description= document.querySelector('.disc-songs-desc')
        let shortDesc= cutTxt(this.description, 120)
        description.innerHTML = shortDesc
        let img = headerPicture.querySelector('img')
        img.setAttribute('src', this.cover)
    }

}
function createDISC (artistTemp, discTemp){
    let object= new disc(artistTemp.avatar, discTemp.Nombre, discTemp.cover, 
        discTemp.description,discTemp.generos, discTemp.url)
    return object;
}

artistTemp = DJS.WOLBEAT
discTemp = artistTemp.discos.WMVOLI
//DISCOS
let WMVOLI = createDISC(artistTemp, discTemp)
let CAROL = createDISC(DJS.LIVJ, DJS.LIVJ.discos.CAROL)
let BLEU = createDISC(DJS.LIVJ, DJS.LIVJ.discos.BLEU)
let BLACK = createDISC(DJS.ROSSWELL, DJS.ROSSWELL.discos.BLACK)
let TWO_ELEVEN = createDISC(DJS.ROSSWELL, DJS.ROSSWELL.discos.TWO_ELEVEN)

//SINGLES
let BREZZE = createDISC (DJS.FELIX_GARREL, DJS.FELIX_GARREL.discos.BREZZE)
let NO_NAME= createDISC(DJS.OCECA, DJS.OCECA.discos.NO_NAME)
let BACK_TO_BASS = createDISC(DJS.HAUZZA, DJS.HAUZZA.discos.BACK_TO_BASS)
let REMIX = createDISC(DJS.LUILLY, DJS.LUILLY.discos.REMIX)
let BOUNCE = createDISC(DJS.MCKLED, DJS.MCKLED.discos.BOUNCE)

let discos= [
    WMVOLI,CAROL,BLEU,BLACK,TWO_ELEVEN
]
let singles = [
    BREZZE,NO_NAME, BACK_TO_BASS, REMIX, BOUNCE
]


let container = document.querySelector('#discos')
if(container){
    discos.forEach(element => {
        element.createIn(container, setUrl)
    });
}
container = document.querySelector('#singles')
if(container){
    singles.forEach(element => {
        element.createIn(container, setUrl)
    });
}