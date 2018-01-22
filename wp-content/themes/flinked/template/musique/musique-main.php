
<?php
//option page
$musicNav = get_field('option--musique', 'option');
$galerieNav = get_field('option--galerie', 'option');
$dragNav = get_field('option--drag', 'option');
$scrollNav = get_field('option--scroll', 'option');
$galeriePage = get_field('option--galerie_page', 'option');

// //album content global
// $title = get_field( "album--nom" );
// $description = get_field( "album--description" );
// $pochet = get_field( "album--pochette" );
// $musique = get_field( "album--musique" );

// //network link
// $appleMusique = get_field( "album--apple_musique" );
// $spotify = get_field( "album--spotify" );
// $deezer = get_field( "album--deezer" );

?>

<main>
  <div class="musiquePage">
    <div class="musiquePage__dragMover" data-x="0">
    <!-- start query  -->
    <?php $query = new WP_Query( array( 'post_type' => 'album' ) );

    if ( $query->have_posts() ) : ?>
      <?php while ( $query->have_posts() ) : $query->the_post(); ?>

        <!-- start musique drag view  -->
          <div class="musiquePage__drag">
            <img src="<?= get_field( "album--pochette" ); ?>" alt="<?= the_title() ?>" class="musiquePage__drag__img">
            <h2 class="musiquePage__drag__title"><?= get_field( "album--nom" ); ?></h2>
          </div>
        <!-- end musique drag view  -->

      <?php endwhile; endif; wp_reset_postdata(); ?>
      <!-- end query  -->
      </div>
    <!-- start right naviagtion -->
    <div class="navigation navigation--vertical homePage__rightNavigation">
      <p class="navigation__texte homePage__rightNavigation__texte"><?= $musicNav ?></p>
      <div class="navigation__border homePage__rightNavigation__border"></div>
      <p class="navigation__subTexte homePage__rightNavigation__subTexte"><?= $dragNav ?></p>
    </div>
    <!-- end right naviagtion -->


  </div>
</main>