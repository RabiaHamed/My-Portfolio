
// *********active menu***********
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// *********sticky navbar***********
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY >50)
})

// *********toogle icon navbar***********
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick =()=>{
  menuIcon.classList.toggle("fa-x");
  navlist.classList.toggle("open");
}

window.onscroll =()=>{
    menuIcon.classList.remove("fa-x");
    navlist.classList.remove("open");
}

// ********************
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollButton = document.querySelectorAll(".scroll-button");
scrollButton.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));