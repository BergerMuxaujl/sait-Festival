$(document).ready(function () {
  $(".stars-slider1").slick({
    infinite: false,
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1801,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  });
  $(".spikers-slider1").slick({
    infinite: false,
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1801,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  });
  $(".levels-slider").slick({
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1801,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".medias-slider").slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    variableWidth: true,
  });
  $(".partners-slider").slick({
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1801,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
    ],
  });

  //! КНОПКА ДЛЯ ВИДЕО
  let $video = $(".medias-video")[0]; // само видео
  let $videoPoster = $(".video-poster"); // постер с кнопкой поверх видео
  let $videoButton = $(".video-button"); // кнопка поверх видео
  $videoButton.on("click", () => {
    console.log($video.paused);
    if ($video.paused) {
      $video.play();
      $videoPoster.addClass("video-is-playing");
    } else {
      $videoPoster.removeClass("video-is-playing");
      $video.pause();
    }
  });
  $(".medias-box").focusout(function () {
    $videoPoster.removeClass("video-is-playing");
    $video.pause();
    console.log("фокус потерян");
  });
  //! АНИМАЦИЯ СКРОЛА
  let maskClass = "sb-";
  let blockClass = "block-";
  let elems = document.querySelectorAll(".scrollbar-el");
  for (let elem of elems) {
    elem.addEventListener("click", clickFoo.bind(null, elem));
  }
  function clickFoo(elem, ev) {
    console.log(elem);
    for (i = 0; i < elem.classList.length; i++) {
      if (elem.classList[i].includes(maskClass) == true) {
        let nameBlock = "#" + blockClass + elem.classList[i].substr(3, 2);
        let dist = $(nameBlock).offset().top;
        $("html,body").animate({ scrollTop: dist }, 600, "swing");
      }
    }
  }

  $("a[href*='#']").on("click", function (e) {
    e.preventDefault();
    let idBlock = $(this).attr("href");
    let dist = $(idBlock).offset().top;
    $("html,body").animate({ scrollTop: dist }, 600, "swing");
  });

  //! АНИМАЦИЯ ПОЯВЛЕНИЯ СКРЫТОГО МЕНЮ
  $(".button-menu").on("click", function () {
    if ($(".hide-menu").hasClass("hide-menu_open")) {
      // трансформируем кнопку меню
      $("#burger-1").removeClass("burger-1");
      $("#burger-2").removeClass("burger-2");
      $("#burger-3").removeClass("burger-3");
      // исчезает фон меню
      $(".head-wrap").removeClass("head-wrap_open");
      // исчезает скрытое меню

      //$('.hide-menu').removeClass('hide-menu_open');
      $(".hide-menu").addClass("animOpacity0");
      setTimeout(function () {
        $(".hide-menu").removeClass("hide-menu_open animOpacity0");
        // появляется меню-главной страницы
        $(".logo__text, .email, .call").removeClass("animHide");
        if ($(document).width() < 768) {
          $(".header").removeClass("header-mob__open");
          $(".logo-header, .mobile-call").removeClass("animHide");
          $(".logo-header, .mobile-call").animate({ opacity: 1 }, 200);
        }
        $(".logo__text, .email, .call").animate({ opacity: 1 }, 200);
      }, 200);
    } else {
      // трансформируем кнопку меню
      $("#burger-1").addClass("burger-1");
      $("#burger-2").addClass("burger-2");
      $("#burger-3").addClass("burger-3");
      // появляется фон меню
      $(".head-wrap").addClass("head-wrap_open");
      // исчезает меню-главной страницы
      $(".logo__text").animate({ opacity: 0 }, 100, function () {
        $(".logo__text").addClass("animHide");
      });
      $(".email").animate({ opacity: 0 }, 100, function () {
        $(".email").addClass("animHide");
      });
      // для моб.версии
      if ($(document).width() < 768) {
        $(".logo-header, .mobile-call").animate(
          { opacity: 0 },
          100,
          function () {
            $(".logo-header, .mobile-call").addClass("animHide");
          }
        );
        $(".header").addClass("header-mob__open");
      }
      $(".call").animate({ opacity: 0 }, 100, function () {
        // появляется скрытое меню
        $(".call").addClass("animHide");
        $(".hide-menu").addClass("hide-menu_open");
      });
    }
  });

  //! Всплывающяя информация при наведении TOOLTIP
  let elemsTriger = ".level-subtitle__text"; // класс, айди, селектор элементов-ховера
  let preTooltips = "#level-tooltip"; // класс, айди, селектор формы Tooltipа
  $(elemsTriger).each(function(index){
    elTrig = $(this);
    $(elTrig).mouseover(function(){
      tooltip = $(preTooltips + `${index + 1}`);
      $(tooltip).fadeIn(200);
    });
    $(elTrig).mouseout(function(){
      tooltip = $(preTooltips + `${index + 1}`);
      $(tooltip).fadeOut(200);
    });
  });

  // !.............Маска телефона
  $(".input-phone, .sendcontact-phone").mask("+7(999)999-99-99");

  //! ............Popup
  //? Появление
  // .............Popup - Оставить номер
  $(
    ".call-link__text, .agegroup-button, .qustions-button, .partners-button, .booking-button, .footer-button, .request-button"
  ).on("click", function () {
    $(".popup").css("display", "flex");
    $(".popup").animate({ opacity: 1 }, 300);
    $(".popup-box").addClass("popup-sendcontact");
    $(".sendcontact-inner").fadeIn(500);
  });

  // .............Popup - Спасибо
  $(".input-send").on("click", function () {
    if ($(".input-phone").val() != "" && $(document).width() > 767) {
      $(".popup").css("display", "flex");
      $(".popup").animate({ opacity: 1 }, 300);
      $(".popup-box").addClass("popup-thanks");
      $(".thanks-box").fadeIn(500);
    } else if ($(document).width() < 768) {
      $(".popup").css("display", "flex");
      $(".popup").animate({ opacity: 1 }, 300);
      $(".popup-box").addClass("popup-sendcontact");
      $(".sendcontact-inner").fadeIn(500);
    }
  });

  // ...............Popup - Оставить номер -> Спасибо
  $(".sendcontact-button").on("click", function () {
    if ($(".sendcontact-phone").val() != "") {
      $(".sendcontact-inner").fadeOut(300, function () {
        $(".popup-box").removeClass("popup-sendcontact");
        $(".popup-box").addClass("popup-thanks");
        $(".thanks-box").fadeIn(300);
      });
    }
  });

  //? Исчезание
  $(".popup").on("click", function (e) {
    if ($(e.target).hasClass("popup")) {
      $(".popup").animate({ opacity: 0 }, 300, function () {
        $(".popup").css("display", "none");
        $(".thanks-box").fadeOut(0);
        $(".sendcontact-inner").fadeOut(0);
        $(".popup-box").removeClass("popup-sendcontact");
        $(".popup-box").removeClass("popup-thanks");
      });
    }
  });
});

//! Разворачивающееся меню.........
let x = 0;
$(".detail-button").each(function (x) {
  x = x + 1;
  $(this).on("click", { param1: x }, function (e) {
    foo(e.data.param1);
  });
});
function foo(el_num) {
  let el = document.querySelector(`#detail-listbox${el_num}`);
  if (el.style.height === "0px" || !el.style.height) {
    hmax = el.scrollHeight;
    // поворачиваем значек
    let el_img = `#detail-button${el_num}`;
    document.querySelector(el_img).style.transform = "rotate(135deg)";
  } else {
    hmax = 0;
    // поворачиваем значек обратно
    let el_img = `#detail-button${el_num}`;
    document.querySelector(el_img).style.transform = "rotate(0deg)";
  };
  el.style.height = `${hmax}px`;
}
