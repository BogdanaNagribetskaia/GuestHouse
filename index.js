import { registration } from './registration.js';
import { modal } from './modal.js';

// Burger

const burgerBtn = document.querySelector('.header__hamburger');
const nav = document.querySelector('.navigation');

burgerBtn.addEventListener('click', function () {
  nav.classList.toggle('is-active');
  this.classList.toggle('is-active');
});

// Slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper1 = document.querySelector('.swiper').swiper;
setInterval(() => {
  swiper1.slideNext();
}, 1500);

document.getElementById('js-slider-next').addEventListener('click', () => {
  swiper1.slideNext();
});
document.getElementById('js-slider-prev').addEventListener('click', () => {
  swiper1.slidePrev();
});

// Map
window.initMap = function () {
  const location = { lat: 46.594433, lng: 7.909289 };
  const myPin = './assets/img/pin.png';

  const map = new google.maps.Map(document.getElementById('js-map'), {
    zoom: 15,
    center: location,
    styles: [
      {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [
          {
            saturation: '-100',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 65,
          },
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: '50',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: '-100',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [
          {
            lightness: '30',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [
          {
            lightness: '40',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            hue: '#ffff00',
          },
          {
            lightness: -25,
          },
          {
            saturation: -97,
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels',
        stylers: [
          {
            lightness: -25,
          },
          {
            saturation: -100,
          },
        ],
      },
    ],
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: myPin,
  });
};

// Animation
AOS.init({
  disable: 'mobile',
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

// Registration

document
  .getElementById('js-registration-form')
  .addEventListener('submit', registration);
const toggleRegistrationButtons = document.getElementsByClassName(
  'js-toggle-registration-modal'
);

for (const item of toggleRegistrationButtons) {
  item.addEventListener('click', modal);
}
