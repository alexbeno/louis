import InstaSlider from './InstaSlider.js'
import MainTransition from './MainTransition.js'
import Drag from './Drag.js'
import Sound from './Sound.js'

export default function AjaxLoading (url, trans)  {
  jQuery(document).ready(function ($) {

      // start perfom ajax request function with url parameter
      perform_ajax_request( url )

      /**
       * construct ajax request
       * @param {*} url
       */
      function perform_ajax_request( url ) {
          $.ajax({
              url    : url,
              type   : 'POST',
              headers: {
                  'X-Requested-With':'BAWXMLHttpRequest'
              }
          }).done( function( data ) {
              if(trans != null && trans === "musiqueTrans") {
                  musiqueTrans(data);
              }
              else if(trans != null && trans === "menuTrans") {
                  menuTrans(data);
              }
              else {
                mainTrans(data);
              }
              if(history.state != url) {
                  history.pushState(url, 'louis J', url);
              }

          }).error( function() {
              console.log("we can't load de page")
          });
      }



      function mainTrans (data) {
        let mainTransition = new MainTransition();
        mainTransition.init();

        var image = document.querySelector('.cursor__img')
        var dragCursor = image.getAttribute('data-normal');
        image.setAttribute('src', dragCursor)

        setTimeout(function(){
            switch_content( data );
        }, 1000);

        setTimeout(function(){
            mainTransition.return();
        }, 1200);
      }

      function menuTrans (data) {
        setTimeout(function(){
            switch_content( data );
        }, 300);
      }

      function musiqueTrans (data) {
        let mainTransition = new MainTransition();
        mainTransition.init();

        var image = document.querySelector('.cursor__img')
        var dragCursor = image.getAttribute('data-normal');
        image.setAttribute('src', dragCursor)

        setTimeout(function(){
            switch_content( data );
        }, 1000);

        setTimeout(function(){
            mainTransition.return();
        }, 1200);
      }

      function loadScript () {
        var pathName = window.location.pathname;
        pathName = pathName.split("/");
        pathName = pathName[1];
        if(pathName === "galerie") {
            loadGalerieScript();
        }
        if(pathName === "") {
            loadHomeScript();
        }
        if(pathName === "musique") {
            loadMusiqueScript();
        }
      }

      function loadGalerieScript() {

        let instaSlider = null;

        instaSlider = new InstaSlider();
        instaSlider.init();

        let nav = document.querySelector('.responsiveMenu');
        nav.classList.add('responsiveMenu--galerie')
      }

      function loadHomeScript() {
        // silence
        let nav = document.querySelector('.responsiveMenu');
        nav.classList.remove('responsiveMenu--galerie')
      }

      function loadMusiqueScript() {
        let drag = null;
        let sound = null;
        drag = new Drag();
        drag.init();
        sound = new Sound();
        sound.init();
        let nav = document.querySelector('.responsiveMenu');
        nav.classList.remove('responsiveMenu--galerie')
      }

      /**
       * replace current content
       * @param {*} data
       */
      function switch_content( data ) {
          $('main').remove();
          $('.responsiveMenu ').after($(data));
          loadScript();
      }
  });
}

