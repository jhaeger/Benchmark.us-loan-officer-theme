jQuery('document').ready(function () {
    const $ = jQuery;
    var purchaseBtn = $("#purchaseBtn");
    var refinanceBtn = $("#refinanceBtn");
    var applyHere = $("#applyHere");
    var purchaseSurvey = $("#purchaseSurvey");
    var refinanceSurvey = $("#refinanceSurvey");
    //functions
    let purchase = function () {
        applyHere.hide();
        purchaseSurvey.fadeIn()
    };
    let refinance = function () {
        applyHere.hide();
        refinanceSurvey.fadeIn()
    };
    //event listeners
    purchaseBtn.on('click', function () {
        purchase();
    });
    refinanceBtn.on('click', function () {
        refinance();
    });
});