var dodoApp = angular.module("dodoapp", ["ngSanitize"]);


/**
 * This controller, "dataSheet", control the all user interface data
 */
dodoApp.controller('dataSheet', function($scope) {

    $scope.initDodo = () => {
        //     let root = document.documentElement;
        //     root.style.setProperty('--intro-bg-img', "url(" + $scope.dodoBoardImageBackground.src + ")");
        //     console.log(root);
    }

    /*
    TOP MENU: 
        name: name of site
        icon: icon of site
            -src: icon file path
            -alt: icon description
    */
    $scope.tabMenu = {
        name: "DODO",
        icon: {
            src: "//via.placeholder.com/50",
            alt: "dodo ikon"
        },
    };

    /* home section image paths */
    /**https://tr.pinterest.com/pin/822821794398992113/ arkaplan  */
    $scope.dodoBoardImageBackground = { src: "../assets/img/arkaplan2.jpg", alt: "dodo kart resim arkaplanı" };
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
        dodobox: {
            name: "Dodo Box",
            src: "src/games/dodobox/index.html",
            controls: [
                { html: "'BOŞLUK' : Oyunu başlat", evt: 32 },
                { html: "<i class='far fa-arrow-alt-circle-down'></i> : Aşağı Oklu Kutuyu Seç", evt: 40 },
                { html: "<i class='far fa-arrow-alt-circle-up'></i> : Yukarı Oklu Kutuyu Seç", evt: 38 },
                { html: "<i class='far fa-arrow-alt-circle-left'></i> : Sol Oklu Kutuyu Seç", evt: 37 },
                { html: "<i class='far fa-arrow-alt-circle-right'></i> : Sağ Oklu Kutuyu Seç", evt: 39 },

            ]
        },
        rocket: {
            name: "Rocket",
            src: "src/games/rocket/index.html",
            controls: [
                { html: "'BOŞLUK' : Işığı yak", evt: 32 },
                { html: "<i class='far fa-arrow-alt-circle-up'></i> : İlerle", evt: 38 },

            ]
        },
        mario: {
            name: "Mario",
            src: "src/games/mario/index.html",
            controls: [
                { html: "<i class='far fa-arrow-alt-circle-right'></i> : İlerle", evt: 39 },
                { html: "<i class='far fa-arrow-alt-circle-left'></i> : Geri gel", evt: 37 },
                { html: "<i class='far fa-arrow-alt-circle-up'></i> : Zıpla", evt: 38 },
                { html: "<i class='far fa-arrow-alt-circle-down'></i> : Eğil", evt: 40 },
                { html: "'F' : Hızlan", evt: 70 },
                { html: "'G' : Ateş Et", evt: 71 },
            ]
        },
        animals: {
            name: "Hayvanlar Alemi",
            src: "src/games/animals/index.html",
            controls: [
                { html: "<i class='far fa-arrow-alt-circle-down'></i> : Kedi", evt: 40 },
                { html: "<i class='far fa-arrow-alt-circle-up'></i> : Köpek", evt: 38 },
                { html: "<i class='far fa-arrow-alt-circle-right'></i> : Kurbağa", evt: 39 },
                { html: "<i class='far fa-arrow-alt-circle-left'></i> : Kuş", evt: 37 },
            ]
        },
        drumkit: {
            name: "Bateri",
            src: "src/games/drumkit/index.html",
            controls: [
                { html: "'A' : Crash", evt: 65 },
                { html: "<i class='far fa-arrow-alt-circle-left'></i> : Bass Tom", evt: 37 },
                { html: "<i class='far fa-arrow-alt-circle-up'></i> : Sol Tom", evt: 38 },
                { html: "'S' : Göbek Davul", evt: 83 },
                { html: "<i class='far fa-arrow-alt-circle-down'></i> : Sağ Tom", evt: 40 },
                { html: "'D' : Hi-hat", evt: 68 },
                { html: "<i class='far fa-arrow-alt-circle-right'></i> : Trampet", evt: 39 },
            ]
        },
        turkeymap: {
            name: "Türkiye Bölgeler",
            src: "src/games/turkey/index.html",
            controls: [
                { html: "'W' : Karadeniz Bölgesi", evt: 87 },
                { html: "'A' : Marmara Bölgesi", evt: 65 },
                { html: "'S' : Ege Bölgesi", evt: 83 },
                { html: "'D' : Akdeniz Bölgesi", evt: 68 },
                { html: "'F' : Güneydoğu Anadolu Bölgesi", evt: 70 },
                { html: "'G' : Doğu Anadolu Bölgesi", evt: 71 },
                { html: "'BOSLUK' : İç Anadolu Bölgesi", evt: 32 },
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
        bgColor: '#333'
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
        $("#iframe-game").attr('src', $scope.selectedActivityContent.game.src);
        $("#iframe-video").attr('src', $scope.selectedActivityContent.video);
    };
    $scope.resetSelectActivity = () => {
        $scope.selectedActivityContent = {};
        $("#iframe-video").attr('src', "");
        $("#iframe-game").attr('src', "");
    };
    $scope.video = () => {
        // document.getElementById('#iframe-video').src = $scope.selectedActivityContent.video;
        // $("#iframe-video").attr('src', $scope.selectedActivityContent.video);
    }
    $scope.game = () => {
        // document.getElementById('#iframe-game').src = $scope.selectedActivityContent.game.src;
        // $("#iframe-game").attr('src', $scope.selectedActivityContent.game.src);
        // console.log("game change")
    }

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
            //Activity 
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
        {
            //Activity 
            title: "Etkinlik: Dodo Kutuları",
            desc: "Bu içerikte Dodo Kutuları'nı yakalıyoruz ... ",
            content: {
                title: "Dodo Kutuları",
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit" + " " +
                    "Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia" + " " +
                    "expedita beatae cupiditate,maiores repudiandae, nostrum, reiciendis facere nemo!",
                video: "https://www.youtube.com/embed/6TzRNpJdbQk",
                game: $scope.games.dodobox,
                image: {
                    src: "//via.placeholder.com/1080x720",
                    alt: "etkinlik resmi"
                },
            }
        },
        {
            //Activity 
            title: "Etkinlik: Roket Fırlatıyoruz",
            desc: "Bu içerikte  ... ",
            content: {
                title: "Roket",
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit" + " " +
                    "Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia" + " " +
                    "expedita beatae cupiditate,maiores repudiandae, nostrum, reiciendis facere nemo!",
                video: "https://www.youtube.com/embed/6TzRNpJdbQk",
                game: $scope.games.rocket,
                image: {
                    src: "//via.placeholder.com/1080x720",
                    alt: "etkinlik resmi"
                },
            }
        },
        {
            //Activity 
            title: "Etkinlik: Mario",
            desc: "Bu içerikte  ... ",
            content: {
                title: "Mario",
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit" + " " +
                    "Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia" + " " +
                    "expedita beatae cupiditate,maiores repudiandae, nostrum, reiciendis facere nemo!",
                video: "https://www.youtube.com/embed/6TzRNpJdbQk",
                game: $scope.games.mario,
                image: {
                    src: "//via.placeholder.com/1080x720",
                    alt: "etkinlik resmi"
                },
            }
        },
        {
            //Activity 
            title: "Etkinlik: Bateri Çal",
            desc: "Bu içerikte  ... ",
            content: {
                title: "Bateri Çal",
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit" + " " +
                    "Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia" + " " +
                    "expedita beatae cupiditate,maiores repudiandae, nostrum, reiciendis facere nemo!",
                video: "https://www.youtube.com/embed/6TzRNpJdbQk",
                game: $scope.games.drumkit,
                image: {
                    src: "//via.placeholder.com/1080x720",
                    alt: "etkinlik resmi"
                },
            }
        },
        {
            //Activity 
            title: "Etkinlik: Hayvanlar Alemi",
            desc: "Bu içerikte   ... ",
            content: {
                title: "Hayvanlar Alemi",
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit" + " " +
                    "Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia" + " " +
                    "expedita beatae cupiditate,maiores repudiandae, nostrum, reiciendis facere nemo!",
                video: "https://www.youtube.com/embed/6TzRNpJdbQk",
                game: $scope.games.animals,
                image: {
                    src: "//via.placeholder.com/1080x720",
                    alt: "etkinlik resmi"
                },
            }
        },
        {
            //Activity 
            title: "Etkinlik: Türkiye Bölgeleri",
            desc: "Bu içerikte  ... ",
            content: {
                title: "Türkiye Bölgeler",
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit" + " " +
                    "Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia" + " " +
                    "expedita beatae cupiditate,maiores repudiandae, nostrum, reiciendis facere nemo!",
                video: "https://www.youtube.com/embed/6TzRNpJdbQk",
                game: $scope.games.turkeymap,
                image: {
                    src: "//via.placeholder.com/1080x720",
                    alt: "etkinlik resmi"
                },
            }
        },

    ];

    /*
    F.A.Q. SECTION content defines=
            id: question unique name
            question: question text, should be string
            answer: answer of question,  could be html format for an external links
                - &nbsp; : html space unicode char
    */
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
            answer: "Certain questions are better left &nbsp;<a href=\"https: //en.wikipedia.org/wiki/The_Unanswered_Question\" target=\"_blank\">unanswered</a>."
        }
    ];

});