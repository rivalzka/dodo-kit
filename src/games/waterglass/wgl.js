var levels = [false, false, false, false];
var levels1 = ["400px", "250px", "125px", "25px"];
var levels4 = ["500px", "350px", "225px", "125px"];
var levels3 = ["205px", "55px", "-70px", "-170px"];

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
    init();
}
keyList.a.f_down = () => {
    setLevel(1);
}
keyList.s.f_down = () => {
    setLevel(2);
}
keyList.d.f_down = () => {
    setLevel(3);
}

function setLevel(level) {
    if (levels[level]) return;
    drop(level);
    levels[level] = true;
    document.getElementsByClassName("water")[0].style.top = levels1[level];
    document.getElementsByClassName("water2")[0].style.top = levels1[level];
    document.getElementsByClassName("water3")[0].style.top = levels3[level];
    document.getElementsByClassName("water4")[0].style.top = levels4[level];
}

function drop(level) {
    if (level == 0) return;
    var dropItem = document.getElementsByClassName(drops[level - 1])[0];
    dropItem.classList.add('dropsanim');
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf('' + className + '') > -1;
}