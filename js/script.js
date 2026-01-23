console.log("Your JavaScript code file is now connected to your website.");

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Reusable fade-in effect for section text and image layers
gsap.registerEffect({
    name: 'fadeIn',
    extendTimeline: true,
    effect: (targets, config) => {
        return gsap.from(targets, {
            autoAlpha: config.autoAlpha,
            duration: config.duration,
            y: config.y,
            x: config.x,
        });
    },
    defaults: {
        duration: 0.8,
        autoAlpha: 0,
        y: 100,
    }
});

// Start moon slightly scaled down so it can animate up
gsap.set('#moon', { scale: 0.6 });

// Section 1: runs immediately (page load)
const tlOne = gsap.timeline();

// Sections 2–4: play once when the section enters the viewport
const tlTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '#section2',
        start: 'top 80%',
        once: true,
    }
});

const tlThree = gsap.timeline({
    scrollTrigger: {
        trigger: '#section3',
        start: 'top 80%',
        once: true,
    }
});

const tlFour = gsap.timeline({
    scrollTrigger: {
        trigger: '#section4',
        start: 'top 80%',
        once: true,
    }
});

// Section 1 sequencing
tlOne.fadeIn('#section1 h2', { y: 50 }, 0.2);
tlOne.fadeIn('#section1 .img-lvl1', {}, '<0.3');

// After the moon appears, keep it subtly pulsing
tlOne.to('#moon', {
    scale: 0.8,
    duration: 9.6,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
}, 0.5);

tlOne.fadeIn('#section1 .img-lvl2', {}, '<+=0.2');

// Section 2
tlTwo.fadeIn('#section2 .section-content', { duration: 2.5 });
tlTwo.fadeIn('#section2 .img-lvl1', { duration: 2 }, 1);

// Section 3
tlThree.fadeIn('#section3 .section-content', { duration: 2.5 });
tlThree.fadeIn('#section3 .img-lvl1', { duration: 2 }, 1);

// Section 4
tlFour.fadeIn('#section4 .section-content', { duration: 2.5 });
tlFour.fadeIn('#section4 .img-lvl1', { duration: 2 }, 1);

// Snap scrolling: jump section-to-section
const sections = gsap.utils.toArray("section");

ScrollTrigger.create({
    trigger: '.page-container',
    start: 'top top',
    end: () => ScrollTrigger.maxScroll(window),
    snap: {
        snapTo: 1 / (sections.length - 1),
        duration: 0.4,
        delay: 0,
        ease: "linear",
        inertia: false
    }
});

// Update header label based on the active section
sections.forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => printActiveSection(section.id),
        onEnterBack: () => printActiveSection(section.id),
    });
});

function printActiveSection(id) {
    const logoText = document.querySelector('#logo p');
    const titleText = document.querySelector(`#${id} h2`).textContent;
    logoText.textContent = titleText;
}


//Finally Smooth scroll navigation through sections using GSAP ScrollToPlugin
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: targetSection,
                autoKill: true
            },
            ease: 'power3.inOut'
        });
    });
});
