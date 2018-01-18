var Navigation = () => {

    jQuery(document).ready(function ($) {

        $( document ).on( 'click', 'a[href^="http://localhost:8888/louisj/a-propos/"]:not(.ab-item)', do_ajax_request );
        function do_ajax_request( e ) {
            e.preventDefault();
            var url = $( this ).attr( 'href' );
            perform_ajax_request( url );
        }

        window.addEventListener( 'popstate', function(e) {
            e.preventDefault();
            var url = window.location.href;
            perform_ajax_request( url )
        } );

        function perform_ajax_request( url ) {

            $.ajax({
                url    : url,
                type   : 'POST',
                headers: {
                    'X-Requested-With':'BAWXMLHttpRequest'
                }
            }).done( function( data ) {
                // Do stuff
                history.pushState(data, 'louis J', url);
                switch_content( data );
            }).error( function() {
                // Error
            });
        }

        function switch_content( data ) {
            $('main').remove();
            $('body').append($(data));
        }
    });
}

module.exports = () => {
    Navigation();
}
