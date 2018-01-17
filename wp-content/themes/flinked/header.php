<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>alexis benoliel</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Open+Sans:300,400,600" rel="stylesheet">
        <!-- Execution de la fonction wp_head() obligatoire ! -->
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <!-- start line grid -->
        <div class="line">
            <div class="line__single line__single--hidden"></div>
            <div class="line__single"></div>
            <div class="line__single"></div>
            <div class="line__single"></div>
            <div class="line__single line__single--hidden"></div>
        </div>
        <!-- end line grid -->

        <!-- start top nav -->
        <div class="topNav">
            <a href="#" class="topNav__logo"><img src="<?= IMAGES_URL .'/logo.png' ?>" alt="louisJ" class="topNav-logo__img"></a>
            <a href="#" class="topNav__about">À propos</a>
        </div>
        <!-- end top nav -->

        <!-- start top nav -->
        <div class="bottomNav">
            <a href="#" class="bottomNav__link">Apple music</a>
            <a href="#" class="bottomNav__link">Deezer</a>
            <a href="#" class="bottomNav__link">Spotify</a>
            <a href="#" class="bottomNav__link">Facebook</a>
            <a href="#" class="bottomNav__link">Instagram</a>
        </div>
        <!-- end top nav -->


