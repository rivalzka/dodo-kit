var dodoApp = angular.module("dodoapp", ["ngSanitize"]);


/**
 * This controller, "dataSheet", control the all user interface data
 */
dodoApp.controller('dataSheet', function($scope) {

    $scope.tabMenu = {
        name: "DODO",
        icon: {
            src: "//via.placeholder.com/50",
            alt: "dodo ikon"
        },
    };

    /* home section image paths */
    $scope.dodoBoardImageBackground = { src: "//via.placeholder.com/1080x720", alt: "dodo kart resim arkaplanı" };
    $scope.dodoBoardImage = { src: "//via.placeholder.com/1200x900", alt: "dodo kart resim" };


    /** key simulate stuff for activity page*/
    $scope.keyEvtDown = (evt) => {
        document.getElementById("iframe-game").contentWindow.document.dispatchEvent(new KeyboardEvent('keydown', { 'keyCode': evt }));
    };
    $scope.keyEvtUp = (evt) => {
        document.getElementById("iframe-game").contentWindow.document.dispatchEvent(new KeyboardEvent('keyup', { 'keyCode': evt }));
    };

    /*
    GAMES defines=
        name: name of game
        src: path of game
        controls: define gameplay keyboard keys
            -html: user interface view 
            -evt: key event code, that use in game 
    */
    $scope.games = {
        pacman: {
            name: "Pacman",
            src: "src/games/pacman/pacman.html",
            controls: [
                { html: "'BOŞLUK' : Oyunu baştan başlat", evt: 32 },
                { html: "'P' : Oyunu durdur/oynat", evt: 80 },
                { html: "<i class='far fa-arrow-alt-circle-down'></i> : Aşağı git", evt: 40 },
                { html: "<i class='far fa-arrow-alt-circle-up'></i> : Yukarı git", evt: 38 },
                { html: "<i class='far fa-arrow-alt-circle-left'></i> : Sola git", evt: 37 },
                { html: "<i class='far fa-arrow-alt-circle-right'></i> : Sağa git", evt: 39 },

            ]
        },
    };

    /*
    SECTION defines=
        id: section unique name
        name: section name in tabmenu
        header: section part name, first header in section
        desc: description of section 
        bgColor: section background color, Note: home section use background image. 
    */
    $scope.homeSection = {
        id: "page-home",
        name: "Anasayfa",
        header: "DODO",
        desc: "Minicik icat kiti ...",
        bgColor: ''
    };
    $scope.aboutSection = {
        id: "page-about",
        name: "Hakkında",
        header: "DODO Hakkında",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." + " " +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        bgColor: '#F7CE2F'
    };
    $scope.faqSection = {
        id: "page-faq",
        name: "SSS",
        header: "Sıkça Sorulan Sorular",
        desc: "",
        bgColor: '#009B99'
    };
    $scope.activitiesSection = {
        id: "page-activities",
        name: "Etkinlikler",
        header: "Etkinlikler",
        desc: "",
        bgColor: '#ff4747'

    };

    /* in list order is important for at tab menu view in user interface */
    $scope.tabMenuContent = [$scope.homeSection, $scope.aboutSection, $scope.activitiesSection, $scope.faqSection];

    /*
    ABOUT SECTION content defines=
            icon: content icon, for icons, visit https://fontawesome.com/icons?d=gallery
            title: content title, under the icon 
            text: explanatory text about the section 
    */
    $scope.aboutContents = {
        contentLearn: {
            icon: 'fas fa-graduation-cap',
            title: "DODO'yla Öğren",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." + " " +
                "Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
        },
        contentExplore: {
            icon: 'fas fa-microscope',
            title: "DODO'yla Keşfet",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." + " " +
                "Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
        },
        contentFun: {
            icon: 'fas fa-gamepad',
            title: "DODO'yla Eğlen",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." + " " +
                "Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
        },
    }

    /**
      this variable keep data of selected activity content
     */
    $scope.selectedActivityContent = {};

    /*
    activity select stuff
    */
    $scope.selectActivity = (content) => {
        $scope.resetSelectActivity();
        $scope.selectedActivityContent = content;
        $("#iframe-video").attr('src', content.video);
    };
    $scope.resetSelectActivity = () => {
        $scope.selectedActivityContent = {};
        $("#iframe-video").attr('src', "");
        $("#iframe-game").attr('src', "");
    };

    /*
    ACTIVITY SECTION content defines=
            title: content title, under the image 
            desc: description text about the activity 
            content: activity content 
                -title: content title
                -text: explanatory text about the activity  
                -video: youtube activity embed video link
                -game: game variable, it is define in games 
                -image: image for activity, 
                    -src: file path, 
                    -alt: description image
    */
    $scope.activityContents = [ // An activity contents define in '{ }' tags
        {

            title: "Etkinlik: Pacman",
            desc: "Bu içerikte pacman konsolu yapıyoruz ... ",
            content: {
                title: "Pacman",
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit" + " " +
                    "Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia" + " " +
                    "expedita beatae cupiditate,maiores repudiandae, nostrum, reiciendis facere nemo!",
                video: "https://www.youtube.com/embed/6TzRNpJdbQk",
                game: $scope.games.pacman,
                image: {
                    src: "//via.placeholder.com/1080x720",
                    alt: "etkinlik resmi"
                },
            }
        },

    ];

    $scope.faqContents = [ // A question contents define in '{ }' tags
        {
            id: "q1",
            question: "What is the meaning of life?",
            answer: "42"
        },
        {
            id: "q2",
            question: "How much wood would a woodchuck chuck?",
            answer: "A woodchuck would chuck all the wood he could chuck, if a woodchuck could chuck wood!"
        },
        {
            id: "q3",
            question: "What happens if Pinocchio says, \"my nose will grow now\"?",
            answer: "Certain questions are better left &nbsp; <a href=\"https: //en.wikipedia.org/wiki/The_Unanswered_Question\" target=\"_blank\">unanswered</a>"
        }
    ];

});