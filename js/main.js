// main.js
// yes this is the whole js file, yes it's boring
// stop reading my code you faggoted faggot faggt faggoty faggot

document.fonts.ready.then(function() {
    setTimeout(function() {
        var preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.classList.add("done");
        }
    }, 150);
});

// year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// role cycling thing
// rotates the subtitle roles on a timer.
const roles = document.querySelectorAll(".role");
let currentRole = 0;

if (roles.length > 1) {
    setInterval(function() {
        roles[currentRole].classList.remove("active");
        currentRole = (currentRole + 1) % roles.length;
        roles[currentRole].classList.add("active");
    }, 2800);
}

// particles init
// if particles.min.js didn't load (e.g. it's not in js/ yet), this just silently skips
// which is fine. better than crashing the whole page.
if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: { enable: true, value_area: 800 }
            },
            color: { value: "#d44fff" },
            shape: { type: "circle" },
            opacity: {
                value: 0.55,
                random: true,
                anim: { enable: true, speed: 0.8, opacity_min: 0.15, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#d44fff",
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.7,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 180, line_linked: { opacity: 0.6 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
} else {
    // idk particles didn't load.
    // not a big deal. page still works fine without it.
    console.warn("where me particles boi");
}