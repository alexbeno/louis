
<?php
$name = get_field( "home--nom" );
$musicNav = get_field('option--musique', 'option');
$galerieNav = get_field('option--galerie', 'option');
$dragNav = get_field('option--drag', 'option');
$scrollNav = get_field('option--scroll', 'option');
$galeriePage = get_field('option--galerie_page', 'option');
$musiquePage = get_field('option--musique_page', 'option');
$description_description = get_field( "about--description" );

//event
$event_title = get_field( "about--evenement--titre" );
$event_description = get_field( "about--evenement--texte" );

//event information
$event_date = get_field( "about--evenement--date" );
$event_lieu = get_field( "about--evenement--lieux" );
$event_prix = get_field( "about--evenement--prix" );
$event_link = get_field( "about--evenement--lien_vers_levenement" );

$sortie_title = get_field( "event--title" );
$sortie_description = get_field( "event--description" );
$sortie_link = get_field( "event--lien_externe" );

$isEvent = get_field( "event" );
var_dump($isEvent);
?>

<main>
  <div class="homePage">
    <h1 class="homePage__name"><?= $name ?></h1>
<?php
if($isEvent ==="concert") {
?>
    <!-- start event part -->
    <div class="homePage__event">
      <div class="homePage__event__flex">
        <h3 class="homePage__event__title"><?= $event_title ?></h3>
        <p class="homePage__event__explain"><?= $event_description ?></p>
        <div class="homePage__event__info">
          <p class="homePage__eventInfo__text"><span class="homePage__eventInfo__light">Date</span><?= $event_date  ?></p>
          <p class="homePage__eventInfo__text"><span class="homePage__eventInfo__light">Lieu</span><?= $event_lieu  ?></p>
          <p class="homePage__eventInfo__text"><span class="homePage__eventInfo__light">Prix</span><?= $event_prix  ?></p>
        </div>
        <a href="<?= $event_link ?>" class="homePage__event__link">Reserver votre place</a>
      </div>
    </div>
    <!-- start event part -->
<?php
} else if($isEvent === "rien") {
?>
    <!-- start global part -->
    <div class="homePage__description">
      <p class="homePage__description__explain"><?= $description_description ?></p>
    </div>
    <!-- start global part -->

<?php
} else if($isEvent === "evenement") {
?>
    <!-- start sortie part -->
    <div class="homePage__sortie">
        <h3 class="homePage__sortie__title"><?= $sortie_title ?></h3>
        <p class="homePage__sortie__explain"><?= $sortie_description ?></p>
        <a href="<?= $sortie_link ?>" class="homePage__sortie__link">Reserver votre place</a>
    </div>
    <!-- start sortie part -->
<?php
}
?>
    <!-- start right naviagtion -->
    <div class="navigation navigation--vertical homePage__rightNavigation goToMusique" data-musiquePage="<?= $musiquePage ?>">
      <p class="navigation__texte homePage__rightNavigation__texte"><?= $musicNav ?></p>
      <div class="navigation__border homePage__rightNavigation__border"></div>
      <p class="navigation__subTexte homePage__rightNavigation__subTexte"><?= $dragNav ?></p>
    </div>
    <!-- end right naviagtion -->

    <!-- start left naviagtion -->
    <div class="navigation navigation--turnLeft homePage__rightNavigation goToGalerie" data-galeriePage="<?= $galeriePage ?>">
      <p class="navigation__texte homePage__rightNavigation__texte"><?= $galerieNav ?></p>
      <div class="navigation__border homePage__rightNavigation__border"></div>
      <p class="navigation__subTexte homePage__rightNavigation__subTexte"><?= $scrollNav ?></p>
    </div>
    <!-- end left naviagtion -->

  </div>
</main>