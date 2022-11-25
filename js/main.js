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
