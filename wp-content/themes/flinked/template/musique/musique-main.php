
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
            <div class="musiquePage__content">
              <div class="musiquePage__content__general">
                <h4 class="musiquePage__content__title"><?= get_field( "album--nom" ); ?></h4>
                <p class="musiquePage__content__descriptions"><?= get_field( "album--description" ); ?></p>
              </div>
              <div class="musiquePage__content__song">
                <img src="<?= IMAGES_URL ?>/play.svg" alt="play" class="musiquePage__content__songplay">
                <div class="musiquePage__content__songPlatform">
                  <div class="musiquePage__content__songPlatform__single">
                    <p class="musiquePage__content__songPlatform__singlePref">On</p>
                    <a href="<?= get_field( "album--apple_musique" ); ?>" target="_blank" class="musiquePage__content__songPlatform__singleName">Apple musique</a>
                  </div>
                  <div class="musiquePage__content__songPlatform__single">
                    <p class="musiquePage__content__songPlatform__singlePref">On</p>
                    <a href="<?= get_field( "album--spotify" ); ?>" target="_blank" class="musiquePage__content__songPlatform__singleName">Spotify</a>
                  </div>
                  <div class="musiquePage__content__songPlatform__single">
                    <p class="musiquePage__content__songPlatform__singlePref">On</p>
                    <a href="<?= get_field( "album--deezer" ); ?>" target="_blank" class="musiquePage__content__songPlatform__singleName">Deezer</a>
                  </div>
                </div>
              </div>
            </div>
            <img src="<?= get_field( "album--pochette" ); ?>" alt="<?= the_title() ?>" class="musiquePage__drag__img">
            <h2 class="musiquePage__drag__title"><?= get_field( "album--nom" ); ?></h2>
          </div>
        <!-- end musique drag view  -->

      <?php endwhile; endif; wp_reset_postdata(); ?>
      <!-- end query  -->
      </div>
    <!-- start right naviagtion -->
    <div class="navigation navigation--vertical musiquePage__rightNavigation">
      <p class="navigation__texte musiquePage__rightNavigation__texte" data-text="<?= $musicNav ?>"><?= $musicNav ?></p>
      <div class="navigation__border musiquePage__rightNavigation__border"></div>
      <p class="navigation__subTexte musiquePage__rightNavigation__subTexte" data-text="<?= $dragNav ?>"><?= $dragNav ?></p>
    </div>
    <!-- end right naviagtion -->


  </div>
</main>