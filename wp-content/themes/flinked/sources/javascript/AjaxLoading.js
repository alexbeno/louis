import InstaSlider from './InstaSlider.js'

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
              history.pushState(data, 'louis J', url);
              switch_content( data );
          }).error( function() {
              console.log("we can't load de page")
          });
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

