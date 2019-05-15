// help from: https://www.youtube.com/watch?v=oUSvlrDTLi4
// smooth scroll to work section
function scrolling(target,duration){
    // select element to scroll to
    var target = document.querySelector(target);
    // get position of element
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    // fucntion that defines timing of animation
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 3 * t * t + b;
        t--;
        return -c / 3 * (t * (t - 3) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var mainBtn = document.querySelector('.main-btn');
var workBtn = document.querySelector('.work-btn');
var topBtn = document.querySelector('.top-btn');
var aboutBtn = document.querySelectorAll('.about-btn');
var menuControl = document.querySelector('.open-nav');

mainBtn.addEventListener('click', function() {
    scrolling('.work', 1000);
});

workBtn.addEventListener('click', function() {
    menuControl.checked = false;
    scrolling('.work', 1000);
});

topBtn.addEventListener('click', function() {
    menuControl.checked = false;
    scrolling('.landing', 1000);
});

for (var i = 0; i < aboutBtn.length; i++) {
    aboutBtn[i].addEventListener('click', function() {
        if (menuControl.checked === true) {
            menuControl.checked = false;
        }
        scrolling('.about', 1000);
    });
}
