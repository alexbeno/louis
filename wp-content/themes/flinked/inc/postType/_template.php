<?php
/**
 * [Post type template]
 */

add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'album',
    array(
      'labels' => array(
        'name' => 'albums',
        'singular_name' => 'album',
        'add_new_item' => 'Ajouter un album',
        'edit_item' => "Modifier l'album",
      ),
      'menu_icon' => 'dashicons-megaphone',
      'public' => true,
        'supports' => array(
      	'title',
      	'editor',
      	'thumbnail'
      	 ),
    )
  );
}

add_filter( 'sanitize_file_name', 'remove_accents' );//enlever les accent image
