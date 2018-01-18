var Navigation = () => {

    jQuery(document).ready(function ($) {

        // j'écoute les clic de tous les liens, sauf de l'admin bar
        $( document ).on( 'click', 'a[href^="http://localhost:8888/louisj/a-propos/"]:not(.ab-item)', do_ajax_request );

        // lors d'un clic, j'exécute une fonction qui prend le lien en paramètre
        function do_ajax_request( e ) {
            e.preventDefault();
            var url = $( this ).attr( 'href' );
            var title = $( this ).attr( 'data-title' );
            perform_ajax_request( url, title );
        }

        // je fais une requête ajax vers le lien, en poussant BAWXMLHttpRequest dans les headers
        function perform_ajax_request( url, title ) {

            $.ajax({
                url    : url,
                type   : 'POST',
                headers: {
                    'X-Requested-With':'BAWXMLHttpRequest'
                }
            }).done( function( data ) {
                // Do stuff
                history.pushState(data, title, url);
                switch_content( data );
            }).error( function() {
                // Error
            });
        }


        //la fonction pour la bascule des contenus
        function switch_content( data ) {
            $('.homePage').remove();
            $('body').append($(data));
        }
    });
}

module.exports = () => {
    Navigation();
}
