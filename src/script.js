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

        //alert ('load level: ' + $(e.currentTarget).attr('data'));
    });
    $('.iScrollIndicator').css('display', 'none');

    var x = "Total Width: " + screen.width + "px";
    document.getElementById("demo").innerHTML = x;
    //  myScroll.scrollToElement(document.querySelector('#scrolling-menu-wrapper li:nth-child(1)'), null, null, true)
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);