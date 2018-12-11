var carre = $('.carre');
var rond = $('.rond');
var losange = $('.losange');

$('#btRemplir').click(function () {
    carre.addClass('plein');
    rond.addClass('plein');
    losange.addClass('plein');
});

$('#btVider').click(function () {
    carre.removeClass('plein');
    rond.removeClass('plein');
    losange.removeClass('plein');
});

rond.click(function () {
    $(this).toggleClass('plein');
});

$('.carre:nth-child(1)').click(function () {
    if($('.carre:nth-child(1)').hasClass('plein')){
        $('.L1').removeClass('plein');
    }
    else {
        $('.L1').addClass('plein');
    }
});

$('.carre:nth-child(2)').click(function () {
    if($('.carre:nth-child(2)').hasClass('plein')){
        $('.L2').removeClass('plein');
    }
    else {
        $('.L2').addClass('plein');
    }
});

$('.carre:nth-child(4)').click(function () {
    if($('.carre:nth-child(4)').hasClass('plein')){
        $('.L4').removeClass('plein');
    }
    else {
        $('.L4').addClass('plein');
    }
});

$('.carre:nth-child(5)').click(function () {
    if($('.carre:nth-child(5)').hasClass('plein')){
        $('.L5').removeClass('plein');
    }
    else {
        $('.L5').addClass('plein');
    }
});

losange.click(function () {
    if(losange.hasClass('plein')){
        $('.L3, .C3').removeClass('plein');
    }
    else {
        $('.L3, .C3').addClass('plein');
    }

});