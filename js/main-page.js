$(document).ready(function(){
    popup();
    popup_2();
});
$( window ).resize(function() {
    popup();
    popup_2();
});
function popup(){
    var pageHeight = $(window).height();
    var heigthOfPopup = $('.popup .popup-text').height() + 20;
    var marginFromTop = ( pageHeight - heigthOfPopup ) / 2;
    $('.popup .popup-text').css('marginTop',marginFromTop);
}
function popup_2(){
    var pageHeight = $(window).height();
    var heigthOfPopup = $('.popup-2 .popup-text-2').height() + 20;
    var marginFromTop = ( pageHeight - heigthOfPopup ) / 2;
    $('.popup-2 .popup-text-2').css('marginTop',marginFromTop);
};