jQuery(function ($) {
  if (Cookies.get("alert_cookie")) {
  } else {
    $("#alert").css("display", "block");
  }
  $("#alert .close-alert").on("click", function (e) {
    e.preventDefault();
    $("#alert").slideUp(100);
    Cookies.set("alert_cookie", "dismiss", { expires: 30 });
    $(".mega-menu").css("margin-top", "0");
    return false;
  });
  function orphanize() {
    $(".orphan").each(function () {
      let txt = $(this).html().trim().replace("&nbsp;", " ");
      let wordArray = txt.split(" ");
      if (wordArray.length > 1) {
        wordArray[wordArray.length - 2] +=
          "&nbsp;" + wordArray[wordArray.length - 1];
        wordArray.pop();
        $(this).html(wordArray.join(" "));
      }
    });
  }
  orphanize();
  $.fn.plax = function (x, y) {
    this.css({
      webkitTransform: "translate3d(" + x + "px, " + y + "px, 0)",
      MozTransform: "translate3d(" + x + "px, " + y + "px, 0)",
      msTransform: "translateX(" + x + "px) translateY(" + y + "px)",
      OTransform: "translate3d(" + x + "px, " + y + "px, 0)",
      transform: "translate3d(" + x + "px, " + y + "px, 0)",
    });
  };
  $(".testimonial-slider").slick({
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    appendDots: ".dots-container",
  });
  $(".content-main iframe[src^='https://www.youtube.com']").wrap(
    "<div class='youtube-container'></div>"
  );
  $(".content-main iframe[src^='https://www.vimeo.com']").wrap(
    "<div class='vimeo-container'></div>"
  );
  $(".menu-item-has-children > span").on("click", function () {
    $(this).toggleClass("open");
    $(this).next().slideToggle("500");
    $(this)
      .parent()
      .parent()
      .attr("aria-expanded", function (i, attr) {
        return attr == "true" ? "false" : "true";
      });
  });
  $(window).on("load resize", function () {
    if ($(window).width() > 550) {
      $(".service-grid > ul").attr("style", "");
      $(".service-grid > .open").removeClass("open");
    }
  });
  $(".accordion-module .accordion .accordion-header").on("click", function () {
    $(this).next().slideToggle("500");
    $(this)
      .parent()
      .parent()
      .attr("aria-expanded", function (i, attr) {
        return attr == "true" ? "false" : "true";
      });
    $(this).parent().parent().toggleClass("is-open");
    if ($(this).parent().parent().hasClass("is-open")) {
      $(this).next().removeAttr("hidden");
    } else {
      $(this).next().attr("hidden", true);
    }
  });
  $(".accordion-callout .accordion .accordion-header").on("click", function () {
    $(this).parent().siblings().children(".accordion-content").slideUp("500");
    $(this).next().slideToggle("500");
    $(this)
      .parent()
      .siblings()
      .children(".accordion-header")
      .removeClass("active");
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).attr("aria-expanded", true);
      $(this).next().removeAttr("hidden");
    } else {
      $(this).next().attr("hidden", true);
      $(this).attr("aria-expanded", false);
    }
    var slide_target = $(this).data("slide-target");
    $('.slide[data-slide="' + slide_target + '"]').addClass("active");
    $('.slide[data-slide="' + slide_target + '"]')
      .siblings()
      .removeClass("active");
  });
  $(".menu-toggle").on("click", function (e) {
    e.preventDefault();
    $(".menu-toggle").toggleClass("open");
    $(".mega-menu, .mega-menu-bg").toggleClass("is-open");
  });
  $(".search-toggle").on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("open");
  });
  $(".team-member > a").magnificPopup({
    type: "inline",
    mainClass: "",
    closeMarkup:
      '<button title="%title%" type="button" class="mfp-close">Close <svg><use xlink:href="/wp-content/themes/sevita-2021/ui/svg/sprites.svg#toggle_close"></use></svg></button>',
  });
  $(".logo-grid > a.lightbox-link").magnificPopup({
    type: "inline",
    mainClass: "logo-popup",
    closeMarkup:
      '<button title="%title%" type="button" class="mfp-close">Close <svg><use xlink:href="/wp-content/themes/sevita-2021/ui/svg/sprites.svg#toggle_close"></use></svg></button>',
    removalDelay: 300,
    mainClass: "mfp-fade",
  });
  $(".testimonial-images-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".testimonial-text-slider",
  });
  $(".testimonial-text-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".testimonial-images-slider",
    dots: false,
    appendArrows: $(".slick-nav-container"),
  });
  $(".load-more a").on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass("loading");
    var link = jQuery(this).attr("href");
    var $content = ".scroll-content";
    var $anchor = ".load-more a";
    var $next_href = $($anchor).attr("href");
    $.get(link + "", function (data) {
      var lastel = $(".scroll-content .post-content:last-child");
      var $new_content = $($content, data).wrapInner("").html();
      $next_href = $($anchor, data).attr("href");
      $(".scroll-content .post-content:last-child").after($new_content).focus();
      $(".load-more a").attr("href", $next_href);
      var nlink = $(".load-more a").attr("href");
      if (nlink == link) {
        $(".load-more a").hide();
      }
      lastel.next().find("a").focus();
    }).done(function (data) {
      $(".load-more.loading").removeClass("loading");
    });
  });
  $("#service-links").on("change", function () {
    var url = $(this).val();
    if (url) {
      window.location = url;
    }
    return false;
  });
  if ($("#filter_services").length) {
    var real_services = [];
    var all_services = $("#filter_services").data("services");
    all_services = all_services.split("|");
    all_services.forEach(function (service) {
      var these_services = service.split("\\");
      these_services = these_services.map((info) =>
        info.replace(/[{}]/, "").replace(/[{}]/, "")
      );
      real_services.push(these_services);
    });
    filterAge("");
    $("#filter_age").on("change", function () {
      filterAge($(this).val());
    });
    function filterAge(age) {
      $("#filter_services").html(
        '<option value="" class="default">Services</option>'
      );
      real_services.forEach(function (service) {
        if (service[1] == age) {
          $("#filter_services").append(
            '<option value="' + service[0] + '">' + service[2] + "</option>"
          );
        }
      });
    }
  }
  new Swiper("#slideshow", {
    navigation: { prevEl: ".arrow--prev", nextEl: ".arrow--next" },
    loop: true,
    autoplay: { delay: 5000 },
  });
  new Swiper("#slideshow2 .swiper-container", {
    loop: true,
    autoHeight: true,
    spaceBetween: 50,
    pagination: { el: "#slideshow2--pagination", clickable: true },
    autoplay: { delay: 5000 },
  });
  if ($(".iframe-resize").length) {
    iFrameResize({ log: true }, ".iframe-resize");
  }
});
function focusIt() {
  document.getElementById("jumptocontent").focus();
}
$(".consent-given input").val("false");
$(".consent input").on("change", function () {
  if ($(this).is(":checked")) {
    $(".consent-given input").val("true");
  } else {
    $(".consent-given input").val("false");
  }
});
$(".email-consent-given input").val("false");
$(".consent-email input").on("change", function () {
  if ($(this).is(":checked")) {
    $(".email-consent-given input").val("true");
  } else {
    $(".email-consent-given input").val("false");
  }
});
$(".tabs li:first").addClass("selected").attr("aria-selected", true).show();
$(".tab-content").hide().attr("hidden", true);
$(".tab-content:first").show();
$(".tabs a").click(function () {
  if ($(this).attr("aria-selected") == true) {
  } else {
    $(".tabs li").removeClass("selected").removeAttr("aria-selected");
    $(this).parent().addClass("selected");
    $(this).attr("aria-selected", true);
    $(".tab-content").hide().attr("hidden", true);
    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn().removeAttr("hidden");
    return false;
  }
});
