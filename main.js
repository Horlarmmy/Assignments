const picSlides = document.querySelector(".pic-slide");
const picSlidesImg = document.querySelectorAll(".pic-slide img");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");

let count = 1;
const size = picSlidesImg[0].clientWidth;

picSlides.style.transform = 'translateX(' + (-size * count) + 'px)';

nextbtn.addEventListener('click', function() {
  picSlides.style.transition = "transform 0.5s ease-in-out";
  count++;
  picSlides.style.transform = 'translateX(' + (-size * count) + 'px)';
});

prevbtn.addEventListener('click', ()=> {
  picSlides.style.transition = "transform 0.5s ease-in-out";
  count--;
  picSlides.style.transform = 'translateX(' + (-size * count) + 'px)';
});
