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
    $('.L1').toggleClass('plein');
});

$('.carre:nth-child(2)').click(function () {
    $('.L2').toggleClass('plein');
});

$('.carre:nth-child(3)').click(function () {
    $('.L3').toggleClass('plein');
});

$('.carre:nth-child(4)').click(function () {
    $('.L4').toggleClass('plein');
});

$('.carre:nth-child(5)').click(function () {
    $('.L5').toggleClass('plein');
});

losange.click(function () {
    $('.L3, .C3').toggleClass('plein');
});