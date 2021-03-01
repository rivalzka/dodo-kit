$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

const items = document.querySelectorAll(".accordion-item button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

function keyEvt2(element, evt) {
    var event; // The custom event that will be created
    var element = document.getElementById(element);
    if (document.createEvent) {
        event = document.createEvent("HTMLEvents");
        event.initEvent(evt, true, true);
        event.eventName = evt;
        element.dispatchEvent(event);
    } else {
        event = document.createEventObject();
        event.eventName = evt;
        event.eventType = evt;
        element.fireEvent("on" + event.eventType, event);
    }
}


// document.addEventListener("touchmove", function(e) { e.preventDefault() }, !1);