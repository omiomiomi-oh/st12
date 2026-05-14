(function () {
  'use strict';

  /**
   * DOM 준비가 완료된 후 콜백을 실행합니다.
   * Cafe24 환경에서는 defer 없이도 안전하게 실행되도록 처리합니다.
   */
  function onDomReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  /**
   * Swiper 인스턴스 생성 및 autoplay 토글 버튼 초기화
   */
  function initSwiperPlayToggle() {
    var swiper1 = new Swiper('.swiper1', {
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        addIcons: false,
      },
    });

    var playToggle = document.querySelector('.swiper-button-play-toggle');
    if (!playToggle) {
      return;
    }

    playToggle.addEventListener('click', function () {
      if (swiper1.autoplay.running) {
        swiper1.autoplay.stop();
        playToggle.classList.remove('is-play');
        playToggle.classList.add('is-pause');
      } else {
        swiper1.autoplay.start();
        playToggle.classList.remove('is-pause');
        playToggle.classList.add('is-play');
      }
    });

    // 초기 상태는 정지 상태로 설정합니다.
    swiper1.autoplay.stop();
  }

  onDomReady(initSwiperPlayToggle);
})();
