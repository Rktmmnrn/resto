import '../style/menu.scss'
import '../src/animation.js'

// ce code js est importer de import "'../src/animation.js'"
// document.addEventListener('DOMContentLoaded', () => {
//   const rightSect = document.querySelector('.hero-right');
//   const rightmenu = document.querySelector('.head-right');
//   const spanrightmenu = document.querySelector('.head-right-span');
//   const nav = document.querySelector('.head-nav');
//   rightmenu.addEventListener('click', () => {
//     if(nav.classList.contains('active')) {
//       nav.classList.remove('active');
//       spanrightmenu.classList.remove('active');
//       nav.style.transition = 'ease 200ms';
//     } else {
//       nav.classList.add('active');
//       spanrightmenu.classList.add('active');
//     }

//     if (!rightSect.classList.contains('able')) {
//       console.log('right hero is not able so we need to able it...');
//       rightSect.classList.add('able');
//       rightmenu.classList.add('active');
//       console.log('not able')
//     } else {
//       rightSect.classList.remove('able');
//       rightSect.style.transition = '200ms';
//       rightmenu.classList.remove('active');
//       rightmenu.style.transition = 'ease 200ms';
//       console.log('able');
//     }
//   })


//   document.querySelector('.close').addEventListener('click', () => {
//     rightSect.classList.remove('able');
//     rightSect.style.transition = 'ease 200ms';
//     spanrightmenu.classList.remove('active');
//     spanrightmenu.style.transition = 'ease 200ms';
//   })
// })