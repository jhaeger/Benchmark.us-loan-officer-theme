jQuery(document).ready( function () { 
    // remove corporate-only content bsed on the category "corporate" designation
    jQuery(".format-corporate, .category-corporate, .loHide").remove(); 
    
    // automatically create phone number button if present in top header bar
    var callLink = jQuery('#menu-top-bar-menu li:last-of-type a[href*="tel:"]').attr('href');
    
    //turn the header bar link white
    jQuery('#menu-top-bar-menu li:last-of-type a[href*="tel:"]').css("color", "#fff");
    
    //add <a> tag and href="tel:" attribute to .call-me class elements. Very useful for blog posts with calls to action.
    if(jQuery('#menu-top-bar-menu li:last-of-type a[href*="tel:"]')) {
        jQuery('.call-me').contents().prepend("<i class='fa fa-phone-square' aria-hidden='true'></i> ").wrap("<a href=" + callLink + "/>");
    };   
    
    //move social links to below headshot when on mobile, and move back when not on mobile view
    jQuery(window).on('resize', function() {
    if (jQuery(window).width() <= 799) {
        jQuery('.home .header-social-links').appendTo('.home #lo-big-container .builder-text-column-1').css({'margin':'auto','color':'#fff','display':'block'});
    } else if (jQuery(window).width() > 799) {
        jQuery('.home .header-social-links').prependTo('.home div.header-bar.right-content .container').css('');
    }
        
    //update year text with current year
    var currentYear = (new Date).getFullYear();
    jQuery('.currentYear').text(currentYear);
        
    //set height of testimonials slider on LO site home page    
    var height = jQuery('#welcome-testimonials .builder-banner-inner-content').height() + 72 + jQuery('#welcome-testimonials .builder-banner-section-title').height() + 33;
    jQuery('#welcome-testimonials').height(height);
    jQuery('#welcome-testimonials .builder-banner-slide-active').css('padding-bottom', height );
    }).resize();
    
    // remove extra duplicate addthis bar on posts
    //jQuery(".addthis_toolbox").eq(1).remove();
});