<?php
/**
 * [Post type template]
 */

add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'work',
    array(
      'labels' => array(
        'name' => __( 'works' ),
        'singular_name' => __( 'work' )
      ),
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
