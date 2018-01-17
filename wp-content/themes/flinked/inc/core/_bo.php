<?php
/**
 * [Bo modification]
 */

/*start footer message */

function remove_footer_admin () {
echo "Another wonderful flinked theme";
}
add_filter('admin_footer_text', 'remove_footer_admin');

/*end footer message*/

/*activer les image a la une*/

add_theme_support( 'post-thumbnails' );
