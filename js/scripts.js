(function ($) {
  $(document).ready(function () {
    // Scroll to Top
    jQuery(".scrolltotop").click(function () {
      jQuery("html").animate({ scrollTop: "0px" }, 400);
      return false;
    });

    jQuery(window).scroll(function () {
      var upto = jQuery(window).scrollTop();
      if (upto > 500) {
        jQuery(".scrolltotop").fadeIn();
      } else {
        jQuery(".scrolltotop").fadeOut();
      }
    });

    $(function () {
      $(".acc__title").click(function (j) {
        var dropDown = $(this).closest(".acc__card").find(".acc__panel");
        $(this).closest(".acc").find(".acc__panel").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this)
            .closest(".acc")
            .find(".acc__title.active")
            .removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
      });
    });
  });
})(jQuery);
