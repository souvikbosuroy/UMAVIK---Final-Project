    $(document).ready(function () {
        $(window).resize(function () {
            if (screen.width < 575)
                $("#banner-btn").text("Shop Now")
        })
    })

    $(document).ready(function () {
        let counter = 0;
        $(".rating-icon").click(function () {
            if (counter === 0) {
                $(this).css("color", "yellow");
                counter = 1;
            }
            else {
                $(this).css("color", "rgb(171, 171, 171)");
                counter = 0;
            }
        });
    });

    $(document).ready(function(){
        $('.user-ico').click(function(){
            $(this).toggleClass('fa-xmark');
            $('.log-in-form').fadeIn(500);
        });
        $('.close').click(function(){
            $('.log-in-form').fadeOut(500);
            $('.sign-up-form').fadeOut(500);
        });
        $('#sign-up-btn-1').click(function(){
            $('.log-in-form').fadeOut(200);
            $('.sign-up-form').fadeIn(500);
        });
        $('#sign-in-btn-2').click(function(){
            $('.log-in-form').fadeIn(200);
            $('.sign-up-form').fadeOut(200);
        });
    });

    // ================== navbar-scroll-top ==================== 

    // $(document).ready(function () {
    //     $(document).scroll(function () {
    //         var scroll = $(this).scrollTop();
    //         var topDist = $(".container").position();
    //         if (scroll > topDist.top) {
    //             $('nav').css({ "position": "fixed", "top": "0", "background-color": "transparent"});
    //         } else {
    //             $('nav').css({ "position": "static", "top": "auto", "background-color": "white" });
    //         }
    //     });
    // });
