const hmbBtn = document.querySelector("#hmb");
const header = document.getElementById("header");
hmbBtn.addEventListener("click", () => {
header.classList.toggle("active");
}, false);

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("active");
  });
});



// フワッと

ScrollReveal({
        reset: false, 
        distance: "60px", 
        duration: 2000,
        delay: 200 });
        
ScrollReveal().reveal('#layout h2', { delay: 200, origin: "top" });
ScrollReveal().reveal('#layout img, #info h2', { delay: 300, origin: "left" });
ScrollReveal().reveal('#layout .text', { delay: 600, origin: "bottom" });
ScrollReveal().reveal("#island h2", {delay: 200, origin: "left"});
ScrollReveal().reveal("#info .text", {delay: 800, origin: "left"});
ScrollReveal().reveal("#info dt", {delay: 1000, origin: "left", interval: 400,});
ScrollReveal().reveal("#info dd", {delay: 1000, origin: "left", interval: 400,});



// スライダー

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    767: {
      slidesPerView: 3,
    }}
});



// モーダル

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

document.querySelectorAll('.swiper-slide img').forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    modal.style.display = 'flex';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});