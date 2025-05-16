luxy.init({
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