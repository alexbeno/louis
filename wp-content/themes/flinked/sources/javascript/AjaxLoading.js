import InstaSlider from './InstaSlider.js'
import MainTransition from './MainTransition.js'

export default function AjaxLoading (url)  {
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
              mainTrans(data);
              history.pushState(data, 'louis J', url);

          }).error( function() {
              console.log("we can't load de page")
          });
      }

      function mainTrans (data) {
        let mainTransition = new MainTransition();
        mainTransition.init();
        setTimeout(function(){
            switch_content( data );
        }, 300);

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
      }

      function loadGalerieScript() {

        let instaSlider = null;

        instaSlider = new InstaSlider();
        instaSlider.init();
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

