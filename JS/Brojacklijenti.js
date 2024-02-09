
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function startBrojac() {
    var countElement1 = document.getElementById("counter");
    var countElement2 = document.getElementById("brojac");
     var count1 = 0;
    var count2 = 0;

    var brojacInterval1 = setInterval(function() {
        count1++;
        countElement1.textContent = count1;
            if (count1 === 20) {
            clearInterval(brojacInterval1);
        }
    }, 100);

    var brojacInterval2 = setInterval(function() {
            count2++;
        countElement2.textContent = count2;
            if (count2 === 50) {
            clearInterval(brojacInterval2);
        }
    }, 100);
}

function handleScroll() {
    var counterElement = document.getElementById("counter");
    var brojacElement = document.getElementById("brojac");

    if (isInViewport(counterElement) && isInViewport(brojacElement)) {
            startBrojac();
        window.removeEventListener('scroll', handleScroll);
    }
}
window.addEventListener('scroll', handleScroll);
