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
        var attr = $(this).attr('disabled');

        // For some browsers, `attr` is undefined; for others,
        // `attr` is false.  Check for both.
        if (typeof attr !== typeof undefined && attr !== false) {
            // ...
            alert('Yakında gelecek' + $(e.currentTarget).attr('data'));
        }
        console.info('data', $(e.currentTarget).attr('data'));
    });

    myScroll.scrollToElement(document.querySelector('#scrolling-menu-wrapper li:nth-child(5)'), null, null, true)
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);

function PacmanOpen() {
    window.open("games/pacman/pacman.html", '_blank', 'location=yes,height=650,width=600,scrollbars=yes,status=yes');
}

function DodoboxOpen() {
    window.open("games/dodobox/index.html", '_blank', 'location=yes,height=650,width=600,scrollbars=yes,status=yes');
}

function DrumkitOpen() {
    window.open("games/drumkit/drumkit.html", '_blank', 'location=yes,height=650,width=600,scrollbars=yes,status=yes');
}

function RocketOpen() {
    window.open("games/rocket/index.html", '_blank', 'location=yes,height=650,width=600,scrollbars=yes,status=yes');
}

function AnimalsOpen() {
    window.open("games/animals/index.html", '_blank', 'location=yes,height=650,width=600,scrollbars=yes,status=yes');
}


var keyList = {
    arrow_left: {
        f_up: function() {},
        f_down: function() {},
    },
    arrow_right: {
        f_up: function() {},
        f_down: function() {},
    },
    arrow_up: {
        f_up: function() {},
        f_down: function() {},
    },
    arrow_down: {
        f_up: function() {},
        f_down: function() {},
    },
    space: {
        f_up: function() {},
        f_down: function() {},
    },
    w: {
        f_up: function() {},
        f_down: function() {},
    },
    a: {
        f_up: function() {},
        f_down: function() {},
    },
    s: {
        f_up: function() {},
        f_down: function() {},
    },
    d: {
        f_up: function() {},
        f_down: function() {},
    },
};

function key_init() {
    console.log("key initiliaze");
    keyList = {
        arrow_left: {
            f_up: undefined,
            f_down: undefined,
        },
        arrow_right: {
            f_up: undefined,
            f_down: undefined,
        },
        arrow_up: {
            f_up: undefined,
            f_down: undefined,
        },
        arrow_down: {
            f_up: undefined,
            f_down: undefined,
        },
        space: {
            f_up: undefined,
            f_down: undefined,
        },
        w: {
            f_up: undefined,
            f_down: undefined,
        },
        a: {
            f_up: undefined,
            f_down: undefined,
        },
        s: {
            f_up: undefined,
            f_down: undefined,
        },
        d: {
            f_up: undefined,
            f_down: undefined,
        },
        any_key: {
            f_up: undefined,
            f_down: undefined,
        },

    };
}

window.onkeydown = function(e) {
    e.preventDefault();
    var key = e.keyCode ? e.keyCode : e.which;
    switch (key) {
        case 38:
            if (keyList.arrow_up.f_down != undefined) {
                keyList.arrow_up.f_down();
            }
            break;

        case 37:
            if (keyList.arrow_left.f_down != undefined) {
                keyList.arrow_left.f_down();
            }
            break;
        case 40:
            if (keyList.arrow_down.f_down != undefined) {
                keyList.arrow_down.f_down();
            }
            break;
        case 39:
            if (keyList.arrow_right.f_down != undefined) {
                keyList.arrow_right.f_down();
            }
            break;

        case 87:
            if (keyList.w.f_down != undefined) {
                keyList.w.f_down();
            }
            break;
        case 119:
            if (keyList.w.f_down != undefined) {
                keyList.w.f_down();
            }
            break;
        case 65:
            if (keyList.a.f_down != undefined) {
                keyList.a.f_down();
            }
            break;
        case 97:
            if (keyList.a.f_down != undefined) {
                keyList.a.f_down();
            }
            break;
        case 83:
            if (keyList.s.f_down != undefined) {
                keyList.s.f_down();
            }
            break;
        case 115:
            if (keyList.s.f_down != undefined) {
                keyList.s.f_down();
            }
            break;
        case 68:
            if (keyList.d.f_down != undefined) {
                keyList.d.f_down();
            }
            break;
        case 100:
            if (keyList.d.f_down != undefined) {
                keyList.d.f_down();
            }
            break;
        case 32:
            if (keyList.space.f_down != undefined) {
                keyList.space.f_down();
            }
            break;
        default:
            if (keyList.any_key.f_down != undefined) {
                keyList.any_key.f_down();
            }
    }
}
window.onkeyup = function(e) {
    e.preventDefault();
    var key = e.keyCode ? e.keyCode : e.which;
    switch (key) {
        case 38:
            if (keyList.arrow_up.f_up != undefined) {
                keyList.arrow_up.f_up();
            }
            break;

        case 37:
            if (keyList.arrow_left.f_up != undefined) {
                keyList.arrow_left.f_up();
            }
            break;
        case 40:
            if (keyList.arrow_down.f_up != undefined) {
                keyList.arrow_down.f_up();
            }
            break;
        case 39:
            if (keyList.arrow_right.f_up != undefined) {
                keyList.arrow_right.f_up();
            }
            break;

        case 87:
            if (keyList.w.f_up != undefined) {
                keyList.w.f_up();
            }
            break;
        case 119:
            if (keyList.w.f_up != undefined) {
                keyList.w.f_up();
            }
            break;
        case 65:
            if (keyList.a.f_up != undefined) {
                keyList.a.f_up();
            }
            break;
        case 97:
            if (keyList.a.f_up != undefined) {
                keyList.a.f_up();
            }
            break;
        case 83:
            if (keyList.s.f_up != undefined) {
                keyList.s.f_up();
            }
            break;
        case 115:
            if (keyList.s.f_up != undefined) {
                keyList.s.f_up();
            }
            break;
        case 68:
            if (keyList.d.f_up != undefined) {
                keyList.d.f_up();
            }
            break;
        case 100:
            if (keyList.d.f_up != undefined) {
                keyList.d.f_up();
            }
            break;
        case 32:
            if (keyList.space.f_up != undefined) {
                keyList.space.f_up();
            }
            break;
        default:
            if (keyList.any_key.f_up != undefined) {
                keyList.any_key.f_up();
            }
    }
}