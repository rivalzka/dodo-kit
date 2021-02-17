    /* <!-- author: rivalzka --> */
    function pause() {

    }
    $(document).ready(function() {
        window.location = "#dodo-home";

        $('#close-video').on("click", function(e) {
            pause();
        });


        // $('.head-logo').on("click", function(e) {
        //     HiderAll();
        //     if ($(".main-home").hasClass("hider")) {
        //         $(".main-home").removeClass("hider");
        //     }
        //     scrTop()
        // });
        // $('.go-less-1').on("click", function(e) {
        //     HiderAll();
        //     if ($(".main-capture").hasClass("hider")) {
        //         $(".main-capture").removeClass("hider");
        //     }
        //     scrTop()
        // });

        // $('.capture-close').on("click", function(e) {
        //     HiderAll();
        //     if ($(".main-learn").hasClass("hider")) {
        //         $(".main-learn").removeClass("hider");
        //     }
        //     scrTop()
        // });

        // $('#mh-play').on("click", function(e) {
        //     HiderAll();
        //     if ($(".main-play").hasClass("hider")) {
        //         $(".main-play").removeClass("hider");
        //     }
        // });

        // $('#mh-info').on("click", function(e) {
        //     HiderAll();
        //     if ($(".main-info").hasClass("hider")) {
        //         $(".main-info").removeClass("hider");
        //     }
        // });
        // $('.head-logo').click();
    });



    function HiderAll() {
        Hider($('.main-home'));
        Hider($('.main-learn'));
        Hider($('.main-capture'));
        Hider($('.main-info'));
    }

    function Hider(el) {
        if (!el.hasClass("hider")) el.addClass("hider");
    }

    function scrTop() {
        var time = 1;
        $('.main').animate({ scrollTop: 0 }, time);
    }