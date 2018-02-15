jQuery(window).on('load', function() {
        var addtohome = addToHomescreen({
            autostart: true,
            detectHomescreen: true
        });
        addtohome.show(true);
        if(navigator.userAgent.match('CriOS')) {
            //jQuery("body").append("<style>.ath-ios.ath-phone:after \{ left: 80% !important;}</style>");
        }
});