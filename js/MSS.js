
$(function() {

    $(window).scroll(function() {

if ( $(this).scrollTop() > 100 ) {
    $('.navbar').addClass('solid bg-dark');

} else {
    $('.navbar').removeClass('solid bg-dark'); 

 }
 
    });



