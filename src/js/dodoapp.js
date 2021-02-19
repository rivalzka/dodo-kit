var dodoApp = angular.module("dodoapp", []);

dodoApp.controller('generalData', function($scope) {

    $scope.tabMenu = {
        name: "DODO",
        icon: {
            src: "//via.placeholder.com/50",
            alt: "dodo ikon"
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
    $scope.sssSection = {
        id: "page-sss",
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

    /* home section image paths */
    $scope.dodoBoardImageBackground1080x720 = { src: "//via.placeholder.com/1080x720", alt: "dodo kart resim arkaplanı" };
    $scope.dodoBoardImage300x300 = { src: "//via.placeholder.com/300x300", alt: "dodo kart resim" };

    /* in list order is important for at tab menu view in user interface */
    $scope.tabMenuContent = [$scope.homeSection, $scope.aboutSection, $scope.activitiesSection, $scope.sssSection];

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


});