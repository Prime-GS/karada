import '../styles/style.scss'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

$(document).ready(function () {
  $('.3-items-carousel').owlCarousel({
    loop: false,
    margin: 24,
    dots: true,
    dotsClass: 'mobile-dots',
    dotClass: 'dot',
    dotsData: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  })
  $('.4-items-carousel').owlCarousel({
    loop: false,
    margin: 24,
    dots: true,
    dotsClass: 'carousel-dots',
    dotClass: 'dot',
    dotsData: false,
    nav: true,
    navContainerClass: 'arrows-container',
    navClass: ['arrow', 'arrow'],
    navText: [
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" stroke="url(#paint0_linear_455_1513)"/><path d="M13 21.6455C13 21.9092 13.1143 22.1729 13.3164 22.3662L19.1172 28.1582C19.3281 28.3604 19.5566 28.457 19.8115 28.457C20.3652 28.457 20.7695 28.0615 20.7695 27.5254C20.7695 27.2441 20.6641 27.0068 20.4795 26.8311L18.502 24.8271L15.9531 22.498L18.001 22.6211H32.6533C33.2334 22.6211 33.6377 22.2168 33.6377 21.6455C33.6377 21.0654 33.2334 20.6611 32.6533 20.6611H18.001L15.9619 20.7842L18.502 18.4551L20.4795 16.4512C20.6641 16.2754 20.7695 16.0381 20.7695 15.7568C20.7695 15.2207 20.3652 14.8252 19.8115 14.8252C19.5566 14.8252 19.3193 14.9219 19.0908 15.1416L13.3164 20.916C13.1143 21.1094 13 21.373 13 21.6455Z" fill="url(#paint1_linear_455_1513)"/><defs><linearGradient id="paint0_linear_455_1513" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_455_1513" x1="13.43" y1="21.6411" x2="32.3478" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient></defs></svg>',
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_455_581)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_455_581)"/><defs><linearGradient id="paint0_linear_455_581" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_455_581" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient></defs></svg>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  })
  $('.portfolio-carousel').owlCarousel({
    loop: false,
    dots: true,
    dotsClass: 'carousel-dots',
    dotClass: 'dot',
    dotsData: false,
    nav: true,
    navContainerClass: 'arrows-container',
    navClass: ['arrow', 'arrow'],
    navText: [
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" stroke="url(#paint0_linear_455_1513)"/><path d="M13 21.6455C13 21.9092 13.1143 22.1729 13.3164 22.3662L19.1172 28.1582C19.3281 28.3604 19.5566 28.457 19.8115 28.457C20.3652 28.457 20.7695 28.0615 20.7695 27.5254C20.7695 27.2441 20.6641 27.0068 20.4795 26.8311L18.502 24.8271L15.9531 22.498L18.001 22.6211H32.6533C33.2334 22.6211 33.6377 22.2168 33.6377 21.6455C33.6377 21.0654 33.2334 20.6611 32.6533 20.6611H18.001L15.9619 20.7842L18.502 18.4551L20.4795 16.4512C20.6641 16.2754 20.7695 16.0381 20.7695 15.7568C20.7695 15.2207 20.3652 14.8252 19.8115 14.8252C19.5566 14.8252 19.3193 14.9219 19.0908 15.1416L13.3164 20.916C13.1143 21.1094 13 21.373 13 21.6455Z" fill="url(#paint1_linear_455_1513)"/><defs><linearGradient id="paint0_linear_455_1513" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_455_1513" x1="13.43" y1="21.6411" x2="32.3478" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient></defs></svg>',
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_455_581)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_455_581)"/><defs><linearGradient id="paint0_linear_455_581" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_455_581" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#0068C7"/><stop offset="1" stop-color="#0068C7" stop-opacity="0"/></linearGradient></defs></svg>',
    ],
    responsive: {
      0: {
        items: 4,
      },
      992: {
        items: 6,
      },
    },
  })
  $('.review-carousel').owlCarousel({
    loop: false,
    dots: true,
    dotsClass: 'review-carousel-dots',
    dotClass: 'review-dot',
    dotsData: false,
    nav: true,
    navContainerClass: 'review-arrows-container',
    navClass: ['review-arrow', 'review-arrow'],
    navText: [
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" stroke="url(#paint0_linear_479_1950)"/><path d="M13 21.6455C13 21.9092 13.1143 22.1729 13.3164 22.3662L19.1172 28.1582C19.3281 28.3604 19.5566 28.457 19.8115 28.457C20.3652 28.457 20.7695 28.0615 20.7695 27.5254C20.7695 27.2441 20.6641 27.0068 20.4795 26.8311L18.502 24.8271L15.9531 22.498L18.001 22.6211H32.6533C33.2334 22.6211 33.6377 22.2168 33.6377 21.6455C33.6377 21.0654 33.2334 20.6611 32.6533 20.6611H18.001L15.9619 20.7842L18.502 18.4551L20.4795 16.4512C20.6641 16.2754 20.7695 16.0381 20.7695 15.7568C20.7695 15.2207 20.3652 14.8252 19.8115 14.8252C19.5566 14.8252 19.3193 14.9219 19.0908 15.1416L13.3164 20.916C13.1143 21.1094 13 21.373 13 21.6455Z" fill="url(#paint1_linear_479_1950)"/><defs><linearGradient id="paint0_linear_479_1950" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_479_1950" x1="13.43" y1="21.6411" x2="32.3478" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient></defs></svg>',
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_479_1964)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_479_1964)"/><defs><linearGradient id="paint0_linear_479_1964" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_479_1964" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient></defs></svg>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  })

  $('.review-video-carousel').owlCarousel({
    loop: false,
    dots: true,
    dotsClass: 'review-carousel-dots',
    dotClass: 'review-dot',
    dotsData: false,
    nav: true,
    navContainerClass: 'review-arrows-container',
    navClass: ['review-arrow', 'review-arrow'],
    navText: [
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" stroke="url(#paint0_linear_479_1950)"/><path d="M13 21.6455C13 21.9092 13.1143 22.1729 13.3164 22.3662L19.1172 28.1582C19.3281 28.3604 19.5566 28.457 19.8115 28.457C20.3652 28.457 20.7695 28.0615 20.7695 27.5254C20.7695 27.2441 20.6641 27.0068 20.4795 26.8311L18.502 24.8271L15.9531 22.498L18.001 22.6211H32.6533C33.2334 22.6211 33.6377 22.2168 33.6377 21.6455C33.6377 21.0654 33.2334 20.6611 32.6533 20.6611H18.001L15.9619 20.7842L18.502 18.4551L20.4795 16.4512C20.6641 16.2754 20.7695 16.0381 20.7695 15.7568C20.7695 15.2207 20.3652 14.8252 19.8115 14.8252C19.5566 14.8252 19.3193 14.9219 19.0908 15.1416L13.3164 20.916C13.1143 21.1094 13 21.373 13 21.6455Z" fill="url(#paint1_linear_479_1950)"/><defs><linearGradient id="paint0_linear_479_1950" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_479_1950" x1="13.43" y1="21.6411" x2="32.3478" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient></defs></svg>',
      '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21.5" transform="matrix(-1 0 0 1 44 0)" stroke="url(#paint0_linear_479_1964)"/><path d="M31 21.6455C31 21.9092 30.8857 22.1729 30.6836 22.3662L24.8828 28.1582C24.6719 28.3604 24.4434 28.457 24.1885 28.457C23.6348 28.457 23.2305 28.0615 23.2305 27.5254C23.2305 27.2441 23.3359 27.0068 23.5205 26.8311L25.498 24.8271L28.0469 22.498L25.999 22.6211H11.3467C10.7666 22.6211 10.3623 22.2168 10.3623 21.6455C10.3623 21.0654 10.7666 20.6611 11.3467 20.6611H25.999L28.0381 20.7842L25.498 18.4551L23.5205 16.4512C23.3359 16.2754 23.2305 16.0381 23.2305 15.7568C23.2305 15.2207 23.6348 14.8252 24.1885 14.8252C24.4434 14.8252 24.6807 14.9219 24.9092 15.1416L30.6836 20.916C30.8857 21.1094 31 21.373 31 21.6455Z" fill="url(#paint1_linear_479_1964)"/><defs><linearGradient id="paint0_linear_479_1964" x1="0.916667" y1="22" x2="41.25" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_479_1964" x1="30.57" y1="21.6411" x2="11.6522" y2="21.6411" gradientUnits="userSpaceOnUse"><stop stop-color="#FCFEFF"/><stop offset="1" stop-color="#FCFEFF" stop-opacity="0"/></linearGradient></defs></svg>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  })
})

const reviewTextNav = document.getElementById('review-text-nav')
const reviewVideoNav = document.getElementById('review-video-nav')

reviewVideoNav.addEventListener('click', () => {
  reviewTextNav.className = 'nav-title reviews-nav-desc'
  reviewVideoNav.className = 'nav-title nav-active reviews-nav-desc'

  const videoContainer = document.getElementById('review-video-carusele')
  const textContainer = document.getElementById('review-text-carusele')

  videoContainer.style.transform = 'translate(-150%,0)'
  textContainer.style.transform = 'translate(-150%,0)'
})

reviewTextNav.addEventListener('click', () => {
  reviewTextNav.className = 'nav-title nav-active reviews-nav-desc'
  reviewVideoNav.className = 'nav-title reviews-nav-desc'

  const videoContainer = document.getElementById('review-video-carusele')
  const textContainer = document.getElementById('review-text-carusele')

  videoContainer.style.transform = 'translate(150%,0)'
  textContainer.style.transform = 'translate(0%,0)'
})

const costFirstNav = document.getElementById('cost-first-nav')
const costSecondNav = document.getElementById('cost-second-nav')

costSecondNav.addEventListener('click', () => {
  costFirstNav.className = 'cost-nav-title'
  costSecondNav.className = 'cost-nav-title cost-nav-active'

  const firstContainer = document.getElementById('cost-first-container')
  const secondContainer = document.getElementById('cost-second-container')

  firstContainer.style.transform = 'translate(-105%,0)'
  secondContainer.style.transform = 'translate(130%,0)'
})

costFirstNav.addEventListener('click', () => {
  costFirstNav.className = 'cost-nav-title cost-nav-active'
  costSecondNav.className = 'cost-nav-title'

  const firstContainer = document.getElementById('cost-first-container')
  const secondContainer = document.getElementById('cost-second-container')

  firstContainer.style.transform = 'translate(0,0)'
  secondContainer.style.transform = 'translate(0,0)'
})

const form = document.getElementById('form-container')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e.target)
})

const closeFormBtn = document.getElementById('close-form')

closeFormBtn.addEventListener('click', () => {
  form.style.display = 'none'
})

const openFormBtns = document.getElementsByClassName('try-free')
for (let i = 0; i < openFormBtns.length; i++) {
  openFormBtns[i].addEventListener('click', () => {
    form.style.display = 'block'
  })
}
