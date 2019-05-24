

class disc{
    constructor (avatar,nombre, cover, description, url){
        this.avatar= avatar
        this.nombre= nombre
        this.cover = cover
        this.description = description
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

}


var Endtroducing = new disc('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/DJ_Shadow_tim_festival.jpg/230px-DJ_Shadow_tim_festival.jpg',
    'Endtroducing.....', 'https://static.spin.com/files/2016/09/endtroducing-640x427.jpg', '', 'http://127.0.0.1:5500/sections/Disc/one.html', 'http://127.0.0.1:5500/sections/Disc/one.html' )
Endtroducing.description= "Endtroducing..... es el álbum debut del productor musical estadounidense DJ Shadow, lanzado el 19 de noviembre de 1996 bajo el sello Mo' Wax. El álbum es conocido por estar compuesto casi en su totalidad de contenido sampleado, la mayoría del cual se originó a partir de varios discos de vinilo obtenidos por DJ Shadow durante sus viajes a las tiendas de música. Endtroducing..... fue producido por Shadow en el lapso de dos años con un mínimo de equipo, sobre todo el sampler Akai MPC60. Al crear la atmósfera general del disco, se esforzó por captar la naturaleza melancólica de sus lanzamientos anteriores para el sello Mo' Wax. El contenido del álbum incluye tanto temperamentales pistas de ritmo lento como canciones optimistas que recuerdan a las primeras influencias de hip hop de DJ Shadow.\n\nEndtroducing..... recibió la aclamación universal de los críticos, que elogiaron el enfoque de DJ Shadow hacia el sampleado y los ritmos que él creó a partir de los samples. Obtuvo altas posiciones en varias listas de fin de año de los mejores discos del 1996. El álbum es considerado una obra decisiva en el movimiento del hip hop instrumental, con las innovadoras técnicas de muestreo y arreglos de DJ Shadow influenciando a otros productores a crear similares obras basadas en muestras. Endtroducing..... ha aparecido desde entonces en las listas de mejores discos de la década —e incluso de todos los tiempos— de varias publicaciones. "

let container = document.querySelector('.discos')
Endtroducing.createIn(container, setUrl)
Endtroducing.createIn(container, setUrl)
Endtroducing.createIn(container, setUrl)
Endtroducing.createIn(container, setUrl)
Endtroducing.createIn(container, setUrl)
Endtroducing.createIn(container, setUrl)
