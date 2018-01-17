<?php
/**
 * [Add script]
 */

/**
 * Enqueue style
 */
function my_style() {
    wp_register_style( 'style-main', CSS_URL . '/main.css' , array(), true);
    wp_enqueue_style( 'style-main' );
}
add_action( 'wp_enqueue_scripts',  'my_style' );


/**
 * Enqueue script
 */
function my_script() {
    wp_register_script( 'main', JS_URL . '/bundle.js' , array(), true);
    wp_localize_script( 'main', 'ajaxurl', admin_url( 'admin-ajax.php' ) );

    wp_enqueue_script('main');
}
add_action( 'wp_enqueue_scripts', 'my_script' );
