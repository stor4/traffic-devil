import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
  const slider = new Swiper(".slider__swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
