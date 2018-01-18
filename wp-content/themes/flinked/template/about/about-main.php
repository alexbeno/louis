<?php
//option page
$musicNav = get_field('option--musique', 'option');
$galerieNav = get_field('option--galerie', 'option');
$dragNav = get_field('option--drag', 'option');

// description
$description_title = get_field( "about--description--titre" );
$description_description = get_field( "about--description--description" );
$description_bg = get_field( "about--description--phrase_en_arriere_plan" );

//event
$event_title = get_field( "about--evenement--titre" );
$event_description = get_field( "about--evenement--texte" );
$event_bg = get_field( "about--evenement--phrase_en_arriere_plan" );

//event information
$event_date = get_field( "about--evenement--date" );
$event_lieu = get_field( "about--evenement--lieux" );
$event_prix = get_field( "about--evenement--prix" );
$event_link = get_field( "about--evenement--lien_vers_levenement" );

?>
<main>
  <div class="about">
    <div class="about__description">
      <p class="about__description__background"><?= $description_bg ?></p>
      <h3 class="about__description__name"><?= $description_title ?></h3>
      <p class="about__description__explain"><?= $description_description ?></p>
    </div>

    <div class="about__event">
      <p class="about__event__background"><?= $event_bg ?></p>
      <div class="about__event__flex">
        <h3 class="about__event__title"><?= $event_title ?></h3>
        <p class="about__event__explain"><?= $event_description ?></p>
        <div class="about__event__info">
          <p class="about__eventInfo__text"><span class="about__eventInfo__light">Date</span><?= $event_date  ?></p>
          <p class="about__eventInfo__text"><span class="about__eventInfo__light">Lieu</span><?= $event_lieu  ?></p>
          <p class="about__eventInfo__text"><span class="about__eventInfo__light">Prix</span><?= $event_prix  ?></p>
        </div>
        <a href="<?= $event_link ?>" class="about__event__link">Reserver votre place</a>
      </div>
    </div>

    <!-- start left naviagtion -->
    <div class="navigation navigation--turnLeft aboutjdjdd__rightNavigation">
      <p class="navigation__texte aboutjdjdd__rightNavigation__texte"><?= $galerieNav ?></p>
      <div class="navigation__border aboutjdjdd__rightNavigation__border"></div>
    </div>
    <!-- end left naviagtion -->
  </div>
</main>