import '../style/style.css'
// import '../style/tailwind.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.addEventListener('DOMContentLoaded', () => {
  const rightSect = document.querySelector('.hero-right');
  const sectRight = document.querySelector('.nav-menu-2');
  const leftbtnDinning = document.querySelector('.dinning-btn-left');
  const rightbtnDinning = document.querySelector('.dinning-btn-right');

  sectRight.addEventListener('click', () => {
    console.log('cliccckk');
    const menu1 = document.querySelector('.nav-menu-1');

    if (menu1.classList.contains('active')) {
      console.log('navmenu1 is active');
      menu1.classList.remove('active');
      sectRight.classList.remove('active');
      sectRight.style.transition = 'ease 200ms';
      menu1.style.transition = '200ms';
    } else {
      console.log('navmenu1 is not active');
      menu1.classList.add('active');
      sectRight.classList.add('active');
    }

    if (!rightSect.classList.contains('able')) {
      console.log('right hero is not able so we need to able it...');
      rightSect.classList.add('able');
      sectRight.classList.add('active');
    } else {
      rightSect.classList.remove('able');
      rightSect.style.transition = 'ease 200ms';
      sectRight.classList.remove('active');
      sectRight.style.transition = 'ease 200ms';
    }

    document.querySelector('.close').addEventListener('click', () => {
      rightSect.classList.remove('able');
      rightSect.style.transition = 'ease 200ms';
      sectRight.classList.remove('active');
      sectRight.style.transition = 'ease 200ms';
    })
  })

  leftbtnDinning.innerHTML = `<`;
  rightbtnDinning.innerHTML = `>`;

})

// setupCounter(document.querySelector('#counter'))
