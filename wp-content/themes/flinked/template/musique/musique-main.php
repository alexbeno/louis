
<?php
//option page
$galerieNav = get_field('option--galerie', 'option');
$scrollNav = get_field('option--scroll', 'option');
$galeriePage = get_field('option--galerie_page', 'option');

//album content global
$title = get_field( "album--nom" );
$description = get_field( "album--description" );
$pochet = get_field( "album--pochette" );
$musique = get_field( "album--musique" );

//network link
$appleMusique = get_field( "album--apple_musique" );
$spotify = get_field( "album--spotify" );
$deezer = get_field( "album--deezer" );

?>

<main>
  <div class="musiquePage">
<?php
$query = new WP_Query( array( 'post_type' => 'album' ) );

if ( $query->have_posts() ) : ?>
  <?php while ( $query->have_posts() ) : $query->the_post(); ?>

  
  <?php endwhile; endif; wp_reset_postdata(); ?>

  </div>
</main>