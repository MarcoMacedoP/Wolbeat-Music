
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contacta a Wölbeat Music</title>
    <link rel="stylesheet" href="../css/sections.css">
</head>
<body>
    <!--Mobile bar start-->   
 <nav class="mobile-nav" id = "mobile-nav">
        <ol class = "mobile-nav-list">
            <li class= "mobile-nav-list-item-1">
                <a href="#" class= "mobile-nav-list-item-menu" id="menu_mobile_btn"></a>
            </li>
            <li class="mobile-nav-list-item-2">
                <a href="#" class ="mobile-nav-list-item-logo"></a>
            </li>
        </ol>
    </nav>
    <!--Mobile bar end-->

<!--Adaptable navigation bar start-->
<nav class="nav" id ="navigation_bar">
    <picture class="nav-mobile-picture">
        <img src="../img/Lobo.png" class= "nav-mobile-picture-img" alt="Lobo de Wolbeat Music">
    </picture>
    <img class="nav-welcome-logo" src="../img/logo_black.png" alt = "Logo de Wolbeat Music">  
    <ol class="nav-list"> 
        <li class="nav-list-item">
            <a href= "../">Inicio</a></li>
        <li class="nav-list-item">
            <a href= "../djs/">DJ's</a></li>
        <li class="nav-list-item">
            <a href= "../canciones/">Canciones</a></li>
        <li class="nav-list-item">
            <a href= "../nosotros/">Nosotros</a></li>
        <li class="nav-list-item">
            <a href= "../contacto/">Contacto</a></li>
        <li class="nav-list-item">
            <a href= "../tienda/">Tienda</a></li> 
    </ol>

</nav>
<!--Adaptable navigation bar end-->  

<!--Header with sections starts-->
<header class="header">
        <picture class="header-picture header-nosotros">
            <img src="../img/contacto.jpeg" alt="Imagen de la seccion">
        </picture>
        <h1 class="header-name">Contacto.</h1>
    </header>
    <!--Header with sections ends-->

 <!--Tittle v2-->   
 <section class="tittle-v2 tittle-contact">
        <h2 class="tittle-v2-h2">Únete al equipo de Wölbeat Music.</h2> 
        <h3 class="tittle-v2-h3">Dejanos tus datos y nos comunicaremos contigo.</h3>
</section>
<!--Tittle v2-->
 <!--Form section start-->
<form class="contact-form"action="contacto_hecho.php" method = "post">
    <input class = "contact-form-input" type="text"  name="name"placeholder="Nombre">
    <input class = "contact-form-input" type="text" name="lastName"placeholder="Apellidos">
    <input class = "contact-form-input" type="email" name="email"placeholder="Correo electronico">
    <input class = "contact-form-input" type="number" name="phone"placeholder="Numero de celular">
    <input class = "contact-form-input" type="text" name="asunto"placeholder="Asunto">
    <input class="cta_black" type="submit" value="Enviar datos">
</form> 

 <!--Form section ends-->
  <!--Tittle v2-->   
  <section class="contact-direct">
        <h2 class="tittle-v2-h2">Contactanos directamente.</h2> 
        <h3 class="tittle-v2-h3">Tambien puedes ponerte en contacto con nosotros por alguno de los siguientes medios.</h3>
        <div class="contact-direct-icons">
            <i class="contact-direct-icons-item icon-gmail"></i>
            <i class="contact-direct-icons-item icon-whatsapp"></i>
            <i class="contact-direct-icons-item icon-facebook"></i>    
        </div>
</section>
<!--Tittle v2-->
  <!-- Footer starts-->     
  <footer class="footer">
    <nav class="footer-nav">
        <picture>
            <a href="../"><img class ="footer-nav-icon" src="../img/logo_black.png" alt="Wolbeat-Logo"></a>
        </picture>
        <ol class="footer-nav-sections">
            <li><a href="../djs/">DJ's</a></li>
            <li><a href="../canciones/">Canciones</a></li>
            <li><a href="../nosotros/">Nosotros</a></li>
            <li><a href="../tienda/">Tienda</a></li>
            <li><a href="../contacto/">Contacto</a></li>
        </ol>
        <ul class="footer-nav-social">
            <li>
                <a class="footer-nav-social-fb" 
                href="https://www.facebook.com/WolbeatMusic/" target="_blank"></a>
                
            </li>
            <li><a class="footer-nav-social-spotify"
                 href="https://open.spotify.com/artist/3R7oQajp7N2jXHmXnFr7Vz" target="_blank"></a>
            </li>
            <li><a class="footer-nav-social-youtube"
                 href="https://www.youtube.com/channel/UCevn53WVsHuCStbHOymdU1g" target="_blank"></a>
            </li>
        </ul>
    </nav>
    </footer>
    <!-- Footer ends-->

     <!--Scripts start-->
     <script type="text/javascript" src = "../scripts/nav_bar.js"></script>
     <!--Scripts end-->
</body>
</html>