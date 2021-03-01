var myScroll;

function loaded() {
    myScroll = new IScroll("#scrolling-menu-wrapper", { scrollX: !0, scrollY: !1, tap: !0, scrollbars: !0, interactiveScrollbars: !0, mouseWheel: !0, keyBindings: !0 }), $(".level").on("tap", function(e) {
        var n = $(this).attr("disabled");
        void 0 !== n && !1 !== n && alert("Yakında gelecek" + $(e.currentTarget).attr("data")), console.info("data", $(e.currentTarget).attr("data"))
    }), myScroll.scrollToElement(document.querySelector("#scrolling-menu-wrapper li:nth-child(5)"), null, null, !0)
}

function PacmanOpen() { window.open("games/pacman/pacman.html", "_blank", "location=yes,height=650,width=600,scrollbars=yes,status=yes") }

function DodoboxOpen() { window.open("games/dodobox/index.html", "_blank", "location=yes,height=650,width=600,scrollbars=yes,status=yes") }

function DrumkitOpen() { window.open("games/drumkit/drumkit.html", "_blank", "location=yes,height=650,width=600,scrollbars=yes,status=yes") }

function RocketOpen() { window.open("games/rocket/index.html", "_blank", "location=yes,height=650,width=600,scrollbars=yes,status=yes") }

function AnimalsOpen() { window.open("games/animals/index.html", "_blank", "location=yes,height=650,width=600,scrollbars=yes,status=yes") }

function MarioOpen() { window.open("games/mario/index.html", "_blank", "location=yes,height=650,width=600,scrollbars=yes,status=yes") }
document.addEventListener("touchmove", function(e) { e.preventDefault() }, !1);
var keyList = { arrow_left: { f_up: function() {}, f_down: function() {} }, arrow_right: { f_up: function() {}, f_down: function() {} }, arrow_up: { f_up: function() {}, f_down: function() {} }, arrow_down: { f_up: function() {}, f_down: function() {} }, space: { f_up: function() {}, f_down: function() {} }, w: { f_up: function() {}, f_down: function() {} }, a: { f_up: function() {}, f_down: function() {} }, s: { f_up: function() {}, f_down: function() {} }, d: { f_up: function() {}, f_down: function() {} } };

function key_init() { console.log("key initiliaze"), keyList = { arrow_left: { f_up: void 0, f_down: void 0 }, arrow_right: { f_up: void 0, f_down: void 0 }, arrow_up: { f_up: void 0, f_down: void 0 }, arrow_down: { f_up: void 0, f_down: void 0 }, space: { f_up: void 0, f_down: void 0 }, w: { f_up: void 0, f_down: void 0 }, a: { f_up: void 0, f_down: void 0 }, s: { f_up: void 0, f_down: void 0 }, d: { f_up: void 0, f_down: void 0 }, any_key: { f_up: void 0, f_down: void 0 } } }
document.onkeydown = function(e) {
    switch (e.preventDefault(), e.keyCode ? e.keyCode : e.which) {
        case 38:
            null != keyList.arrow_up.f_down && keyList.arrow_up.f_down();
            break;
        case 37:
            null != keyList.arrow_left.f_down && keyList.arrow_left.f_down();
            break;
        case 40:
            null != keyList.arrow_down.f_down && keyList.arrow_down.f_down();
            break;
        case 39:
            null != keyList.arrow_right.f_down && keyList.arrow_right.f_down();
            break;
        case 87:
        case 119:
            null != keyList.w.f_down && keyList.w.f_down();
            break;
        case 65:
        case 97:
            null != keyList.a.f_down && keyList.a.f_down();
            break;
        case 83:
        case 115:
            null != keyList.s.f_down && keyList.s.f_down();
            break;
        case 68:
        case 100:
            null != keyList.d.f_down && keyList.d.f_down();
            break;
        case 32:
            null != keyList.space.f_down && keyList.space.f_down();
            break;
        default:
            null != keyList.any_key.f_down && keyList.any_key.f_down()
    }
}, document.onkeyup = function(e) {
    switch (e.preventDefault(), e.keyCode ? e.keyCode : e.which) {
        case 38:
            null != keyList.arrow_up.f_up && keyList.arrow_up.f_up();
            break;
        case 37:
            null != keyList.arrow_left.f_up && keyList.arrow_left.f_up();
            break;
        case 40:
            null != keyList.arrow_down.f_up && keyList.arrow_down.f_up();
            break;
        case 39:
            null != keyList.arrow_right.f_up && keyList.arrow_right.f_up();
            break;
        case 87:
        case 119:
            null != keyList.w.f_up && keyList.w.f_up();
            break;
        case 65:
        case 97:
            null != keyList.a.f_up && keyList.a.f_up();
            break;
        case 83:
        case 115:
            null != keyList.s.f_up && keyList.s.f_up();
            break;
        case 68:
        case 100:
            null != keyList.d.f_up && keyList.d.f_up();
            break;
        case 32:
            null != keyList.space.f_up && keyList.space.f_up();
            break;
        default:
            null != keyList.any_key.f_up && keyList.any_key.f_up()
    }
};