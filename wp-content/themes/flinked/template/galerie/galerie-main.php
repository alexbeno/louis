<?php
//option page
$musicNav = get_field('option--musique', 'option');
$homeNav = get_field('option--accueil', 'option');
$dragNav = get_field('option--drag', 'option');
$homePage = get_field('option---accueil_page', 'option');

//content
$shortCode = get_field( "instragram_shortcode" );

?>
<main>
  <div class="galerie">
    <!-- start instagram plugin -->
    <div class="galerie__instagram">
      <?= $shortCode ?>
    </div>
    <!-- end instagram plugin -->

    <!-- start galerie  navigation -->
    <div class="galerie__prev">
      <a href="précédent" class="galerie__prevLink"><img src="<?= IMAGES_URL ?>/back.svg" alt="" class="galerie__prevLink__image"></a>
    </div>
    <div class="galerie__next">
      <a href="précédent" class="galerie__nextLink"><img src="<?= IMAGES_URL ?>/next.svg" alt="" class="galerie__nextLink__image"></a>
    </div>
    <!-- start galerie  navigation -->

    <!-- start left naviagtion -->
    <div class="navigation navigation--turnRight galerie__rightNavigation goToHome" data-homePage =" <?= $homePage ?>">
      <p class="navigation__texte galerie__rightNavigation__texte"><?= $homeNav ?></p>
      <div class="navigation__border galerie__rightNavigation__border"></div>
    </div>
    <!-- end left naviagtion -->
  </div>
</main>