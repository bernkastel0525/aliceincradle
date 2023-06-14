
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})


function increment1(max, id) {
    setTimeout(function () {
        var sum = 0;
        var interval = setInterval(function () {
            sum++;
            document.getElementById(id).textContent = sum;
            if (sum >= max) {
                clearInterval(interval);
            }
        }, 420);
    }, 8000);
}

function increment2(max, id) {
    setTimeout(function () {
        var sum = 0;
        var interval = setInterval(function () {
            sum++;
            document.getElementById(id).textContent = sum;
            if (sum >= max) {
                clearInterval(interval);
            }
        }, 600);
    }, 8000);
}
function increment3(max, id) {
    setTimeout(function () {
        var sum = 0;
        var interval = setInterval(function () {
            sum++;
            document.getElementById(id).textContent = sum;
            if (sum >= max) {
                clearInterval(interval);
            }
        }, 100);
    }, 8000);
}
function increment4(max, id) {
    setTimeout(function () {
        var sum = 0;
        var interval = setInterval(function () {
            sum++;
            document.getElementById(id).textContent = sum;
            if (sum >= max) {
                clearInterval(interval);
            }
        }, 400);
    }, 8000);
}

window.addEventListener('scroll', function () {
    const banner2 = document.querySelector('.banner2');
    const scrollPosition = window.scrollY;
    banner2.style.transform = `translateY(${scrollPosition * 0.4}px)`;
});

window.addEventListener('scroll', function () {
    const button1 = document.querySelector('.left-button');
    const scrollPosition = window.scrollY;
    button1.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});
window.addEventListener('scroll', function () {
    const button2 = document.querySelector('.right-button');
    const scrollPosition = window.scrollY;
    button2.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});
