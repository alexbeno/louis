import InstaSlider from './InstaSlider.js'
import MainTransition from './MainTransition.js'
import DragToMusique from './DragToMusique.js'
import Drag from './Drag.js'

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
              else {
                mainTrans(data);
              }
              history.pushState(data, 'louis J', url);

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

      function musiqueTrans (data) {
        // var trans = document.querySelector('.album-trans');

        // trans.style.display ="block";
        // setTimeout( () => {
        //   trans.classList.add('album-trans--active')
        // }, 100);

        // setTimeout(function(){

        //     switch_content( data );
        // }, 800);

        // setTimeout(function(){
        //     trans.classList.remove('album-trans--active')
        //     setTimeout( () => {
        //       trans.style.display ="none";
        //     }, 800);
        // }, 900);
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
      }

      function loadHomeScript() {
        let dragToMusique = null
        dragToMusique = new DragToMusique();
        dragToMusique.init();
      }

      function loadMusiqueScript() {
        let drag = null;
        drag = new Drag();
        drag.init();
      }

      /**
       * replace current content
       * @param {*} data
       */
      function switch_content( data ) {
          $('main').remove();
          $('.bottomNav').after($(data));
          loadScript();
      }
  });
}

