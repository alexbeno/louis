<?php
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

<div class="about">
  <div class="about__description">
    <p class="about__description__background">JE SUIS LOUIS J</p>
    <h3 class="about__description__name">LOUIS J</h3>
    <p class="about__description__explain">cingulis ipsis adnectunt nimia subtegminum tenuitate perflabiles, expandentes eas crebris agitationibus maximeque sinistra, ut longiores fimbriae tunicaeque.
cingulis ipsis adnectunt nimia subtegminum tenuitate perflabiles, expandentes eas crebris agitationibus maximeque sinistra, ut longiores fimbriae tunicaeque.</p>
  </div>

  <div class="about__event">
    <p class="about__event__background">EVENEMENT</p>
    <div class="about__event__flex">
      <h3 class="about__event__title">CONCERT GIBUS</h3>
      <p class="about__event__explain">cingulis ipsis adnectunt nimia subtegminum tenuitate perflabiles, expandentes eas crebris agitationibus maximeque sinistra, ut longiores fimbriae tunicaeque.cingulis ipsis adnectunt nimia subtegminum tenuitate perflabiles, expandentes eas crebris agitationibus maximeque sinistra, ut longiores fimbriae tunicaeque.</p>
      <div class="about__event__info">
        <p class="about__eventInfo__text"><span class="about__eventInfo__light">Date</span>11 septembre 2018</p>
        <p class="about__eventInfo__text"><span class="about__eventInfo__light">Lieu</span>Gibus paris</p>
        <p class="about__eventInfo__text"><span class="about__eventInfo__light">Prix</span>15 euro</p>
      </div>
      <a href="#" class="about__event__link">Reserver votre place</a>
    </div>
  </div>
</div>