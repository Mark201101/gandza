// ==============================
// MENU
// ==============================

document.addEventListener("DOMContentLoaded", () => {


const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector("nav ul");

const overlay = document.querySelector(".menu-overlay");



if(menuToggle){


    menuToggle.addEventListener("click",()=>{


        menuToggle.classList.toggle("active");

        navMenu.classList.toggle("active");

        overlay.classList.toggle("active");


    });


}



if(overlay){


    overlay.addEventListener("click",()=>{


        menuToggle.classList.remove("active");

        navMenu.classList.remove("active");

        overlay.classList.remove("active");


    });


}




// փակել menu-ն հղման վրա սեղմելիս


document.querySelectorAll("nav ul a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        if(menuToggle){

            menuToggle.classList.remove("active");

        }


        if(navMenu){

            navMenu.classList.remove("active");

        }


        if(overlay){

            overlay.classList.remove("active");

        }


    });


});






// ==============================
// HEADER SCROLL
// ==============================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){


        header.classList.add("scrolled");


    }

    else{


        header.classList.remove("scrolled");


    }


});








// ==============================
// SCROLL REVEAL
// ==============================


const revealElements =
document.querySelectorAll(
".section, .card, .timeline-item, .gallery-item, .number-card"
);



revealElements.forEach(element=>{


    element.classList.add("reveal");


});



const revealObserver =
new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("active");


        }


    });


},
{

threshold:.15

});



revealElements.forEach(element=>{


    revealObserver.observe(element);


});









// ==============================
// COUNTER ANIMATION
// ==============================


const counters =
document.querySelectorAll(".counter");



const counterObserver =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



    startCounter(entry.target);


    counterObserver.unobserve(entry.target);



}



});


},
{

threshold:.7

});





counters.forEach(counter=>{


    counterObserver.observe(counter);


});





function startCounter(counter){


    const target =
    Number(counter.dataset.target);



    let current = 0;



    const speed = target / 100;



    const update = ()=>{


        current += speed;



        if(current < target){


            counter.innerText =
            Math.floor(current);


            requestAnimationFrame(update);


        }

        else{


            counter.innerText =
            target;


        }


    };


    update();


}









// ==============================
// ACTIVE MENU SECTION
// ==============================


const sections =
document.querySelectorAll("section");


const links =
document.querySelectorAll("nav ul a");




window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


const top =
section.offsetTop - 150;



const height =
section.offsetHeight;



if(
window.scrollY >= top &&
window.scrollY < top + height
){


current =
section.getAttribute("id");


}



});





links.forEach(link=>{


link.classList.remove("active-link");



if(
link.getAttribute("href")
===
"#"+current
){


link.classList.add("active-link");


}


});



});









// ==============================
// IMAGE LAZY EFFECT
// ==============================











});

/* =====================
   ՕՐՎԱ ԽՈՍՔ
===================== */

const quotes = [

"Ես սիրում եմ քո մեղմ երգը, իմ հեռավոր հայրենիք։",

"Աշունը իմ հոգու եղանակն է։",

"Սիրտս լցված է հեռավոր երազներով։",

"Գիշերը երգում է իմ հոգու մեջ։",

"Հայրենի բնությունը հավերժ ապրում է մարդու հոգում։"

];

const quoteElement =
document.getElementById("dailyQuote");

const quoteBtn =
document.getElementById("newQuoteBtn");

if(quoteElement){

    function randomQuote(){

        quoteElement.innerText =
        quotes[
            Math.floor(
                Math.random()*quotes.length
            )
        ];

    }

    randomQuote();

    quoteBtn.addEventListener(
        "click",
        randomQuote
    );

}


/* =====================
   ՓԱՍՏԵՐ
===================== */

const facts = [

"Ամեն տարի Գանձայում անցկացվում են «Պոեզիայի տերյանական օրեր» մշակութային միջոցառումները, որոնք սկիզբ են առել դեռևս 1967 թվականին։",

"Գյուղի շրջակայքի բնությունը՝ մառախուղը, լճերը և լայն դաշտերը, մեծ ազդեցություն են ունեցել Տերյանի պոեզիայի տրամադրության ձևավորման վրա։",

"Վահան Տերյանի իրական ազգանունը եղել է Սուքիասյան։ «Տերյան» ազգանունը ծագել է նրա ընտանիքի հոգևորական նախնիներից («տեր»)։",

"Տերյանի տանը հյուրընկալվել են հայ մեծ գրողներ, այդ թվում՝ Հովհաննես Թումանյանը և Ավետիք Իսահակյանը։",

"Ըստ ավանդության՝ հենց Գանձայի տանը Թումանյանի հետ հանդիպման ընթացքում Տերյանը գրել է իր հայտնի «Փարվանա» ստեղծագործության գաղափարական հիմքերը։"

];

const factText =
document.getElementById("factText");

const factBtn =
document.getElementById("factBtn");

if(factText){

    function randomFact(){

        factText.innerText =
        facts[
            Math.floor(
                Math.random()*facts.length
            )
        ];

    }

    randomFact();

    factBtn.addEventListener(
        "click",
        randomFact
    );

}


/* =====================
   BEFORE AFTER
===================== */

const slider =
document.getElementById(
"compareSlider"
);

const before =
document.querySelector(
".img-before-wrapper"
);

if(slider){

    slider.addEventListener(
    "input",
    ()=>{

        before.style.width =
        slider.value + "%";

    });

}


/* =====================
   LIGHTBOX
===================== */

const galleryImages =
document.querySelectorAll(
".gallery img"
);

const lightbox =
document.querySelector(
".lightbox"
);

const lightboxImg =
document.getElementById(
"lightboxImg"
);

const closeLightbox =
document.querySelector(
".close-lightbox"
);

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src =
        img.src;

    });

});

if(closeLightbox){

    closeLightbox.addEventListener(
    "click",
    ()=>{

        lightbox.style.display="none";

    });

}
