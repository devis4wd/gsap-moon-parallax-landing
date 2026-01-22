console.log("Your JavaScript code file is now connected to your website.");

gsap.registerPlugin(ScrollTrigger);


//creo effetto fade-in da applicare a tutte le immagini layer di ogni section e a tutti i 
//section-contente (che contengono titoli h2, p, a)

gsap.registerEffect({
    name: 'fadeIn',
    extendTimeline: true,
    effect: (targets, config) => {
        return gsap.from(targets, {
            autoAlpha: config.autoAlpha,
            duration: config.duration,
            delay: config.delay,
            y: config.y,
            x: config.x,
            scrollTrigger: config.scrollTrigger,
        })
    },
    defaults: {
        duration: 0.8,
        autoAlpha: 0,
        y: 100,
    }
})

//imposto scale di iimagine moon a 0.8 di default, cos' quando parte animazione scala a 1
//crreando effetto opposto a movimento dellos fondo
gsap.set('#moon', { scale: 0.6 });


//Creo timeline epr section 1
const tlOne = gsap.timeline();

//Creo anche timeline per elmenti delle sections 2-4, ma a differenza della timeline (animazioni) di
//section 1, quelle successive partiranno quando appariranno a schermo tramite scroll della pagina con 
//il comportamento di quest'utlimo settato più sotto
const tlTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '#section2',
        start: 'top 80%',
        once: true, //una volta attivate, le animazioni non ripartono quando farò scroll Up
    }
});
const tlThree = gsap.timeline({
    scrollTrigger: {
        trigger: '#section3',
        start: 'top 80%',
        once: true, //una volta attivate, le animazioni non ripartono quando farò scroll Up
    }
});
const tlFour = gsap.timeline({
    scrollTrigger: {
        trigger: '#section4',
        start: 'top 80%',
        once: true, //una volta attivate, le animazioni non ripartono quando farò scroll Up
    }
});

//Gestisco timeline 1 per section 1 applicando agli elementi di tale section l'animazione creata con effect
//e gestendo le tempistiche di animazione di ogni elemento in modo che appaiano nellordine che voglio un section 1
tlOne.fadeIn('#section1 h2', { y: 50 }, 0.2)
tlOne.fadeIn('#section1 .img-lvl1', {}, '<0.3')
//dopo che #moon è apparso, comincia a farla pulsare 
tlOne.to('#moon', {
    scale: 0.8,
    duration: 9.6,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
}, 0.5);

tlOne.fadeIn('#section1 .img-lvl2', {}, '<+=0.2')


//idem di quanto fatto per timeline 1, ma per sections 2-4 l'avvio delle rispettive timeline è stato 
// agganciato non al caricamento della paagina ma allo scroll in tali sezioni (v. sopra)
tlTwo.fadeIn('#section2 .section-content', {
    duration: 2.5,
})
tlTwo.fadeIn('#section2 .img-lvl1', {
    duration: 2
}, 1)

//idem per timeline 3 (section 3)
tlThree.fadeIn('#section3 .section-content', {
    duration: 2.5,
})
tlThree.fadeIn('#section3 .img-lvl1', {
    duration: 2
}, 1)

//idem per timeline 4 (section 4)
tlFour.fadeIn('#section4 .section-content', {
    duration: 2.5,
})
tlFour.fadeIn('#section4 .img-lvl1', {
    duration: 2
}, 1)

//Infine creo lo scrollTrigger GSAP definendone il comportamento in modo che, quando scrollo, 
//salti da sezione a sezione grazie a snap

//creo array con tutti gli elmenti section (che saranno 4), che poi userò nella proprietà snap di scrollTrigger
const sections = gsap.utils.toArray("section");

ScrollTrigger.create({
    trigger: '.page-container', //scrollTrigger si attiva quando compare '.page-container' (di fatto quando appare la pagina)
    start: 'top top',
    end: () => ScrollTrigger.maxScroll(window), //termina quando è stata scrollata tutta la lunghezza scrollabile reale della pagina
    snap: {
        snapTo: 1 / (sections.length - 1), //sitassi strana ma è dovuta al funzionamento di snap
        duration: 0.4,     // fisso = meno esitazione
        delay: 0,        // scatta quasi subito quando molli
        ease: "linear",
        inertia: false      // riduce la “gommosità” su trackpad
    }
})

//Infine sfrutto l'array sections e gsap per aggiornare anche il nome della section attiva nell'header creando un secondo trigger dedicato solo a questo scopo:
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
    //Prendi il tag p dentro al div #logo
    let logoText = document.querySelector('#logo p');
    //Salva il testo di h2 della sezione in cui ci troviamo
    let titleText = document.querySelector(`#${id} h2`).innerHTML;
    //Sotituisci il testo di logoText con quello del titolo salvato in titleText
    logoText.innerHTML = titleText
    

}
