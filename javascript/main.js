// help from: https://www.youtube.com/watch?v=oUSvlrDTLi4
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
        var run = linear(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    function linear(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

var mainBtn = document.querySelector('.main-btn');
var workBtn = document.querySelector('.work-btn');
var topBtn = document.querySelector('.top-btn');
var aboutBtn = document.querySelector('.about-btn');
var menuControl = document.querySelector('.open-nav');

mainBtn.addEventListener('click', function() {
    scrolling('#work',1000);
});

workBtn.addEventListener('click', function() {
    menuControl.checked = false;
});

topBtn.addEventListener('click', function() {
    menuControl.checked = false;
    scrolling('#landing', 1000);
});

aboutBtn.addEventListener('click', function() {
    menuControl.checked = false;
});

// Loop for multiple about buttons
// for (var i = 0; i < aboutBtn.length; i++) {
//     aboutBtn[i].addEventListener('click', function() {
//         if (menuControl.checked === true) {
//             menuControl.checked = false;
//         }
//         scrolling('.about-name', 1000);
//         console.log(distance);
//     });
// }