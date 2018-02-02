<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title><?php the_field('option--titre_de_site', 'option'); ?> </title>
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
            <a href="<?= get_home_url() ?>" class="topNav__logo"><img src="<?php the_field('option--logo', 'option'); ?>" alt="louisJ" class="topNav-logo__img"></a>
            <a href="<?= get_home_url()."/musique" ?>" class="topNav__about">Musique</a>
        </div>
        <!-- end top nav -->

        <!-- start top nav -->
        <div class="bottomNav">
            <a href="<?php the_field('option--apple_musique', 'option'); ?>" class="bottomNav__link">Apple music</a>
            <a href="<?php the_field('option--deezer', 'option'); ?>" class="bottomNav__link">Deezer</a>
            <a href="<?php the_field('option--apple_musique', 'option'); ?>" class="bottomNav__link">Spotify</a>
            <a href="<?php the_field('option--facebook', 'option'); ?>" class="bottomNav__link">Facebook</a>
            <a href="<?php the_field('option--instagram', 'option'); ?>" class="bottomNav__link">Instagram</a>
        </div>
        <!-- end top nav -->

        <!-- start trans -->
        <div class="trans">
            <div class="trans__single trans__single--1"></div>
            <div class="trans__single trans__single--2"></div>
            <div class="trans__single trans__single--3"></div>
            <div class="trans__single trans__single--4"></div>
            <div class="trans__logo">
                <img src="<?php the_field('option--logo', 'option'); ?>" alt="" class="trans__logo__img">
            </div>
        </div>
        <!-- end trans -->

        <div class="album-trans"></div>

        <!-- start cursor -->
        <div class="cursor" onselectstart="return false;" ondragstart="return false;"   >
            <img onselectstart="return false;" ondragstart="return false;" src="<?= IMAGES_URL ?>/cursor/cursor.png" alt="" class="cursor__img" data-normal="<?= IMAGES_URL ?>/cursor/cursor.png" data-drag="<?= IMAGES_URL ?>/cursor/cursorActive.png" data-quit="<?= IMAGES_URL ?>/cursor/cursorQuit.png">
        </div>
        <!-- end cursor -->

        <!-- start responsive menu -->
        <div class="responsiveMenu">
            <div class="responsiveMenu__nav">
                <a href="<?= get_home_url() ?>" class="responsiveMenu__logo"><img src="<?php the_field('option--logo', 'option'); ?>" alt="louisJ" class="responsiveMenu__logo__img"></a>
                <img class="responsiveMenu__icones" src="<?= IMAGES_URL ?>/menu.svg">
            </div>
        </div>
        <!-- end responsive menu -->
