 jQuery(document).ready(function () {
     
     jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 200,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
         enableEscapeKey: true,
          fixedContentPos: false
        });

	jQuery('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        showCloseBtn: true,
        enableEscapeKey: true
    });
     
     jQuery('.apply-popup').magnificPopup({
        type:'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        showCloseBtn: true,
        enableEscapeKey: true
    });
    
//programming for Loan Process content sections below//
     jQuery('#see-all').click(function() {
         jQuery('.see-all-container, #questions, #lp-intro-copy').addClass('closed');
         jQuery('#restart, .process-container').removeClass('closed');
     });
     
     jQuery('#refi').click(function () {
         jQuery('#buy-or-refi').addClass('closed');
         jQuery('#three, #four, #five, #two, #six, #one').addClass('closed');
         jQuery('#three, #four, #five, #six').removeClass('process-container');
         jQuery('#two-a, #six-a, #one-a').removeClass('closed');
         jQuery('#loanofficer-y-n, #restart').removeClass('closed');
     });

     
     jQuery('#lo-y').click(function () {
         jQuery('#loanofficer-y-n').addClass('closed');
         jQuery('#lo').addClass('closed');
         jQuery('#lo').removeClass('process-container');
         jQuery('#preapproved-y-n').removeClass('closed');
     });
     jQuery('#lo-n').click(function () {
         jQuery('#loanofficer-y-n, .see-all-container, #lp-intro-copy').addClass('closed');
         jQuery('.process-container, #lo, #results').removeClass('closed');
     });

     jQuery('#buy').click(function () {
         jQuery('#buy-or-refi').addClass('closed');
         jQuery('#realtor-y-n, #restart').removeClass('closed');
     });

     
     jQuery('#realtor-y, #realtor-na').click(function () { 
         jQuery('#realtor-y-n').addClass('closed');
         jQuery('#home-y-n').removeClass('closed');
         jQuery('#three').addClass('closed');
         jQuery('#three').removeClass('process-container');
         jQuery('#four').css({'background': 'linear-gradient(#bbb, #777)'});
     });
     jQuery('#realtor-n').click(function () { 
         jQuery('#realtor-y-n').addClass('closed');
         jQuery('#home-y-n').removeClass('closed');
     });
     
     jQuery('#home-y').click(function () {
         jQuery('#four').addClass('closed');
         jQuery('#four').removeClass('process-container');
         jQuery('#home-y-n').addClass('closed');
         jQuery('#preapproved-y-n').removeClass('closed');
     });
     jQuery('#home-n').click(function () {
         jQuery('#home-y-n').addClass('closed');
         jQuery('#preapproved-y-n').removeClass('closed');
     });

     
     jQuery('#preapproved-y').click(function () { 
         jQuery('#preapproved-y-n').addClass('closed');
         jQuery('#two, #one, #two-a, #lo, .see-all-container, #lp-intro-copy').addClass('closed');
         jQuery('#get-preapproved, #lo').removeClass('process-container');
         jQuery('.process-container, #results').removeClass('closed');
     });
     jQuery('#preapproved-n').click(function () { 
         jQuery('#preapproved-y-n, .see-all-container, #lp-intro-copy').addClass('closed');
         jQuery('.process-container, #results').removeClass('closed');
     });
     

     jQuery('#restart').click(function() {window.location.reload(false);
     });
         

     jQuery("#down").click(function() {
         jQuery('html, body').animate({
             scrollTop: jQuery("#down").offset().top
         }, 500);
     });

 });