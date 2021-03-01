var game = {
    set_flame: function(val) {
        if (val) {
            flame.classList.add("exhaust-anim");
        } else {
            flame.classList.remove("exhaust-anim");
        }

    },

    set_fumes: function(val) {
        if (val) {
            fumes.classList.remove("hide");
        } else {
            fumes.classList.add("hide");
        }
    },

    set_engine: function(val) {
        if (val) {
            play_rocketsound();
            rocketbody.classList.add("body-anim");
        } else {
            paused_rocketsound();
            rocketbody.classList.remove("body-anim");
        }
    },

    set_star: function(val) {
        if (val) {
            star1.classList.remove("paused");
            star2.classList.remove("paused");
            star3.classList.remove("paused");
            document.getElementById("rocket-body").classList.remove("pausedbody");
            document.getElementById("rocket-body").classList.add("resumedbody");
            // resumedbody
        } else {
            star1.classList.add("paused");
            star2.classList.add("paused");
            star3.classList.add("paused");
            document.getElementById("rocket-body").classList.add("pausedbody");
            document.getElementById("rocket-body").classList.remove("resumedbody");
        }
    },

    set_info: function(val) {
        // countdown.innerHTML = val;
    },

    set_window: function(val) {
        if (val) {
            windowss.classList.add("bgyellow");
        } else {
            windowss.classList.remove("bgyellow");
        }
    },

};

var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var sky = document.getElementById("sky");
var flame = document.getElementById("exhaust-flame");
var fumes = document.getElementById("exhaust-fumes");
var rocketbody = document.getElementById("rocket-body");
var windowss = document.getElementById("windowss");
var rocketsound = document.getElementById('rocketsound');
var interval_sound = undefined;

function play_rocketsound() {
    paused_rocketsound();
    rocketsound.currentTime = 0;
    rocketsound.volume = 0;
    rocketsound.play();

    if (interval_sound != undefined) {
        clearInterval(interval_sound);
        sound_count = 10;
    }
    interval_sound = setInterval(function() {
        if (rocketsound.volume == 1) {
            clearInterval(interval_sound);
        }
        if (rocketsound.volume + 0.075 <= 1) rocketsound.volume = rocketsound.volume + 0.075;
    }, 100);
}

function paused_rocketsound() {
    if (interval_sound != undefined) {
        clearInterval(interval_sound);
        sound_count = 10;
    }
    interval_sound = setInterval(function() {
        if (rocketsound.volume <= 0.075) {
            rocketsound.pause();
            clearInterval(interval_sound);
        }
        if (rocketsound.volume - 0.1 >= 0)
            rocketsound.volume = rocketsound.volume - 0.1;
    }, 100);
}

var is_deperture = false;
var is_colored = false;

key_init();
keyList.arrow_up.f_down = function() {
    if (is_deperture) return;
    is_deperture = true;
    game.set_flame(true);
    game.set_fumes(true);
    game.set_star(true);
    game.set_engine(true);
    console.log("key down");
}
keyList.arrow_up.f_up = function() {
    is_deperture = false;
    game.set_flame(false);
    game.set_fumes(false);
    game.set_star(false);
    game.set_engine(false);
}
keyList.space.f_down = function() {
    if (is_colored) return;
    is_colored = true;
    game.set_window(true);
}
keyList.space.f_up = function() {
    is_colored = false;
    game.set_window(false);
}