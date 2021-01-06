var myScroll;

function loaded() {
    myScroll = new IScroll('#scrolling-menu-wrapper', {
        scrollX: true,
        scrollY: false,
        tap: true,
        scrollbars: true,
        interactiveScrollbars: true,
        mouseWheel: true,
        keyBindings: true
    });

    $('.level').on('tap', function(e) {
        console.info('data', $(e.currentTarget).attr('data'));

        alert('load level: ' + $(e.currentTarget).attr('data'));
    });

    myScroll.scrollToElement(document.querySelector('#scrolling-menu-wrapper li:nth-child(5)'), null, null, true)
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);

function PacmanOpen() {
    window.open("games/pacman/index.html", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}