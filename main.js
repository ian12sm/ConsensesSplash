$.backstretch('img/big-elephant.jpg');


//Parallax?
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg-white').css('top', +(scrolled) + 'px');
}
//Call paralax on scroll
$(window).scroll(function(e){
    parallax();
});