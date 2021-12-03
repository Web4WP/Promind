document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.header__burger').addEventListener('click', function (e) {
    document.querySelector('.header__menu').classList.add('open');
    document.querySelector('body').classList.add('menu-open');
  })

  document.querySelector('.header__menu-close').addEventListener('click', function (e) {
    document.querySelector('.header__menu').classList.remove('open');
    document.querySelector('body').classList.remove('menu-open');
  })

  document.querySelector('.header__menu-level_service .header__menu-close').addEventListener('click', function (e) {
    document.querySelector('.header__menu').classList.remove('open');
    document.querySelector('.header__menu-level_service').classList.remove('show');
    document.querySelector('.header__menu-level').classList.remove('hidden');
    document.querySelector('body').classList.remove('menu-open');
  })

  document.querySelector('.header__menu-item_dropdown a').addEventListener('click', function (e) {
    document.querySelector('.header__menu-level').classList.add('hidden');
    document.querySelector('.header__menu-level_service').classList.add('show');
  })

  document.querySelector('.header__menu-back').addEventListener('click', function (e) {
    document.querySelector('.header__menu-level_service').classList.remove('show');
    document.querySelector('.header__menu-level').classList.remove('hidden');
  })

  document.querySelector('.header__nav ul li:first-child').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown').classList.add('show');
  })

  document.querySelector('.header__dropdown').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown').classList.add('show');
  })

  document.querySelector('.header__dropdown').addEventListener('mouseout', function (e) {
    document.querySelector('.header__dropdown').classList.remove('show');
  })

  document.querySelector('.header__nav ul li:first-child').addEventListener('mouseout', function (e) {
    document.querySelector('.header__dropdown').classList.remove('show');
  })

  document.querySelector('.header__dropdown-item').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown-left-wrap').classList.add('hidden');
  })

  document.querySelectorAll('.header__dropdown-item').forEach( function (e) {
    e.addEventListener('mouseover', function (el) {
      document.querySelector('.header__dropdown-left-wrap').classList.add('hidden');
    })
  })

  document.querySelectorAll('.header__dropdown-item').forEach( function (e) {
    e.addEventListener('mouseout', function (el) {
      document.querySelector('.header__dropdown-left-wrap').classList.remove('hidden');
    })
  })

  document.querySelector('.header__dropdown-item_web-design').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown-img_web-design').classList.add('show');
  })

  document.querySelector('.header__dropdown-item_web-design').addEventListener('mouseout', function (e) {
    document.querySelector('.header__dropdown-img_web-design').classList.remove('show');
  })

  document.querySelector('.header__dropdown-item_design').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown-img_design').classList.add('show');
  })

  document.querySelector('.header__dropdown-item_design').addEventListener('mouseout', function (e) {
    document.querySelector('.header__dropdown-img_design').classList.remove('show');
  })

  document.querySelector('.header__dropdown-item_motion').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown-img_motion').classList.add('show');
  })

  document.querySelector('.header__dropdown-item_motion').addEventListener('mouseout', function (e) {
    document.querySelector('.header__dropdown-img_motion').classList.remove('show');
  })

  document.querySelector('.header__dropdown-item_web').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown-img_web').classList.add('show');
  })

  document.querySelector('.header__dropdown-item_web').addEventListener('mouseout', function (e) {
    document.querySelector('.header__dropdown-img_web').classList.remove('show');
  })

  document.querySelector('.header__dropdown-item_support').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown-img_support').classList.add('show');
  })

  document.querySelector('.header__dropdown-item_support').addEventListener('mouseout', function (e) {
    document.querySelector('.header__dropdown-img_support').classList.remove('show');
  })

  document.querySelector('.header__dropdown-item_seo').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown-img_seo').classList.add('show');
  })

  document.querySelector('.header__dropdown-item_seo').addEventListener('mouseout', function (e) {
    document.querySelector('.header__dropdown-img_seo').classList.remove('show');
  })

  document.querySelector('.header__dropdown-item_copy').addEventListener('mouseover', function (e) {
    document.querySelector('.header__dropdown-img_copy').classList.add('show');
  })

  document.querySelector('.header__dropdown-item_copy').addEventListener('mouseout', function (e) {
    document.querySelector('.header__dropdown-img_copy').classList.remove('show');
  })

  // Добавляем маску для ввода телефона (Форма заявки - inputmask.min.js)
  let maskPhone = document.querySelector('#userPhone');
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(maskPhone);

  // Добавляем маску для ввода телефона (Форма заявки на вакансию - inputmask.min.js)
  let maskPhoneVacancy = document.querySelector('#userPhoneVacancy');
  let imv = new Inputmask("+7 (999) 999-99-99");
  im.mask(maskPhoneVacancy);


  if (window.location.pathname == '/' || window.location.pathname == '/index.html') {

    // Эффект печатающегося текста на главной странице (typed.min.js)
    new Typed('.hero__text', {
      stringsElement: '.hero__text-strings',
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 2000,
      showCursor: false,
      fadeOut: true,
      loop: true,
    });

    /* Анимация Marquee для партнеров */
    let wrapper = document.querySelector('.hero__partners');
    let marquee = document.querySelector('.hero__partners-wrap');
    let wrapperWidth = wrapper.offsetWidth;
    let marqueeWidth = marquee.scrollWidth;

    function move() {
      let currentTX = getComputedStyle(marquee).transform.split(',');
      if( currentTX[4] === undefined ) {
        currentTX = -1;
      } else {
        currentTX = parseFloat(currentTX[4]) - 1;
      }
      if(-currentTX >= marqueeWidth) {
        marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
       } else {
        marquee.style.transform = 'translateX(' + currentTX + 'px)';
      }
    }

    setInterval(move, 20);

  }

  else if (window.location.pathname == '/support.html') {

    // Слайдер тарифов на странице "Техническая поддержка" (Мобильная версия)
    new Swiper('.support__pane-block_basic', {
      loop: true,
      spaceBetween: 30,
      autoHeight: true,
      pagination: {
        el: ".support__nav-pagination_basic",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
      navigation: {
        nextEl: ".support__slide-header-subtitle"
      }
    });

    new Swiper('.support__pane-block_businnes', {
      loop: true,
      spaceBetween: 30,
      autoHeight: true,
      pagination: {
        el: ".support__nav-pagination_businnes",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
      navigation: {
        nextEl: ".support__slide-header-subtitle"
      }
    });

    new Swiper('.support__pane-block_pro', {
      loop: true,
      spaceBetween: 30,
      autoHeight: true,
      pagination: {
        el: ".support__nav-pagination_pro",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
      navigation: {
        nextEl: ".support__slide-header-subtitle"
      }
    });

    document.querySelector('#pills-profile-tab').addEventListener('click', function (e) {
      document.querySelector('.support__nav-pagination_basic').classList.remove('show');
      document.querySelector('.support__nav-pagination_pro').classList.remove('show');
      document.querySelector('.support__nav-pagination_businnes').classList.add('show');
    })

    document.querySelector('#pills-contact-tab').addEventListener('click', function (e) {
      document.querySelector('.support__nav-pagination_basic').classList.remove('show');
      document.querySelector('.support__nav-pagination_businnes').classList.remove('show');
      document.querySelector('.support__nav-pagination_pro').classList.add('show');
    })

    document.querySelector('#pills-home-tab').addEventListener('click', function (e) {
      document.querySelector('.support__nav-pagination_pro').classList.remove('show');
      document.querySelector('.support__nav-pagination_businnes').classList.remove('show');
      document.querySelector('.support__nav-pagination_basic').classList.add('show');
    })

  }

  else if (window.location.pathname == '/about.html') {

    /* Включаем / выключаем звук на видео по клику */
    let video = document.querySelector('.about-hero__video');
    video.muted = true;
    document.querySelector('.about-hero__sound').addEventListener('click', function (e) {
      e.currentTarget.classList.toggle('off');
      if(video.muted === true) {
        video.muted = false
      }
      else if (video.muted === false) {
        video.muted = true
      }
    });

    bodymovin.loadAnimation({
      container: document.getElementById('aboutDesignMob'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim1.json'
    })

    bodymovin.loadAnimation({
      container: document.getElementById('aboutDesign'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim1.json'
    })

    bodymovin.loadAnimation({
      container: document.getElementById('aboutConversion'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim2.json'
    })

    bodymovin.loadAnimation({
      container: document.getElementById('aboutConversionMob'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim2.json'
    })

    bodymovin.loadAnimation({
      container: document.getElementById('aboutSpeed'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim3.json'
    })

    bodymovin.loadAnimation({
      container: document.getElementById('aboutSpeedMob'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim3.json'
    })

    bodymovin.loadAnimation({
      container: document.getElementById('aboutApproach'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim4.json'
    })

    bodymovin.loadAnimation({
      container: document.getElementById('aboutApproachMob'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim4.json'
    })

    bodymovin.loadAnimation({
      container: document.getElementById('aboutSupport'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim5.json'
    })

    bodymovin.loadAnimation({
      container: document.getElementById('aboutSupportMob'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './files/anim5.json'
    })

  }

  else if (window.location.pathname == '/portfolio.html') {

    let mixer = mixitup('.portfolio__wrap');

  }

  else if (window.location.pathname == '/motion.html') {
    new Swiper('.motion-case__sw', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: -62,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: -60,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: -60,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: -60,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: -80,
        },
        1900: {
          slidesPerView: 4,
          spaceBetween: -20,
        },
      },
      spaceBetween: 30,
    });
  }

  else if (window.location.pathname == '/design.html') {

    new Swiper('.design__slider', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      speed: 500,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: ".design__slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
    });

    new Typed('.we__subtitle', {
      stringsElement: '.we__subtitle-wrap',
      typeSpeed: 75,
      backSpeed: 0,
      backDelay: 1400,
      showCursor: false,
      fadeOut: true,
      loop: true,
    });

    new Swiper('.we__slider', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });

    let mixerCase = mixitup('.case__wrap');

  }

  else if (window.location.pathname == '/service.html') {


    $('.services-slider__item').on('click', function() {
      let thisSlide = $(this);
      if(!thisSlide.hasClass('services-slider__item_active')){
        $('.services-slider__item').removeClass('services-slider__item_active');
        $('.services-slider__item').removeClass('small');
        setTimeout(function(){
          if(thisSlide.index() == 0){
            $('.services-slider__item').removeClass('first second third');
            $('.services-slider__item:nth-child(1)').addClass('first');
            $('.services-slider__item:nth-child(2)').addClass('second');
            $('.services-slider__item:nth-child(3)').addClass('third');
            setTimeout(function(){
              thisSlide.addClass('services-slider__item_active');
            }, 0)
          }else if(thisSlide.index() == 1){
            $('.services-slider__item').removeClass('first second third');
            $('.services-slider__item:nth-child(1)').addClass('second');
            $('.services-slider__item:nth-child(2)').addClass('first');
            $('.services-slider__item:nth-child(3)').addClass('third');
            setTimeout(function(){
              thisSlide.addClass('services-slider__item_active');
            }, 0)
          }else if(thisSlide.index() == 2){
            $('.services-slider__item').removeClass('first second third');
            $('.services-slider__item:nth-child(1)').addClass('second');
            $('.services-slider__item:nth-child(2)').addClass('third');
            $('.services-slider__item:nth-child(3)').addClass('first');
            setTimeout(function(){
              thisSlide.addClass('services-slider__item_active');
            }, 0)
          }
          //thisSlide.addClass('services-slider__item_active');
        }, 0)
      }
    })

    new Typed('#serv-code', {
      strings: [
        '<div class="code__line">'
        +'	<span class="code__color_blue">var</span> view = <span class="code__color_orange">UILabel</span>()'
        +'	<br>view.frame = <span class="code__color_orange">CGRect</span>(x: <span class="code__color_orange">0</span>, y: <span class="code__color_orange">0</span>, width: <span class="code__color_orange">745</span>, height: <span class="code__color_orange">518</span>)'
        +'	<br>view.backgroundColor = .white'
        +'</div>'
        +'<div class="code__line">'
        +'	let image0 = <span class="code__color_orange">UIImage</span>(named: <span class="code__color_green">"25332.jpg"</span>)?.cgImage'
        +'	<br>let layer0 = <span class="code__color_orange">CALayer</span>()'
        +'	<br>layer0.contents = image0'
        +'	<br>layer0.transform = <span class="code__color_orange">CATransform3DMakeAffineTransform(CGAffineTransform</span>(a: <span class="code__color_orange">1</span>, b: <span class="code__color_orange">0</span>, <span class="code__color_orange">C</span>: <span class="code__color_orange">0</span>, d: <span class="code__color_orange">0.96</span>, tx: <span class="code__color_orange">0</span>, <br>ty: <span class="code__color_orange">0.02</span>))'
        +'	<br>layer0.bound = view.bounds'
        +'	<br>layer0.position = view.center'
        +'	<br>view.layer.addSublayer(layer0)'
        +'</div>'
        +'<div class="code__line">'
        +'	<span class="code__color_blue">var</span> parent = <span class="code__color_blue">self</span>.view!'
        +'	<br>parent.addSubview(view)'
        +'	<br>view.translatesAutoresizingMaskIntoConstraints = <span class="code__color_orange">false</span>'
        +'	<br>view.widthAnchor.constraint(equalToConstant: <span class="code__color_orange">745</span>).isActive = <span class="code__color_orange">true</span>'
        +'	<br>view.heightAnchor.constraint(equalToConstant: <span class="code__color_orange">518</span>).isActive = <span class="code__color_orange">true</span>'
        +'	<br>view.leadingAnchor.constraint(equalTo: parent.leadingAnchor, constant: -<span class="code__color_orange">25</span>).isActive = <span class="code__color_orange">true</span>'
        +'	<br>view.topAnchor.constraint(equalTo: parent.topAnchor, constant: <span class="code__color_orange">4469</span>).isActive = <span class="code__color_orange">true</span>'
        +'</div>'
      ],
      typeSpeed: 0,
      backSpeed: 20,
      backDelay: 200,
      showCursor: false,
      fadeOut: true,
      loop: false,
    });



  }

  else if (window.location.pathname !== '/vacancy.html' && window.location.pathname !== '/dev.html' && window.location.pathname !== '/project.html' && window.location.pathname !== '/privacy.html') {

    // Добавляем маску для ввода телефона (Форма CTA-блока - inputmask.min.js)
    let ctaForm = document.querySelector('#userPhoneCta');
    let imcta = new Inputmask("+7 (999) 999-99-99");
    imcta.mask(ctaForm);

  }

})
