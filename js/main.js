$(function () {
  $(".main__slider").slick({
    nextArrow: '<button type="button" class="slick-next"><img src="images/main-slide-right.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/main-slide-left.svg" alt=""></button>',
    fade: true,
  });
  $(".shops-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });
  $(".main__bice-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".large__slider").slick({
    fade: true,
    infinite: false,
    arrows: false,
    asNavFor: ".small__slider",
  });
  $(".small__slider").slick({
    fade: true,
    infinite: false,
    arrows: false,
    variableWidth: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".large__slider",
  });

  $(".catalog-hide__title").on("click", function () {
    $(".catalog-hide__list").toggle(100);
  });

  $(".filter__shops-more").on("click", function () {
    $(".filter__shops-inner").toggleClass("--show");
  });

  $(".rating").rateYo({
    starWidth: "25px",
    normalFill: "#d9d9d9",
    ratedFill: "#003cff",
    readOnly: true,
    starSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="22px" viewBox="0 0 24 22" version="1.1"><path style="stroce:#d9d9d9;" d="M 11.996094 0 C 12.378906 0 12.730469 0.226562 12.894531 0.582031 L 15.753906 6.652344 L 22.140625 7.625 C 22.515625 7.683594 22.824219 7.953125 22.945312 8.324219 C 23.0625 8.695312 22.964844 9.105469 22.699219 9.375 L 18.066406 14.109375 L 19.164062 20.792969 C 19.226562 21.179688 19.070312 21.574219 18.757812 21.800781 C 18.449219 22.03125 18.003906 22.058594 17.703125 21.875 L 11.996094 18.730469 L 6.253906 21.875 C 5.953125 22.058594 5.546875 22.03125 5.234375 21.800781 C 4.925781 21.574219 4.769531 21.179688 4.796875 20.792969 L 5.925781 14.109375 L 1.296875 9.375 C 1.027344 9.105469 0.933594 8.695312 1.050781 8.324219 C 1.167969 7.953125 1.480469 7.683594 1.855469 7.625 L 8.238281 6.652344 L 11.097656 0.582031 C 11.265625 0.226562 11.613281 0 11.996094 0 Z M 11.996094 3.390625 L 9.808594 8.042969 C 9.664062 8.347656 9.378906 8.5625 9.054688 8.617188 L 4.125 9.363281 L 7.703125 13.019531 C 7.933594 13.257812 8.039062 13.59375 7.984375 13.925781 L 7.140625 19.066406 L 11.523438 16.648438 C 11.820312 16.488281 12.175781 16.488281 12.464844 16.648438 L 16.851562 19.066406 L 16.007812 13.925781 C 15.953125 13.59375 16.0625 13.257812 16.292969 13.019531 L 19.871094 9.363281 L 14.941406 8.617188 C 14.613281 8.5625 14.328125 8.347656 14.1875 8.042969 Z M 11.996094 3.390625 "/></svg>',
  });
  $(".shops__footer-rating").rateYo({
    starWidth: "15px",
    normalFill: "#d9d9d9",
    ratedFill: "#003cff",
    readOnly: true,
    starSvg:
      '<svg width="15" height="13" viewBox="0 0 15 13" xmlns="http://www.w3.org/2000/svg"><path d="M14.2097 0.770508V12.6248H0.379639V0.770508L3.83147 6.69767L7.30601 0.770508L10.7578 6.69767L14.2097 0.770508Z"/></svg>',
  });
});

// Селект
const showItems = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach(item => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener("click", selectChoos);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("active");
  }

  function selectChoos() {
    let text = this.innerText;
    let select = this.closest(".select");
    let curentText = select.querySelector(".select__title");
    curentText.innerText = text;
    select.classList.remove("active");
  }
};

showItems();

const rangeSlider = document.getElementById("range__slider");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 200000],
    connect: true,
    step: 1,
    range: {
      min: [0],
      max: [200000],
    },
  });

  const input0 = document.getElementById("input0");
  const input1 = document.getElementById("input1");

  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", e => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
