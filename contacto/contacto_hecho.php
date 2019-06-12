<?php 



if(isset($_POST['name'])) {
       $name = $_POST['name'];
       $lastName = $_POST['lastName']; 
       $email = $_POST['email'];
       $phone= $_POST['phone']; 
       $msg = $_POST['asunto'];

       $receiver = "marcosiegman01@gmail.com";
       
       $messageBody = "Hola, mi nombre es ".$name. $lastName ."☺️ \r"
                       ."Me comunico desde tu página web porque me interesa unirme al equipo de Wölbeat Music. \r"
                       ."Escribí el siguiente mensaje desde el formulario: \r"
                       .$msg."\r"
                       ."Mis datos de contacto son: \r Email: ".$email
                       ."Número de celular: ".$phone 
                       ."\r Muchas gracias por la atención. :)" ;
                       
       $subject  = "Mensaje de contacto de www.wolbeatmusic.com";
       $headers = "From: thedarkmayck115@gmail.com" . "\r\n" .
       "CC: marcomacedo048@gmail.com";

       $emailStatus = mail($receiver, $subject, $messageBody, $headers);
       if($emailStatus){
           require_once 'contacto_hecho.php';
       } else {
           echo 'No se mandó el correo correctamente.';
          
           foreach ($_GET as $value){
               unset($value);
           }
       }
}



?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contacta a Wölbeat Music 🎧</title>
    <link rel="stylesheet" href="../css/sections.css">
    <!--SEO METADATA-->
    <meta name="description" content="Los mejores DJS de México. 🎧 
    Ponte en contacto con nosotros, vederemos tu musica y te haremos crecer. 💛 💪"/>
    <meta name="keywords" content="djs,dj's,mexico,guadalajara,spotify,itunes,musica"/>
    <meta name="robots" content="follow"/> 
    <meta name="robots" content="index"/>

    <!-- TODOS LOS FAVICONS UTILIZADOS -->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="../img/favicon/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../img/favicon/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../img/favicon/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../img/favicon/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="../img/favicon/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="../img/favicon/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="../img/favicon/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="../img/favicon/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="../img/favicon/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="../img/favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="../img/favicon/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="../img/favicon/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="../img/favicon/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;"/>
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="../img/favicon/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="../img/favicon/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="../img/favicon/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="../img/favicon/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="../img/favicon/mstile-310x310.png" />

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
 <section class="tittle-v2 made-contact">
        <h2 class="tittle-v2-h2">¡Gracias por dejar tus datos!</h2> 
        <h3 class="tittle-v2-h3">Enseguida nos pondremos en contacto contigo.</h3>
        <a class="cta_black" href="../../">Regresar a Inicio</a>
</section>
<!--Tittle v2-->

 <!-- Footer starts-->     
 <footer class="footer">
   <!--Footer nav starts-->
    <nav class="footer-nav">
            <picture>
                <img class ="footer-nav-icon" src="../img/logo_black.png" alt="Wolbeat-Logo">
            </picture>
            <ol class="footer-nav-sections">
                <li><a href="../djs/">DJ's</a></li>
                <li><a href="../canciones/">Canciones</a></li>
                <li><a href="../nosotros/">Nosotros</a></li>
                <li><a href="../tienda/">Tienda</a></li>
                <li><a href="../contacto">Contacto</a></li>
            </ol>
            <ul class="footer-nav-social">
                <li>
                    <a class="footer-nav-social-fb" 
                    href="#"></a>
                    
                </li>
                <li><a class="footer-nav-social-spotify"
                     href="#"></a>
                </li>
                <li><a class="footer-nav-social-youtube"
                     href="#"></a>
                </li>
            </ul>
        </nav>
    <!--Footer nav ends-->
    </footer>
    <!-- Footer ends-->

     <!--Scripts start-->
     <script type="text/javascript" src = "../scripts/nav_bar.js"></script>
     <!--Scripts end-->
</body>
</html>