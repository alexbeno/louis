<?php
/**
 * Template Name: About
 *
 * @package WordPress
 * @subpackage Flinked
 */

$folder = 'about';
$path = 'template/'. $folder .'/'.$folder.'-';


if ( have_posts() ){
  while ( have_posts() ) {
    the_post();
    get_template_part($path . 'main');
  }
}
?>
