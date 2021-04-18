const menu=document.querySelector('#mobile-menu');
const navLogo=document.querySelector('.nav_logo')
const menuLinks=document.querySelector('.navmenu');

const mobilemenu=() =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click',mobilemenu);

// const Menus=() =>{
//     const elem= document.querySelector('.highlight')
//     const home= document.querySelector('#homepage')
//     const about= document.querySelector('#aboutpage')
//     const work= document.querySelector('#workpage')
//     let scrollPos=window.scrollY
//     if(window.innerWidth > 960 && scrollPos< 600){
//         home.classList.add('highlight')
//         about.classList.remove('highlight')
//         return
//     }
//     else if(window.innerWidth >960 && scrollPos< 1400){
//         about.classList.add('highlight')
//         home.classList.remove('highlight')
//         work.classList.remove('highlight')
//         return
//     }
//     else if(window.innerWidth>960 && scrollPos< 2345){
//         work.classList.add('highlight')
//         home.classList.remove('highlight')
//         about.classList.remove('highlight')
//         return
//     }
//     if(elm && window.innerWidth<960 && scrollPos < 600) || elem){
//         elem.classList.remove('highlight')
//     }
// };
// window.addEventListener('scroll',Menus);
// window.addEventListener('click',Menus);


const hideMobileMenu= () => {
    const menuBars= document.querySelector('.is-active')
    if(window.innerWidth <= 768 &&  menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);