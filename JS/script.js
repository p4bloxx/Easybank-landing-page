const iconsNav = document.querySelector('.icons-nav');
const iconsHamb = document.querySelector('#hamb');
const iconsClose = document.querySelector('#close');
const nav = document.querySelector('#primary-nav');
const gradientBg = document.querySelector('#gradient-bg');
const header = document.querySelector('header');
const hero = document.querySelector('.hero-section');
iconsClose.style.transform = 'scale(0)';

document.addEventListener('click', (e) => {
  if (e.target === iconsHamb) {
    nav.style.transform = 'translateY(0%)'
    iconsHamb.style.transform = 'scale(0)';
    iconsClose.style.transform = 'scale(0.9)';
    document.querySelector('body').style.overflowY = 'hidden';
    gradientBg.style.background = 'linear-gradient(180deg, #2D314D 0%, rgba(45, 49, 77, 0.00) 100%)';
  } else if(e.target === iconsClose || e.target === gradientBg && (e.target != nav && e.target !== nav.firstElementChild || e.target !== header)) {
    nav.style.transform = 'translateY(-150%)'
    document.querySelector('body').style.overflowY = 'auto';
    iconsHamb.style.transform = 'scaleY(0.7)';
    iconsClose.style.transform = 'scale(0)';
    gradientBg.style.background = 'none';
  }
})