document.addEventListener('DOMContentLoaded', () => {
  let params = {};
  const mainBtn = document.querySelector('.navigation__button_main');
  const aboutBtn = document.querySelector('.navigation__button_about');
  const projectsBtn = document.querySelector('.navigation__button_projects');
  const contactsBtn = document.querySelector('.navigation__button_contacts');
  const topBtn = document.querySelector('.navigation__button_top');
  const downBtn = document.querySelector('.navigation__button_down');
  const swiperContainer = document.querySelector('.swiper-container');

  if (window.innerWidth > 480) {
    params = {
      simulateTouch: false,
      direction: 'horizontal',
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      spaceBetween: 10,
      on: {
        resize: () => mySwiper.changeDirection(getDirection())
      }
    }
  } else {
    params = {
      direction: 'vertical',
      noSwipingClass: 'swiper-slide',
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      on: {
        resize: () => mySwiper.changeDirection(getDirection())
      }
    }
  }

  // костыль. установка высоты слайдера в зависимости от высоты окна
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 480) {
      swiperContainer.style.height = window.innerHeight - 76 + 'px';
    } else {
      swiperContainer.style.height = '';
    }
  });
  if (window.innerWidth <= 480) {
    swiperContainer.style.height = window.innerHeight - 76 + 'px';
  };

  const mySwiper = new Swiper(swiperContainer, params);

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