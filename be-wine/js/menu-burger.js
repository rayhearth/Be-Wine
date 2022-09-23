$(document).ready(function() {
    $(".burger").click(function() {
        $(this).toggleClass("burger-open");
        $("nav.menu").toggleClass("is-open")
    });
    $(".menu ul li a").click(function(){
       $(".burger").removeClass("burger-open");
        $(".menu").removeClass("is-open");
    });
});