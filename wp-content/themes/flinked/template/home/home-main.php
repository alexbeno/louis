
<?php
$name = get_field( "home--nom" );
$musicNav = get_field('option--musique', 'option');
$galerieNav = get_field('option--galerie', 'option');
$dragNav = get_field('option--drag', 'option');
?>

<main>
  <div class="homePage">
    <h1 class="homePage__name"><?= $name ?></h1>

    <!-- start right naviagtion -->
    <div class="navigation navigation--vertical homePage__rightNavigation">
      <p class="navigation__texte homePage__rightNavigation__texte"><?= $musicNav ?></p>
      <div class="navigation__border homePage__rightNavigation__border"></div>
      <p class="navigation__subTexte homePage__rightNavigation__subTexte"><?= $dragNav ?></p>
    </div>
    <!-- end right naviagtion -->

    <!-- start left naviagtion -->
    <div class="navigation navigation--turnLeft homePage__rightNavigation">
      <p class="navigation__texte homePage__rightNavigation__texte"><?= $galerieNav ?></p>
      <div class="navigation__border homePage__rightNavigation__border"></div>
    </div>
    <!-- end left naviagtion -->

  </div>
</main>