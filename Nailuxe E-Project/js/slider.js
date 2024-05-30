var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    spaceBetween:10,
    grabCursor: true,
    keyboard: {
      enabled: true,
      type:"fraction",
    },
    breakpoints: {
      769: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect:"creative",
    creativeEffect:{
        prev:{
            shadow:true,
            translate:[0,0-400],
        },
        next:{
            translate:["100%",0,0],
        },
        },
  });


//   const carousel = document.querySelector(".carousel");

//   let isDragStart = false;

//   const dragStart = () => {
//     isDragStart = true;
//   }

// const dragging = (e) => {
//   if(!isDragStart) return;
//   e.preventDefault();
// carousel.scrollLeft = e.pageX;


// const}

//   carousel.addEventListener("mousedown", dragStart);
//   carousel.addEventListener("mousemove", dragging);
//   carousel.addEventListener("mouseup", dragstop);