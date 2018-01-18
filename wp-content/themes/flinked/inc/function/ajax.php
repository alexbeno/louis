<?php

add_filter( 'template_include', 'baw_template_include' );
function baw_template_include( $template ) {
	if( isset( $_SERVER['HTTP_X_REQUESTED_WITH'] ) && $_SERVER['HTTP_X_REQUESTED_WITH']== 'BAWXMLHttpRequest' ):
		$pre = dirname( $template );
		$suf = basename( $template );
    $_template = $pre . '/ajax-' . $suf;
		if( !file_exists( $_template ) )
			$_template = $template;
		$template = $_template;
	endif;
	return $template;
}