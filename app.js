// Adding Year Dinamically
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

//Opening the Menu
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    //linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }
    else{
        linksContainer.style.height = 0;
    }
});

// Adding fixed navbar and Adding toplink button 
const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');

window.addEventListener('scroll',function(){
    const scrollHeight = window.scrollY;
    const navbarHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navbarHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbarHeight.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        toplink.classList.add('show-link');
    }
    else{
        toplink.classList.remove('show-link');
    }
});

//Smooth navigation

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(links){
    links.addEventListener('click',function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});