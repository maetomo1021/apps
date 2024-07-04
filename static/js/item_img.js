//上部画像の設定
$('.gallery').slick({
    infinite: true,
    fade: true,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    asNavFor: '.choice-btn',
  });
  
  //選択画像の設定
  $('.choice-btn').slick({
    infinite: true,
    slidesToShow: 4,
    focusOnSelect: true, //フォーカスの有効化
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    asNavFor: '.gallery',
  });
