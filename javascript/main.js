// help from: https://www.youtube.com/watch?v=oUSvlrDTLi4
// function scrolling(target,duration){
//     // select element to scroll to
//     var target = document.querySelector(target);
//     // get position of element
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animation(currentTime){
//         if(startTime === null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = easeIn(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }
//     function easeIn(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 3 * t * t + b;
//         t--;
//         return -c / 3 * (t * (t - 3) - 1) + b;
//     }
//     requestAnimationFrame(animation);
// }

var mainBtn = document.querySelector('.main-btn');
var workBtn = document.querySelector('.work-btn');
var topBtn = document.querySelector('.top-btn');
var aboutBtn = document.querySelector('.about-btn');
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

aboutBtn.addEventListener('click', function() {
    scrolling('.about', 1000);
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



// alternate method of smooth scrolling
// function anchorLinkHandler(e) {
//     const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
//     e.preventDefault();
//     const targetID = this.getAttribute("href");
//     const targetAnchor = document.querySelector(targetID);
//     if (!targetAnchor) return;
//     const originalTop = distanceToTop(targetAnchor);

//     window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

//     const checkIfDone = setInterval(function() {
//         const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//         if (distanceToTop(targetAnchor) === 0 || atBottom) {
//             targetAnchor.tabIndex = "-1";
//             targetAnchor.focus();
//             window.history.pushState("", "", targetID);
//             clearInterval(checkIfDone);
//         }
//     }, 100);
// }

// const linksToAnchors = document.querySelectorAll('a[href^="#"]');

// linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));