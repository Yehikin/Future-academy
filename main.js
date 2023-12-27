// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  // Do something else, like open/close menu
});

// let filterTabs = document.querySelector(".filter_tabs__item");
// let filterLists = document.querySelector(".filter__list");

// filterTabs.addEventListener("click", function () {
//     filterTabs.classList.toggle("is-active");
//     filterLists.classList.toggle("is-active");
// });


document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.filter_tabs__item');
  
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (otherTab) {
          if (otherTab !== tab) {
            otherTab.classList.remove('is-active');
          }
        });
  
        tab.classList.toggle('is-active');
  
        const targetId = tab.getAttribute('data-target');
  
        const targetUl = document.querySelector(`.${targetId}`);
  
        if (targetUl) {
          targetUl.classList.toggle('is-active');
        }
      });
    });
});
  

var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    slidesPerView: 1,
    spaceBetween: 100,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        890: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1180: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1480: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1780: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        2070: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
    },
});


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});