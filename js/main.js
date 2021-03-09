let count = 0;
const is_even = (x) => (x % 2 === 0) ? true : false;

let tl;
const dur1 = 1;
const time_step0 = 2; // begin reverse
const time_step1 = 3;
const time_step2 = 4;
const dy = 8;

// offsetHeight includes margin, border, padding
const box_height = document.querySelector('.box-container').offsetHeight;

const do_animation = (e) => {
  if (is_even(count)) {

    tl = gsap.timeline();

    tl
      .to('.nav-drawer',   {duration: 1, xPercent: -100, ease: Strong.easeInOut}, 0)
      .to('.line-2',       {duration: dur1, opacity: 0, ease: Strong.easeInOut},  0)
      .to('.line-1',       {duration: dur1, y: dy, ease: Strong.easeInOut},       0)
      .to('.line-3',       {duration: dur1, y: -dy, ease: Strong.easeInOut},      0)
      .to('.line-1', {
        duration: dur1, 
        transformOrigin: "50% 50%", 
        rotation: 45,
        ease: Strong.easeInOut
      }, dur1)
      .to('.line-3', {
        duration: dur1, 
        transformOrigin: "50% 50%", 
        rotation: -45,
        ease: Strong.easeInOut
      }, dur1)
      .to('.box', {duration: dur1, y: -box_height, stagger: 0.3}, dur1);
  } else {
    tl
    .to('.line-3', {
      duration: dur1, 
      transformOrigin: "50% 50%", 
      rotation: 0,
      ease: Strong.easeInOut
    }, time_step0 * dur1)
    .to('.line-1', {
      duration: dur1, 
      transformOrigin: "50% 50%", 
      rotation: 0,
      ease: Strong.easeInOut
    }, time_step0 * dur1)
    .to('.box',        {duration: dur1, y: 0, stagger: {each: 0.3}, ease: Strong.easeInOut}, time_step1 * dur1)
    .to('.line-3',     {duration: dur1, y: 0, ease: Strong.easeInOut},        time_step2 * dur1)
    .to('.line-1',     {duration: dur1, y: 0, ease: Strong.easeInOut},        time_step2 * dur1)
    .to('.line-2',     {duration: dur1, opacity: 1, ease: Strong.easeInOut},  time_step2 * dur1)
    .to('.nav-drawer', {duration: 1, xPercent: 0, ease: Strong.easeInOut},    time_step2 * dur1);
  }
  count++
}; // do_animation()

const hamburger_button = document.querySelector('.hamburger');
hamburger_button.addEventListener('click', do_animation);