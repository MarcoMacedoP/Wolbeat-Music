console.log ( 'AAAAAAAAAAAAAAAAAAAAAa')
let container = document.querySelector('.dj-discography')
var JSON_DISC = DJS.DJ_SHADOW.discos.Entroducing


class DISC { //Esta clase muestra los discos generados en la 
    constructor(JSON_OBJECT)
    {
      this.JSON_OBJECT = JSON_OBJECT
    }
    createIn(container){
        let article= document.createElement('article')
        article.className = 'dj-disc'
        //Avatar del disco
        let imgContainer =document.createElement('div')
        imgContainer.className='dj-disc-img-container'
        let img =document.createElement('img')
        img.className = 'dj-disc-img-container-img'
        img.setAttribute('src', this.JSON_OBJECT.cover);
        img.setAttribute('alt', 'Imagen de ' + this.JSON_OBJECT.Nombre);
        imgContainer.appendChild(img) 

        
        
        //img.style.backgroundImage = 'url('+this.JSON_OBJECT.cover+')'
      
        //Descripción del disco
        let sectionInfo= document.createElement('section')
        sectionInfo.className= 'dj-disc-info'
            let tittle= document.createElement('h2')
            tittle.className = 'dj-disc-info-tittle'
            tittle.innerHTML= this.JSON_OBJECT.Nombre;
            let genres= document.createElement('h3')
            genres.className = 'dj-disc-info-genres'
            genres.innerHTML = this.JSON_OBJECT.generos

            sectionInfo.appendChild(tittle)
            sectionInfo.appendChild(genres)
        //Redes sociales del disco
        let sectionSocial = document.createElement('div')
        sectionSocial.className= 'dj-disc-info-social'
            let iconSpotify = document.createElement('a')
            iconSpotify.className = 'dj-disc-info-social-spotify'
            iconSpotify.setAttribute('href',this.JSON_OBJECT.socialMedia.spotify)
            let iconYoutube = document.createElement('a')
            iconYoutube.className = 'dj-disc-info-social-youtube'
            iconYoutube.setAttribute('href', this.JSON_OBJECT.socialMedia.youtube)
            sectionSocial.appendChild(iconSpotify)
            sectionSocial.appendChild(iconYoutube)
        
        sectionInfo.appendChild(sectionSocial)
        //PArrafo del disco
        let description = document.createElement('p')
            let smallDesc = cutTxt(this.JSON_OBJECT.description, 200)
            description.innerHTML = smallDesc
            description.className = 'dj-disc-p'

        //Le pasamos los hijos al container
        article.appendChild(imgContainer)
        article.appendChild(sectionInfo)
        article.appendChild(description)

        container.appendChild(article)
    }
}
let Entroducing = new DISC(JSON_DISC)
