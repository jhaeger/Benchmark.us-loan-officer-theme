jQuery(window).on('resize', function() {
    if (jQuery(window).width() <= 799) {
        jQuery('.header-social-links').appendTo('#lo-big-container .builder-text-column-1').css({'margin':'auto','color':'#fff','display':'block'});
    } else if (jQuery(window).width() > 799) {
        jQuery('.header-social-links').prependTo('div.header-bar.right-content .container').css('');
    }
}).resize();
