<?php
/**
 * @package Make Child
 */

/**
 * The theme version.
 */
define( 'TTFMAKE_CHILD_VERSION', '1.6.1' );

/**
 * Turn off the parent theme styles.
 *
 * If you would like to use this child theme to style Make from scratch, rather
 * than simply overriding specific style rules, simply remove the '//' from the
 * 'add_filter' line below. This will tell the theme not to enqueue the parent
 * stylesheet along with the child one.
 */
//add_filter( 'make_enqueue_parent_stylesheet', '__return_false' );

/**
 * Add your custom theme functions here.
 */

/*Use minified css if present
function style_or_min_style() {
    $located = locate_template( 'style.min.css' );
     if ($located != '' ) {
          wp_deregister_style('make-main');
          wp_register_style('make-main', get_template_directory_uri() . 'style.min.css', array(), false, 'all') {
            return wp_styles()->add( 'make-main', get_template_directory_uri() . 'style.min.css', array(), false, 'all');
          }
     }
}
add_action('wp_enqueue_scripts', 'style_or_min_style');
/*end use minified css*/

function benchmark_login() {
	echo '<link rel="stylesheet" type="text/css" href="' . get_stylesheet_directory_uri() . '/assetts/benchmark-login.css" />';
}
add_action('login_head', 'benchmark_login');

function benchmark_styles() {
    wp_enqueue_style('benchmark', get_home_url() . '/wp-content/themes/make-child/style.min.css', array(), '1.6.1', 'all');    
}
add_action( 'wp_enqueue_scripts', 'benchmark_styles' );

function applyUI() {
    if ( is_page('apply') ) {
        wp_enqueue_script('applyUI', get_home_url() . '/wp-content/themes/make-child-lo/js/applyUI.js', array('jquery'), '1.0', true);
    }
}
add_action( 'wp_enqueue_scripts', 'applyUI');

function floify() {
    if ( is_page('floify') ) {
        wp_enqueue_script('iframeresizer', get_home_url() . '/wp-content/themes/make-child/assetts/iframeResizer.min.js', array('jquery'), '1.0', true);
        wp_enqueue_script('applyUI', get_home_url() . '/wp-content/themes/make-child-lo/js/applyUI.js', array('jquery'), '1.0', true);
        wp_enqueue_script('activateIframeResizer', get_home_url() . '/wp-content/themes/make-child/assetts/activateIframeResizer.js', array('jquery'), '1.0', true);
    }
}
add_action( 'wp_enqueue_scripts', 'floify');

function loan_process_scripts() {
    if( is_page('your-way-home')) {
        wp_enqueue_script('magnific-popup', get_home_url() . '/wp-content/themes/make-child-lo/assetts/jquery.magnific-popup.min.js', array( 'jquery' ), '1.0.0', true);
        wp_enqueue_style('magnific-popup-css', get_home_url() . '/wp-content/themes/make-child-lo/assetts/magnific-popup.css', array (), '1.0.0', false);
        wp_enqueue_script('loan-process', get_home_url() . '/wp-content/themes/make-child-lo/js/bm-loan-process.js', array( 'jquery', 'magnific-popup' ), '1.1.0', true);
    }
}
add_action( 'wp_enqueue_scripts', 'loan_process_scripts');
    
function lo_hide_scripts() {
    wp_enqueue_script('loHide', get_home_url() . '/wp-content/themes/make-child-lo/js/loHide.js', array(), '1.0', true);
}
add_action( 'wp_enqueue_scripts', 'lo_hide_scripts');

function fix_parallax($config) {
    $config['backgroundRatio'] = 0.3;
     
  return $config;
}
add_filter('ttfmp_parallax_js_config', 'fix_parallax');

/*
 * Modify HTTP header to add 'Access-Control-Allow-Origin'
 */
function add_header_access_control_allow_origin() {
    header('Access-Control-Allow-Origin: "https://*.benchmark.us"');    
}
add_action( 'send_headers', 'add_header_access_control_allow_origin', 1 );
/*
add_filter('ttfmp_parallax_js_config', 'your_function');

function your_function($config) {
  $config['stellarConfig'] = array(
      'verticalOffset' => 150
      'background'
  );

  return $config;
}*/

add_filter( 'is_protected_meta', '__return_false' );
