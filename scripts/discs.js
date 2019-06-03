var disc = ''
console.log ( 'AAAAAAAAAAAAAAAAAAAAAa')
let containerDiscografia = document.querySelector('.dj-discography')



class DISC { //Esta clase muestra los discos generados en la 
    constructor(JSON_OBJECT)
    {
      this.JSON_OBJECT = JSON_OBJECT
    }
    createIn(container, fn){
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
            let tittleLink = document.createElement('a')
            tittleLink.className = 'dj-disc-info-tittle'
            tittleLink.innerHTML= this.JSON_OBJECT.Nombre;
            tittle.appendChild(tittleLink)
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
        if(fn){
            fn(this.JSON_OBJECT.url, tittleLink)
        }
        
    }
    setInfoPage(headline, headerPicture, infoContainer, fn ){
        headline.innerHTML= this.JSON_OBJECT.Nombre
        let smallDesc = cutTxt(this.JSON_OBJECT.description, 228)
        let subtittle= infoContainer.querySelector('.disc-information-tittle')
        subtittle.innerHTML= "Sobre " + this.JSON_OBJECT.Nombre;
        subtittle = document.querySelector('.disc-songs-tittle')
        subtittle.innerHTML= "Sobre " + this.JSON_OBJECT.Nombre;
        let genres= infoContainer.querySelector('.disc-information-genres')
        genres.innerHTML = this.JSON_OBJECT.generos
        genres = document.querySelector('.disc-songs-genres')
        genres.innerHTML = this.JSON_OBJECT.generos
        let description = infoContainer.querySelector('.disc-information-p')
        description.innerHTML = this.JSON_OBJECT.description
        description= document.querySelector('.disc-songs-desc')
        description.innerHTML = smallDesc
        let img = headerPicture.querySelector('img')
        img.setAttribute('src', this.JSON_OBJECT.cover)
        //Seteo de canciones
        var canciones = Object.values(this.JSON_OBJECT.canciones)
        let songsContainer = document.querySelector('.disc-songs-container')
        canciones.forEach(element => {
            let songItem = document.createElement('div')
            songItem.className= 'disc-songs-container-item'
            let songIcon = document.createElement('i')
            songIcon.className = 'disc-songs-container-item-icon'
            let songName = document.createElement('a')
            songName.className= 'disc-songs-container-item-name'
            songName.innerHTML = element.nombre
            let artistName = document.createElement('a')
            artistName.innerHTML = this.JSON_OBJECT.Nombre;
            artistName.className = 'disc-songs-container-item-artist'
            let songDuration =  document.createElement('span')
            songDuration.innerHTML = element.duration
            songDuration.className= 'disc-songs-container-item-duration'
            songItem.appendChild(songIcon)
            songItem.appendChild(songName)
            songItem.appendChild(artistName)
            songItem.appendChild(songDuration)
            
            songsContainer.appendChild(songItem)
            if (fn){
                fn(element.link, artistName)
                fn(element.link, songName)
            }
        });
    }



    
}

