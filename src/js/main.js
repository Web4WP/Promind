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

  // Добавляем маску для ввода телефона (Форма CTA-блока - inputmask.min.js)
  let ctaForm = document.querySelector('#userPhoneCta');
  let imcta = new Inputmask("+7 (999) 999-99-99");
  imcta.mask(ctaForm);

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




  if (window.location.pathname == '/index.html') {



  }
  else if (window.location.pathname == '/page-name.html') {



  }
  else {



  }

})
