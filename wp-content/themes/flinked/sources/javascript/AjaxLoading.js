export default function AjaxLoading (url)  {
  jQuery(document).ready(function ($) {
      perform_ajax_request( url )

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

      function switch_content( data ) {
          $('main').remove();
          $('body').append($(data));
      }
  });
}

