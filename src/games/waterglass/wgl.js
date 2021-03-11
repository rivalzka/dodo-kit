var levels = [false, false, false, false];
var levels1 = ["40vmin", "25vmin", "12.5vmin", "2vmin"];
var levels3 = ["20.5vmin", "5.5vmin", "-7vmin", "-19.5vmin"];
var levels4 = ["50vmin", "35vmin", "22.5vmin", "12vmin"];

var drops = ["drops1", "drops2", "drops3"];

function init() {
    levels = [false, false, false, false];
    setLevel(0);
    for (var i = 0; i < 3; i++) {
        var dropItem = document.getElementsByClassName(drops[i])[0];
        if (dropItem.classList.contains('dropsanim')) {
            dropItem.classList.remove('dropsanim');
        }
    }
}

key_init();
keyList.w.f_down = () => {
    if (!levels[0]) {
        init();
        levels[0] = true;
    }
}
keyList.w.f_up = () => {
    init();
}
keyList.a.f_down = () => {
    if (!levels[1]) {
        setLevel(1);
        levels[1] = true;
    }
}
keyList.s.f_down = () => {
    if (!levels[2]) {
        setLevel(2);
        levels[2] = true;
    }

}
keyList.d.f_down = () => {
    if (!levels[3]) {
        setLevel(3);
        levels[3] = true;
    }

}
keyList.a.f_up = () => {
    levels[1] = false;
    setLevel(0);
}
keyList.s.f_up = () => {
    levels[2] = false;
    setLevel(1);

}
keyList.d.f_up = () => {
    levels[3] = false;
    setLevel(2);

}

function setLevel(level) {

    drop(level);
    document.getElementsByClassName("water")[0].style.top = levels1[level];
    document.getElementsByClassName("water2")[0].style.top = levels1[level];
    document.getElementsByClassName("water3")[0].style.top = levels3[level];
    document.getElementsByClassName("water4")[0].style.top = levels4[level];
}

function draw() {
    var draw = null;
    for (var i = 1; i < 4; i++) {
        if (!levels[i]) {
            setLevel(i - 1);
            draw = true;
            break;
        }
    }
    if (!draw) {
        setLevel(3);
    }
}

function drop(level) {
    if (level == 0) return;
    var dropItem = document.getElementsByClassName(drops[level - 1])[0];
    dropItem.classList.add('dropsanim');
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf('' + className + '') > -1;
}