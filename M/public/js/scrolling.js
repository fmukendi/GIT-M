
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });
    
    
    $("#video-wallpaper").wallpaper({
        source: {
            poster: "../images/lake-dark.jpg",
            video: "//www.youtube.com/embed/wl3PlrPq8sw"
        }
    });
    
    $("#video-wallpaper-Church").wallpaper({
        source: {
            poster: "../images/ChurchMainPic1.jpg"
            //,video: "//www.youtube.com/embed/t7F-B2DLvAQ"
        }
    });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    // smooth scrolling
    $('#aHome').bind('click', function () {
        
        var me = this;

        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#aTop').bind('click', function () {
        
        var me = this;
        
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    

    $('#aDownArrow').bind('click', function () {
        
        var me = this;
        
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#aServices').bind('click', function () {
        
        var me = this;
        
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#aSee').bind('click', function () {
        
        var me = this;
        
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - (-245)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#aHelp').bind('click', function () {
        
        var me = this;
        
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#aContact').bind('click', function () {
        
        var me = this;
        
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#aGallery').bind('click', function () {
        
        var me = this;
        
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    

    // initialize WOW for element animation
    new WOW().init();

    // initialize NanoGallery
    $(document).ready(function () {
        $("#Gallery").nanoGallery();
    });

});