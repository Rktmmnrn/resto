import '../style/about.scss'
// import '../style/tailwind.css'

document.addEventListener('DOMContentLoaded', () => {
  const rightmenu = document.querySelector('.head-right');
  const spanrightmenu = document.querySelector('.head-right-span');
  const nav = document.querySelector('.head-nav');
  const imgleft = document.querySelector('.image-btn1');
  const imgright = document.querySelector('.image-btn2');

  rightmenu.addEventListener('click', () => {
    if(nav.classList.contains('active')) {
      nav.classList.remove('active');
      spanrightmenu.classList.remove('active');
      nav.style.transition = 'ease 200ms';
    } else {
      nav.classList.add('active');
      spanrightmenu.classList.add('active');
    }
  })

  imgleft.innerHTML = '<';
  imgright.innerHTML = '>';
})