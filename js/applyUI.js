jQuery(document).ready(function () {
    var is_safari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    /*if(is_safari) {
        jQuery('#placeholder p:nth-child(2)').html('Your Application Will Open In A New Window');
    }*/
    
    /*
    //Add My Account Link for each LO on the fly
    var appURL = jQuery('#bmlo-long-app iframe.app-frame').attr('src');

    function get_hostname(url) {
        var m = url.match(/^https:\/\/[^/]+/);
        return m ? m[0] : null;
    }
    var appMyAccountLoginURL = get_hostname(appURL) + '/MyAccount/AccountLogin.aspx';
    //Add call to action and link below "Are you ready to get started? Great!" line on /apply/ page
    jQuery('#app-options').prev().find('.builder-text-content p:first-of-type').append('<center><small>If you already have an account, you can log in here: <a target="_blank" href=' + appMyAccountLoginURL + '>My Account</a>.</small><br/></center>');
    console.log('Long App and My Account host: ' + get_hostname(appURL));
    */
    
/*Detect iframe click!!!
*
*
var monitor = setInterval(function(){
    var elem = document.activeElement;
    if(elem && elem.tagName == 'IFRAME'){
        clearInterval(monitor);
        alert('clicked!');
    }
}, 100);
*
*/
    //FLOWIFY SUPPORT!
    var button = jQuery('#floify #applyNow');
    var application = jQuery('#floify iframe.floify');
    function floifyUi() {
      jQuery('#site-main').addClass('floify');
      application.hide();
      button.on('click', function() {
        application.fadeIn();
        button.fadeOut();
        __gaTracker('send', 'event', 'Apply Now', 'click', 'BMLO Apply Now btn Click');
      });
    };
    if (document.getElementById('floify')) {
        floifyUi();
    }
    //END FLOWIFY
    
    //make applications and post-message hidden    
    jQuery("#bmlo-long-app, #bmlo-short-app, #post-app").hide();
    //When long-app button is clicked
    jQuery("#bmlo-long-button").click(function () {
        /*if (is_safari) {
            jQuery('.before-app a').trigger('click');
        }
        else {*/
        //show the long-app
        jQuery("#bmlo-long-app").show("fast");
        //show the post-app message
        jQuery("#post-app").show();
        //hide the short-app button, app, the pre-app message, etc.. 
        jQuery("#bmlo-short-app, #bmlo-short-button, #bmlo-long-button, #pre-app, .cmls-container-title .builder-text-column-2, #intro-long-app, #placeholder").hide("fast");
        //make the long-app intro container 100% wide
        jQuery(".builder-text-column-1").css({
            "width": "100%"
            , "text-align": "center"
        });
        //BEGIN - add popup to instruct about Summary page on application
        var $ = jQuery;
        var container = $("#bmlo-long-app").closest("section");
        var $submitMessage = $("<div>", {
            id: "submit-message"
        }).html('<h4 style="text-align:center">IMPORTANT!</h4><p>When you get to the <b>Summary tab</b>, make sure to scroll <b>all the way down</b> to submit your application.</p><p id="popup-close" style="display:none;margin-bottom:0;text-align:center;"><span style="font-size:75%;">By clicking "I Agree", you acknowledge that you have read the above.</span><br><button style="box-shadow:0 1px 3px rgba(0, 0, 0, 0.5);padding:8px 20px;" id="message-confirm" title="I agree that I have read the above.">I Agree</button></p>').css({
            "position": "fixed"
            , "color": "#000"
            , "z-index": "3"
            , "top": "40%"
            , "right": "2.5%"
            , "margin-left": "2.5%"
            , "max-width": "401px"
            , "padding": "20px"
            , "font-size": "1.5rem"
            , "background-color": "rgba(255, 255, 255, 0.9)"
            , "border": "6px solid #062373"
            , "border-radius": "5px"
            , "box-shadow": "0 0 1px 2px cornsilk, 0 8px 30px rgba(0, 0, 0, 0.7), inset 0 0 3px rgba(0, 0, 0, 0.5)"
        , });
        //delay the popup by 5 seconds
        setTimeout(function () {
            $submitMessage.appendTo(container).fadeIn(400);
            $("#submit-message").click(function () {
                $("#popup-close").css('display', 'block');
            });
            $("#submit-message button").click(function () {
                $submitMessage.fadeOut("ease");
            });
        }, 5000);
        //END - popup 
        
        __gaTracker('send', 'event', 'Apply Now', 'click', 'BMLO Apply Now btn Click');
    });
    //end long-app click functions
    //short-app button click
    jQuery("#bmlo-short-button").click(function () {
        /*if (is_safari) {
            jQuery('.before-app a').trigger('click');
        }
        else {*/
        //change styling by adding class to short-app button
        jQuery("#bmlo-short-button").addClass("bmlo-app-button-active");
        //show post-app message
        jQuery("#bmlo-short-app").show("fast");
        jQuery("#post-app").show("slow");
        //hide the long-app, pre-app, and placeholder post-message
        jQuery("#bmlo-long-app, #pre-app, #placeholder").hide("fast");
        
        __gaTracker('send', 'event', 'Apply Now', 'click', 'BMLO Short App btn Click');
    });
    //end short-app button click
    //application checklist popup
    jQuery('#app-checklist-link').click(function () {
        window.open('../application-items-checklist.html', 'Mortgage Application Resources Checklist', 'resizable,height=762,width=813');
        return false;
    });
    //open in a new window click for short-app
    jQuery('#bmlo-short-app .before-app a').click(function () {
        var h = screen.availHeight;
        var href = jQuery(this).attr('href');
        window.open(href, 'Short Application', 'resizable,height=' + h + ',width=776');
        return false;
    });
    //open in a new wiondow click for long-app
    jQuery('#bmlo-long-app .before-app a').click(function () {
        var h = screen.availHeight;
        var href = jQuery(this).attr('href');
        window.open(href, 'Full Web Application', 'resizable, height=' + h + ', width=776');
        return false;
    });
});