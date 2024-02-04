$("button").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".second-page").offset().top,
    },
    "slow"
  );
});
