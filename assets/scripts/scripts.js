document.addEventListener('DOMContentLoaded', () => {
  let params = {};
  if (window.innerWidth > 480) {
    params = {
      simulateTouch: false,
      direction: 'horizontal',
      on: {
        resize: () => mySwiper.changeDirection(getDirection())
      }
    }
  } else {
    params = {
      direction: 'vertical',
      noSwipingClass: 'swiper-slide',
      autoHeight: true,
      on: {
        resize: () => mySwiper.changeDirection(getDirection())
      }
    }
  }
  const mySwiper = new Swiper('.swiper-container', params);
  const mainBtn = document.querySelector('.navigation__button_main');
  const aboutBtn = document.querySelector('.navigation__button_about');
  const projectsBtn = document.querySelector('.navigation__button_projects');
  const contactsBtn = document.querySelector('.navigation__button_contacts');
  const topBtn = document.querySelector('.navigation__button_top');
  const downBtn = document.querySelector('.navigation__button_down');

  mainBtn.onclick = () => mySwiper.slideTo(0);
  aboutBtn.onclick = () => mySwiper.slideTo(1);
  projectsBtn.onclick = () => mySwiper.slideTo(2);
  contactsBtn.onclick = () => mySwiper.slideTo(3);
  topBtn.onclick = () => mySwiper.slidePrev();
  downBtn.onclick = () => mySwiper.slideNext();

  function getDirection() {
    return window.innerWidth <= 480 ? 'vertical' : 'horizontal';
  }
})