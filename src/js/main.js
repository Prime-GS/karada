import '../styles/style.scss'
import * as bootstrap from 'bootstrap'

$.js = function (el) {
  return $('[data-js=' + el + ']')
}

function carousel() {
  $.js('courses-carousel').slick({
    infinite: false,
    arrows: true,
    prevArrow:
      '<div class="slick-prev"> <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_350_581)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_350_581)"/><defs><linearGradient id="paint0_linear_350_581" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_350_581" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient></defs></svg></div>',
    nextArrow:
      '<div class="slick-next">  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_350_581)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_350_581)"/><defs><linearGradient id="paint0_linear_350_581" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_350_581" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient></defs></svg></div>',
    dots: true,

    autoplay: false,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
}

carousel()

function carousel1() {
  $.js('items-carousel').slick({
    infinite: false,
    arrows: false,
    dots: true,

    autoplay: false,
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
}

carousel1()

function portfolioCarousel() {
  $.js('portfolio-carusele').slick({
    infinite: false,
    arrows: true,
    prevArrow:
      '<div class="slick-prev"> <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_350_581)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_350_581)"/><defs><linearGradient id="paint0_linear_350_581" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_350_581" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient></defs></svg></div>',
    nextArrow:
      '<div class="slick-next">  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_350_581)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_350_581)"/><defs><linearGradient id="paint0_linear_350_581" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_350_581" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient></defs></svg></div>',
    dots: true,

    autoplay: false,
    speed: 1100,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  })
}

portfolioCarousel()

function reviewsCarousel() {
  $.js('reviews-carusele').slick({
    infinite: false,
    arrows: true,
    prevArrow:
      '<div class="slick-prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_393_1964)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_393_1964)"/><defs><linearGradient id="paint0_linear_393_1964" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_393_1964" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient></defs></svg></div>',
    nextArrow:
      '<div class="slick-next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_393_1964)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_393_1964)"/><defs><linearGradient id="paint0_linear_393_1964" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_393_1964" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient></defs></svg></div>',
    dots: true,

    autoplay: false,
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
}

reviewsCarousel()

function videoReviewsCarousel() {
  $.js('video-reviews-carusele').slick({
    infinite: false,
    arrows: true,
    prevArrow:
      '<div class="slick-prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_393_1964)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_393_1964)"/><defs><linearGradient id="paint0_linear_393_1964" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_393_1964" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient></defs></svg></div>',
    nextArrow:
      '<div class="slick-next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_393_1964)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_393_1964)"/><defs><linearGradient id="paint0_linear_393_1964" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_393_1964" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient></defs></svg></div>',
    dots: true,

    autoplay: false,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
}

videoReviewsCarousel()

function costCarusele() {
  $.js('cost-carusele').slick({
    infinite: false,
    arrows: false,
    dots: true,
    autoplay: false,
    speed: 1100,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
}

costCarusele()

const reviewTextNav = document.getElementById('review-text-nav')
const reviewVideoNav = document.getElementById('review-video-nav')

reviewVideoNav.addEventListener('click', () => {
  reviewTextNav.className = 'nav-title reviews-nav-desc'
  reviewVideoNav.className = 'nav-title nav-active reviews-nav-desc'

  const videoContainer = document.getElementById('review-video-carusele')
  const textContainer = document.getElementById('review-text-carusele')

  videoContainer.style.transform = 'translate(-120%,0)'
  textContainer.style.transform = 'translate(-120%,0)'
})

reviewTextNav.addEventListener('click', () => {
  reviewTextNav.className = 'nav-title nav-active reviews-nav-desc'
  reviewVideoNav.className = 'nav-title reviews-nav-desc'

  const videoContainer = document.getElementById('review-video-carusele')
  const textContainer = document.getElementById('review-text-carusele')

  videoContainer.style.transform = 'translate(120%,0)'
  textContainer.style.transform = 'translate(0%,0)'
})
