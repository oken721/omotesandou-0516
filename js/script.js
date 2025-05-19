luxy.init({
  wrapper: '#luxy-wrapper',
  wrapperSpeed: 0.4,
});

jQuery("#js-button-top").on("click", function () {
  jQuery("body, html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

jQuery(".js-modal-open").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  jQuery("#js-about-modal")[0].showModal();
  return false;
});

jQuery(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  jQuery("#js-about-modal")[0].close();
});

jQuery("#js-about-modal").on("click", function(e) {
  // e.targetがdialog本体自身（背景）だった場合のみ閉じる
  if (e.target === this) {
    this.close();
  }
});

