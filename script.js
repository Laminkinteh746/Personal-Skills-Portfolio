//============================
// MOBILE MENU
//============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

//============================
// ACTIVE NAVIGATION
//============================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

//============================
// BACK TO TOP
//============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

//============================
// TYPEWRITER EFFECT
//============================

const text = [

"ICT Professional",

"Web Developer",

"IT Support Technician",

"Networking Enthusiast"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

(function type(){

    if(count===text.length){

        count=0;

    }

    currentText=text[count];

    letter=currentText.slice(0,++index);

    document.getElementById("typing").textContent=letter;

    if(letter.length===currentText.length){

        count++;

        index=0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,100);

    }

})();

//============================
// SCROLL REVEAL
//============================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.project-card,.timeline-item,.contact-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

//============================
// DARK MODE
//============================

const themeToggle=document.getElementById("themeToggle");

themeToggle.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeToggle.innerHTML="☀️";

}

else{

themeToggle.innerHTML="🌙";

}

}
