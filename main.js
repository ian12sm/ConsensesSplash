$.backstretch('img/big-elephant.jpg');


//Parallax?
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg-white').css('top', -(scrolled) + 800 + 'px');
}
//Call paralax on scroll
$(window).scroll(function(e){
    parallax();
});