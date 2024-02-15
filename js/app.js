$(document).ready(function () {
    AOS.init();
    // new WOW().init();
})


//maen aos
$("section p, .golongan .img").attr({ "data-aos": "fade-up", "data-aos-delay": "100", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })
$("section h3").attr({ "data-aos": "zoom-in", "data-aos-delay": "100", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" });

$(".siapa .org").attr({ "data-aos": "fade-left", "data-aos-delay": "100", "data-aos-duration": "700", "data-aos-offset": "10", "data-aos-easing": "linear" });