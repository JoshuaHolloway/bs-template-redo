let count = 0;
const is_even = (x) => (x % 2 === 0) ? true : false;

let tl;

const do_animation = (e) => {
  if (is_even(count)) {

    tl = gsap.timeline();

    tl.to('.nav-drawer',   {duration: 1, xPercent: -100, ease: Strong.easeInOut}, 0)
  } else {
    tl.to('.nav-drawer', {duration: 1, xPercent: 0, ease: Strong.easeInOut});
  }
  count++
}; // do_animation()

const hamburger_button = document.querySelector('.hamburger');
hamburger_button.addEventListener('click', do_animation);