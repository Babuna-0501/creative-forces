(function (e) {
  var n = !1;
  if (
    ("function" == typeof define && define.amd && (define(e), (n = !0)),
    "object" == typeof exports && ((module.exports = e()), (n = !0)),
    !n)
  ) {
    var o = window.Cookies,
      t = (window.Cookies = e());
    t.noConflict = function () {
      return (window.Cookies = o), t;
    };
  }
})(function () {
  function e() {
    for (var e = 0, n = {}; e < arguments.length; e++) {
      var o = arguments[e];
      for (var t in o) n[t] = o[t];
    }
    return n;
  }
  function n(o) {
    function t(n, r, i) {
      var c;
      if ("undefined" != typeof document) {
        if (arguments.length > 1) {
          if (
            "number" == typeof (i = e({ path: "/" }, t.defaults, i)).expires
          ) {
            var a = new Date();
            a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires),
              (i.expires = a);
          }
          i.expires = i.expires ? i.expires.toUTCString() : "";
          try {
            (c = JSON.stringify(r)), /^[\{\[]/.test(c) && (r = c);
          } catch (e) {}
          (r = o.write
            ? o.write(r, n)
            : encodeURIComponent(String(r)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (n = (n = (n = encodeURIComponent(String(n))).replace(
              /%(23|24|26|2B|5E|60|7C)/g,
              decodeURIComponent
            )).replace(/[\(\)]/g, escape));
          var s = "";
          for (var f in i)
            i[f] && ((s += "; " + f), !0 !== i[f] && (s += "=" + i[f]));
          return (document.cookie = n + "=" + r + s);
        }
        n || (c = {});
        for (
          var p = document.cookie ? document.cookie.split("; ") : [],
            d = /(%[0-9A-Z]{2})+/g,
            u = 0;
          u < p.length;
          u++
        ) {
          var l = p[u].split("="),
            C = l.slice(1).join("=");
          this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
          try {
            var g = l[0].replace(d, decodeURIComponent);
            if (
              ((C = o.read
                ? o.read(C, g)
                : o(C, g) || C.replace(d, decodeURIComponent)),
              this.json)
            )
              try {
                C = JSON.parse(C);
              } catch (e) {}
            if (n === g) {
              c = C;
              break;
            }
            n || (c[g] = C);
          } catch (e) {}
        }
        return c;
      }
    }
    return (
      (t.set = t),
      (t.get = function (e) {
        return t.call(t, e);
      }),
      (t.getJSON = function () {
        return t.apply({ json: !0 }, [].slice.call(arguments));
      }),
      (t.defaults = {}),
      (t.remove = function (n, o) {
        t(n, "", e(o, { expires: -1 }));
      }),
      (t.withConverter = n),
      t
    );
  }
  return n(function () {});
});
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
(function (a) {
  typeof define == "function" && define.amd
    ? define(["jquery"], a)
    : typeof exports == "object"
    ? a(require("jquery"))
    : a(window.jQuery || window.Zepto);
})(function (a) {
  var b = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    e = "BeforeAppend",
    f = "MarkupParse",
    g = "Open",
    h = "Change",
    i = "mfp",
    j = "." + i,
    k = "mfp-ready",
    l = "mfp-removing",
    m = "mfp-prevent-close",
    n,
    o = function () {},
    p = !!window.jQuery,
    q,
    r = a(window),
    s,
    t,
    u,
    v,
    w = function (a, b) {
      n.ev.on(i + a + j, b);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (b, c) {
      n.ev.triggerHandler(i + b, c),
        n.st.callbacks &&
          ((b = b.charAt(0).toLowerCase() + b.slice(1)),
          n.st.callbacks[b] &&
            n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]));
    },
    z = function (b) {
      if (b !== v || !n.currTemplate.closeBtn)
        (n.currTemplate.closeBtn = a(
          n.st.closeMarkup.replace("%title%", n.st.tClose)
        )),
          (v = b);
      return n.currTemplate.closeBtn;
    },
    A = function () {
      a.magnificPopup.instance ||
        ((n = new o()), n.init(), (a.magnificPopup.instance = n));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (a.transition !== undefined) return !0;
      while (b.length) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (o.prototype = {
    constructor: o,
    init: function () {
      var b = navigator.appVersion;
      (n.isLowIE = n.isIE8 = document.all && !document.addEventListener),
        (n.isAndroid = /android/gi.test(b)),
        (n.isIOS = /iphone|ipad|ipod/gi.test(b)),
        (n.supportsTransition = B()),
        (n.probablyMobile =
          n.isAndroid ||
          n.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (s = a(document)),
        (n.popupsCache = {});
    },
    open: function (b) {
      var c;
      if (b.isObj === !1) {
        (n.items = b.items.toArray()), (n.index = 0);
        var d = b.items,
          e;
        for (c = 0; c < d.length; c++) {
          (e = d[c]), e.parsed && (e = e.el[0]);
          if (e === b.el[0]) {
            n.index = c;
            break;
          }
        }
      } else
        (n.items = a.isArray(b.items) ? b.items : [b.items]),
          (n.index = b.index || 0);
      if (n.isOpen) {
        n.updateItemHTML();
        return;
      }
      (n.types = []),
        (u = ""),
        b.mainEl && b.mainEl.length ? (n.ev = b.mainEl.eq(0)) : (n.ev = s),
        b.key
          ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}),
            (n.currTemplate = n.popupsCache[b.key]))
          : (n.currTemplate = {}),
        (n.st = a.extend(!0, {}, a.magnificPopup.defaults, b)),
        (n.fixedContentPos =
          n.st.fixedContentPos === "auto"
            ? !n.probablyMobile
            : n.st.fixedContentPos),
        n.st.modal &&
          ((n.st.closeOnContentClick = !1),
          (n.st.closeOnBgClick = !1),
          (n.st.showCloseBtn = !1),
          (n.st.enableEscapeKey = !1)),
        n.bgOverlay ||
          ((n.bgOverlay = x("bg").on("click" + j, function () {
            n.close();
          })),
          (n.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + j, function (a) {
              n._checkIfClose(a.target) && n.close();
            })),
          (n.container = x("container", n.wrap))),
        (n.contentContainer = x("content")),
        n.st.preloader &&
          (n.preloader = x("preloader", n.container, n.st.tLoading));
      var h = a.magnificPopup.modules;
      for (c = 0; c < h.length; c++) {
        var i = h[c];
        (i = i.charAt(0).toUpperCase() + i.slice(1)), n["init" + i].call(n);
      }
      y("BeforeOpen"),
        n.st.showCloseBtn &&
          (n.st.closeBtnInside
            ? (w(f, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (u += " mfp-close-btn-in"))
            : n.wrap.append(z())),
        n.st.alignTop && (u += " mfp-align-top"),
        n.fixedContentPos
          ? n.wrap.css({
              overflow: n.st.overflowY,
              overflowX: "hidden",
              overflowY: n.st.overflowY,
            })
          : n.wrap.css({ top: r.scrollTop(), position: "absolute" }),
        (n.st.fixedBgPos === !1 ||
          (n.st.fixedBgPos === "auto" && !n.fixedContentPos)) &&
          n.bgOverlay.css({ height: s.height(), position: "absolute" }),
        n.st.enableEscapeKey &&
          s.on("keyup" + j, function (a) {
            a.keyCode === 27 && n.close();
          }),
        r.on("resize" + j, function () {
          n.updateSize();
        }),
        n.st.closeOnContentClick || (u += " mfp-auto-cursor"),
        u && n.wrap.addClass(u);
      var l = (n.wH = r.height()),
        m = {};
      if (n.fixedContentPos && n._hasScrollBar(l)) {
        var o = n._getScrollbarSize();
        o && (m.marginRight = o);
      }
      n.fixedContentPos &&
        (n.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (m.overflow = "hidden"));
      var p = n.st.mainClass;
      return (
        n.isIE7 && (p += " mfp-ie7"),
        p && n._addClassToMFP(p),
        n.updateItemHTML(),
        y("BuildControls"),
        a("html").css(m),
        n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || a(document.body)),
        (n._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          n.content
            ? (n._addClassToMFP(k), n._setFocus())
            : n.bgOverlay.addClass(k),
            s.on("focusin" + j, n._onFocusIn);
        }, 16),
        (n.isOpen = !0),
        n.updateSize(l),
        y(g),
        b
      );
    },
    close: function () {
      if (!n.isOpen) return;
      y(c),
        (n.isOpen = !1),
        n.st.removalDelay && !n.isLowIE && n.supportsTransition
          ? (n._addClassToMFP(l),
            setTimeout(function () {
              n._close();
            }, n.st.removalDelay))
          : n._close();
    },
    _close: function () {
      y(b);
      var c = l + " " + k + " ";
      n.bgOverlay.detach(),
        n.wrap.detach(),
        n.container.empty(),
        n.st.mainClass && (c += n.st.mainClass + " "),
        n._removeClassFromMFP(c);
      if (n.fixedContentPos) {
        var e = { marginRight: "" };
        n.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      s.off("keyup" + j + " focusin" + j),
        n.ev.off(j),
        n.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        n.bgOverlay.attr("class", "mfp-bg"),
        n.container.attr("class", "mfp-container"),
        n.st.showCloseBtn &&
          (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) &&
          n.currTemplate.closeBtn &&
          n.currTemplate.closeBtn.detach(),
        n.st.autoFocusLast && n._lastFocusedEl && a(n._lastFocusedEl).focus(),
        (n.currItem = null),
        (n.content = null),
        (n.currTemplate = null),
        (n.prevHeight = 0),
        y(d);
    },
    updateSize: function (a) {
      if (n.isIOS) {
        var b = document.documentElement.clientWidth / window.innerWidth,
          c = window.innerHeight * b;
        n.wrap.css("height", c), (n.wH = c);
      } else n.wH = a || r.height();
      n.fixedContentPos || n.wrap.css("height", n.wH), y("Resize");
    },
    updateItemHTML: function () {
      var b = n.items[n.index];
      n.contentContainer.detach(),
        n.content && n.content.detach(),
        b.parsed || (b = n.parseEl(n.index));
      var c = b.type;
      y("BeforeChange", [n.currItem ? n.currItem.type : "", c]),
        (n.currItem = b);
      if (!n.currTemplate[c]) {
        var d = n.st[c] ? n.st[c].markup : !1;
        y("FirstMarkupParse", d),
          d ? (n.currTemplate[c] = a(d)) : (n.currTemplate[c] = !0);
      }
      t && t !== b.type && n.container.removeClass("mfp-" + t + "-holder");
      var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](
        b,
        n.currTemplate[c]
      );
      n.appendContent(e, c),
        (b.preloaded = !0),
        y(h, b),
        (t = b.type),
        n.container.prepend(n.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, b) {
      (n.content = a),
        a
          ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0
            ? n.content.find(".mfp-close").length || n.content.append(z())
            : (n.content = a)
          : (n.content = ""),
        y(e),
        n.container.addClass("mfp-" + b + "-holder"),
        n.contentContainer.append(n.content);
    },
    parseEl: function (b) {
      var c = n.items[b],
        d;
      c.tagName
        ? (c = { el: a(c) })
        : ((d = c.type), (c = { data: c, src: c.src }));
      if (c.el) {
        var e = n.types;
        for (var f = 0; f < e.length; f++)
          if (c.el.hasClass("mfp-" + e[f])) {
            d = e[f];
            break;
          }
        (c.src = c.el.attr("data-mfp-src")),
          c.src || (c.src = c.el.attr("href"));
      }
      return (
        (c.type = d || n.st.type || "inline"),
        (c.index = b),
        (c.parsed = !0),
        (n.items[b] = c),
        y("ElementParse", c),
        n.items[b]
      );
    },
    addGroup: function (a, b) {
      var c = function (c) {
        (c.mfpEl = this), n._openClick(c, a, b);
      };
      b || (b = {});
      var d = "click.magnificPopup";
      (b.mainEl = a),
        b.items
          ? ((b.isObj = !0), a.off(d).on(d, c))
          : ((b.isObj = !1),
            b.delegate
              ? a.off(d).on(d, b.delegate, c)
              : ((b.items = a), a.off(d).on(d, c)));
    },
    _openClick: function (b, c, d) {
      var e =
        d.midClick !== undefined
          ? d.midClick
          : a.magnificPopup.defaults.midClick;
      if (
        !e &&
        (b.which === 2 || b.ctrlKey || b.metaKey || b.altKey || b.shiftKey)
      )
        return;
      var f =
        d.disableOn !== undefined
          ? d.disableOn
          : a.magnificPopup.defaults.disableOn;
      if (f)
        if (a.isFunction(f)) {
          if (!f.call(n)) return !0;
        } else if (r.width() < f) return !0;
      b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()),
        (d.el = a(b.mfpEl)),
        d.delegate && (d.items = c.find(d.delegate)),
        n.open(d);
    },
    updateStatus: function (a, b) {
      if (n.preloader) {
        q !== a && n.container.removeClass("mfp-s-" + q),
          !b && a === "loading" && (b = n.st.tLoading);
        var c = { status: a, text: b };
        y("UpdateStatus", c),
          (a = c.status),
          (b = c.text),
          n.preloader.html(b),
          n.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          n.container.addClass("mfp-s-" + a),
          (q = a);
      }
    },
    _checkIfClose: function (b) {
      if (a(b).hasClass(m)) return;
      var c = n.st.closeOnContentClick,
        d = n.st.closeOnBgClick;
      if (c && d) return !0;
      if (
        !n.content ||
        a(b).hasClass("mfp-close") ||
        (n.preloader && b === n.preloader[0])
      )
        return !0;
      if (b !== n.content[0] && !a.contains(n.content[0], b)) {
        if (d && a.contains(document, b)) return !0;
      } else if (c) return !0;
      return !1;
    },
    _addClassToMFP: function (a) {
      n.bgOverlay.addClass(a), n.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), n.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (n.isIE7 ? s.height() : document.body.scrollHeight) > (a || r.height())
      );
    },
    _setFocus: function () {
      (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus();
    },
    _onFocusIn: function (b) {
      if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target))
        return n._setFocus(), !1;
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(f, [b, c, d]),
        a.each(c, function (c, d) {
          if (d === undefined || d === !1) return !0;
          e = c.split("_");
          if (e.length > 1) {
            var f = b.find(j + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              g === "replaceWith"
                ? f[0] !== d[0] && f.replaceWith(d)
                : g === "img"
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(j + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (n.scrollbarSize === undefined) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (n.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return n.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: o.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          b ? (b = a.extend(!0, {}, b)) : (b = {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (b) {
      A();
      var c = a(this);
      if (typeof b == "string")
        if (b === "open") {
          var d,
            e = p ? c.data("magnificPopup") : c[0].magnificPopup,
            f = parseInt(arguments[1], 10) || 0;
          e.items
            ? (d = e.items[f])
            : ((d = c), e.delegate && (d = d.find(e.delegate)), (d = d.eq(f))),
            n._openClick({ mfpEl: d }, c, e);
        } else
          n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
      else
        (b = a.extend(!0, {}, b)),
          p ? c.data("magnificPopup", b) : (c[0].magnificPopup = b),
          n.addGroup(c, b);
      return c;
    });
  var C = "inline",
    D,
    E,
    F,
    G = function () {
      F && (E.after(F.addClass(D)).detach(), (F = null));
    };
  a.magnificPopup.registerModule(C, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        n.types.push(C),
          w(b + "." + C, function () {
            G();
          });
      },
      getInline: function (b, c) {
        G();
        if (b.src) {
          var d = n.st.inline,
            e = a(b.src);
          if (e.length) {
            var f = e[0].parentNode;
            f &&
              f.tagName &&
              (E || ((D = d.hiddenClass), (E = x(D)), (D = "mfp-" + D)),
              (F = e.after(E).detach().removeClass(D))),
              n.updateStatus("ready");
          } else n.updateStatus("error", d.tNotFound), (e = a("<div>"));
          return (b.inlineElement = e), e;
        }
        return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c;
      },
    },
  });
  var H = "ajax",
    I,
    J = function () {
      I && a(document.body).removeClass(I);
    },
    K = function () {
      J(), n.req && n.req.abort();
    };
  a.magnificPopup.registerModule(H, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        n.types.push(H),
          (I = n.st.ajax.cursor),
          w(b + "." + H, K),
          w("BeforeChange." + H, K);
      },
      getAjax: function (b) {
        I && a(document.body).addClass(I), n.updateStatus("loading");
        var c = a.extend(
          {
            url: b.src,
            success: function (c, d, e) {
              var f = { data: c, xhr: e };
              y("ParseAjax", f),
                n.appendContent(a(f.data), H),
                (b.finished = !0),
                J(),
                n._setFocus(),
                setTimeout(function () {
                  n.wrap.addClass(k);
                }, 16),
                n.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (b.finished = b.loadError = !0),
                n.updateStatus(
                  "error",
                  n.st.ajax.tError.replace("%url%", b.src)
                );
            },
          },
          n.st.ajax.settings
        );
        return (n.req = a.ajax(c)), "";
      },
    },
  });
  var L,
    M = function (b) {
      if (b.data && b.data.title !== undefined) return b.data.title;
      var c = n.st.image.titleSrc;
      if (c) {
        if (a.isFunction(c)) return c.call(n, b);
        if (b.el) return b.el.attr(c) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = n.st.image,
          d = ".image";
        n.types.push("image"),
          w(g + d, function () {
            n.currItem.type === "image" &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(b + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              r.off("resize" + j);
          }),
          w("Resize" + d, n.resizeImage),
          n.isLowIE && w("AfterChange", n.resizeImage);
      },
      resizeImage: function () {
        var a = n.currItem;
        if (!a || !a.img) return;
        if (n.st.image.verticalFit) {
          var b = 0;
          n.isLowIE &&
            (b =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", n.wH - b);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (n.content && n.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var b = 0,
          c = a.img[0],
          d = function (e) {
            L && clearInterval(L),
              (L = setInterval(function () {
                if (c.naturalWidth > 0) {
                  n._onImageHasSize(a);
                  return;
                }
                b > 200 && clearInterval(L),
                  b++,
                  b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500);
              }, e));
          };
        d(1);
      },
      getImage: function (b, c) {
        var d = 0,
          e = function () {
            b &&
              (b.img[0].complete
                ? (b.img.off(".mfploader"),
                  b === n.currItem &&
                    (n._onImageHasSize(b), n.updateStatus("ready")),
                  (b.hasSize = !0),
                  (b.loaded = !0),
                  y("ImageLoadComplete"))
                : (d++, d < 200 ? setTimeout(e, 100) : f()));
          },
          f = function () {
            b &&
              (b.img.off(".mfploader"),
              b === n.currItem &&
                (n._onImageHasSize(b),
                n.updateStatus("error", g.tError.replace("%url%", b.src))),
              (b.hasSize = !0),
              (b.loaded = !0),
              (b.loadError = !0));
          },
          g = n.st.image,
          h = c.find(".mfp-img");
        if (h.length) {
          var i = document.createElement("img");
          (i.className = "mfp-img"),
            b.el &&
              b.el.find("img").length &&
              (i.alt = b.el.find("img").attr("alt")),
            (b.img = a(i).on("load.mfploader", e).on("error.mfploader", f)),
            (i.src = b.src),
            h.is("img") && (b.img = b.img.clone()),
            (i = b.img[0]),
            i.naturalWidth > 0 ? (b.hasSize = !0) : i.width || (b.hasSize = !1);
        }
        return (
          n._parseMarkup(c, { title: M(b), img_replaceWith: b.img }, b),
          n.resizeImage(),
          b.hasSize
            ? (L && clearInterval(L),
              b.loadError
                ? (c.addClass("mfp-loading"),
                  n.updateStatus("error", g.tError.replace("%url%", b.src)))
                : (c.removeClass("mfp-loading"), n.updateStatus("ready")),
              c)
            : (n.updateStatus("loading"),
              (b.loading = !0),
              b.hasSize ||
                ((b.imgHidden = !0),
                c.addClass("mfp-loading"),
                n.findImageSize(b)),
              c)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        N === undefined &&
          (N = document.createElement("p").style.MozTransform !== undefined),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a = n.st.zoom,
          d = ".zoom",
          e;
        if (!a.enabled || !n.supportsTransition) return;
        var f = a.duration,
          g = function (b) {
            var c = b
                .clone()
                .removeAttr("style")
                .removeAttr("class")
                .addClass("mfp-animated-image"),
              d = "all " + a.duration / 1e3 + "s " + a.easing,
              e = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden",
              },
              f = "transition";
            return (
              (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
              c.css(e),
              c
            );
          },
          h = function () {
            n.content.css("visibility", "visible");
          },
          i,
          j;
        w("BuildControls" + d, function () {
          if (n._allowZoom()) {
            clearTimeout(i),
              n.content.css("visibility", "hidden"),
              (e = n._getItemToZoom());
            if (!e) {
              h();
              return;
            }
            (j = g(e)),
              j.css(n._getOffset()),
              n.wrap.append(j),
              (i = setTimeout(function () {
                j.css(n._getOffset(!0)),
                  (i = setTimeout(function () {
                    h(),
                      setTimeout(function () {
                        j.remove(), (e = j = null), y("ZoomAnimationEnded");
                      }, 16);
                  }, f));
              }, 16));
          }
        }),
          w(c + d, function () {
            if (n._allowZoom()) {
              clearTimeout(i), (n.st.removalDelay = f);
              if (!e) {
                e = n._getItemToZoom();
                if (!e) return;
                j = g(e);
              }
              j.css(n._getOffset(!0)),
                n.wrap.append(j),
                n.content.css("visibility", "hidden"),
                setTimeout(function () {
                  j.css(n._getOffset());
                }, 16);
            }
          }),
          w(b + d, function () {
            n._allowZoom() && (h(), j && j.remove(), (e = null));
          });
      },
      _allowZoom: function () {
        return n.currItem.type === "image";
      },
      _getItemToZoom: function () {
        return n.currItem.hasSize ? n.currItem.img : !1;
      },
      _getOffset: function (b) {
        var c;
        b
          ? (c = n.currItem.img)
          : (c = n.st.zoom.opener(n.currItem.el || n.currItem));
        var d = c.offset(),
          e = parseInt(c.css("padding-top"), 10),
          f = parseInt(c.css("padding-bottom"), 10);
        d.top -= a(window).scrollTop() - e;
        var g = {
          width: c.width(),
          height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e,
        };
        return (
          O()
            ? (g["-moz-transform"] = g.transform =
                "translate(" + d.left + "px," + d.top + "px)")
            : ((g.left = d.left), (g.top = d.top)),
          g
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (n.currTemplate[P]) {
        var b = n.currTemplate[P].find("iframe");
        b.length &&
          (a || (b[0].src = Q),
          n.isIE8 && b.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        n.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(b + "." + P, function () {
            R();
          });
      },
      getIframe: function (b, c) {
        var d = b.src,
          e = n.st.iframe;
        a.each(e.patterns, function () {
          if (d.indexOf(this.index) > -1)
            return (
              this.id &&
                (typeof this.id == "string"
                  ? (d = d.substr(
                      d.lastIndexOf(this.id) + this.id.length,
                      d.length
                    ))
                  : (d = this.id.call(this, d))),
              (d = this.src.replace("%id%", d)),
              !1
            );
        });
        var f = {};
        return (
          e.srcAction && (f[e.srcAction] = d),
          n._parseMarkup(c, f, b),
          n.updateStatus("ready"),
          c
        );
      },
    },
  });
  var S = function (a) {
      var b = n.items.length;
      return a > b - 1 ? a - b : a < 0 ? b + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = n.st.gallery,
          d = ".mfp-gallery";
        n.direction = !0;
        if (!c || !c.enabled) return !1;
        (u += " mfp-gallery"),
          w(g + d, function () {
            c.navigateByImgClick &&
              n.wrap.on("click" + d, ".mfp-img", function () {
                if (n.items.length > 1) return n.next(), !1;
              }),
              s.on("keydown" + d, function (a) {
                a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next();
              });
          }),
          w("UpdateStatus" + d, function (a, b) {
            b.text && (b.text = T(b.text, n.currItem.index, n.items.length));
          }),
          w(f + d, function (a, b, d, e) {
            var f = n.items.length;
            d.counter = f > 1 ? T(c.tCounter, e.index, f) : "";
          }),
          w("BuildControls" + d, function () {
            if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
              var b = c.arrowMarkup,
                d = (n.arrowLeft = a(
                  b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                ).addClass(m)),
                e = (n.arrowRight = a(
                  b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")
                ).addClass(m));
              d.click(function () {
                n.prev();
              }),
                e.click(function () {
                  n.next();
                }),
                n.container.append(d.add(e));
            }
          }),
          w(h + d, function () {
            n._preloadTimeout && clearTimeout(n._preloadTimeout),
              (n._preloadTimeout = setTimeout(function () {
                n.preloadNearbyImages(), (n._preloadTimeout = null);
              }, 16));
          }),
          w(b + d, function () {
            s.off(d),
              n.wrap.off("click" + d),
              (n.arrowRight = n.arrowLeft = null);
          });
      },
      next: function () {
        (n.direction = !0), (n.index = S(n.index + 1)), n.updateItemHTML();
      },
      prev: function () {
        (n.direction = !1), (n.index = S(n.index - 1)), n.updateItemHTML();
      },
      goTo: function (a) {
        (n.direction = a >= n.index), (n.index = a), n.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a = n.st.gallery.preload,
          b = Math.min(a[0], n.items.length),
          c = Math.min(a[1], n.items.length),
          d;
        for (d = 1; d <= (n.direction ? c : b); d++)
          n._preloadItem(n.index + d);
        for (d = 1; d <= (n.direction ? b : c); d++)
          n._preloadItem(n.index - d);
      },
      _preloadItem: function (b) {
        b = S(b);
        if (n.items[b].preloaded) return;
        var c = n.items[b];
        c.parsed || (c = n.parseEl(b)),
          y("LazyLoad", c),
          c.type === "image" &&
            (c.img = a('<img class="mfp-img" />')
              .on("load.mfploader", function () {
                c.hasSize = !0;
              })
              .on("error.mfploader", function () {
                (c.hasSize = !0), (c.loadError = !0), y("LazyLoadError", c);
              })
              .attr("src", c.src)),
          (c.preloaded = !0);
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = n.st.retina,
            b = a.ratio;
          (b = isNaN(b) ? b() : b),
            b > 1 &&
              (w("ImageHasSize." + U, function (a, c) {
                c.img.css({
                  "max-width": c.img[0].naturalWidth / b,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (c, d) {
                d.src = a.replaceSrc(d, b);
              }));
        }
      },
    },
  }),
    A();
});
/*! iFrame Resizer (iframeSizer.min.js ) - v4.3.2 - 2021-04-26
 * Desc: Force cross domain iframes to size to content.
 * Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 * Copyright: (c) 2021 David J. Bradshaw - dave@bradshaw.net
 * License: MIT
 */
!(function (u) {
  var f, l, a, x, M, I, k, r, m, F, t, g, z;
  function h() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    );
  }
  function O(e, n, t) {
    e.addEventListener(n, t, !1);
  }
  function R(e, n, t) {
    e.removeEventListener(n, t, !1);
  }
  function o(e) {
    return (
      M +
      "[" +
      ((e = "Host page: " + (n = e)),
      (e =
        window.top !== window.self
          ? window.parentIFrame && window.parentIFrame.getId
            ? window.parentIFrame.getId() + ": " + n
            : "Nested host page: " + n
          : e)) +
      "]"
    );
    var n;
  }
  function i(e) {
    return F[e] ? F[e].log : l;
  }
  function T(e, n) {
    s("log", e, n, i(e));
  }
  function E(e, n) {
    s("info", e, n, i(e));
  }
  function N(e, n) {
    s("warn", e, n, !0);
  }
  function s(e, n, t, i) {
    !0 === i && "object" == typeof window.console && console[e](o(n), t);
  }
  function e(n) {
    function t() {
      i("Height"),
        i("Width"),
        L(
          function () {
            A(y), H(v), l("onResized", y);
          },
          y,
          "init"
        );
    }
    function e() {
      var e = b.substr(I).split(":"),
        n = e[1] ? parseInt(e[1], 10) : 0,
        t = F[e[0]] && F[e[0]].iframe,
        i = getComputedStyle(t);
      return {
        iframe: t,
        id: e[0],
        height:
          n +
          (function (e) {
            if ("border-box" !== e.boxSizing) return 0;
            var n = e.paddingTop ? parseInt(e.paddingTop, 10) : 0,
              e = e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0;
            return n + e;
          })(i) +
          (function (e) {
            if ("border-box" !== e.boxSizing) return 0;
            var n = e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0,
              e = e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0;
            return n + e;
          })(i),
        width: e[2],
        type: e[3],
      };
    }
    function i(e) {
      var n = Number(F[v]["max" + e]),
        t = Number(F[v]["min" + e]),
        i = e.toLowerCase(),
        e = Number(y[i]);
      T(v, "Checking " + i + " is in range " + t + "-" + n),
        e < t && ((e = t), T(v, "Set " + i + " to min value")),
        n < e && ((e = n), T(v, "Set " + i + " to max value")),
        (y[i] = "" + e);
    }
    function o() {
      function e() {
        return i.constructor === Array
          ? (function () {
              var e = 0,
                n = !1;
              for (
                T(
                  v,
                  "Checking connection is from allowed list of origins: " + i
                );
                e < i.length;
                e++
              )
                if (i[e] === t) {
                  n = !0;
                  break;
                }
              return n;
            })()
          : ((e = F[v] && F[v].remoteHost),
            T(v, "Checking connection is from: " + e),
            t === e);
        var e;
      }
      var t = n.origin,
        i = F[v] && F[v].checkOrigin;
      if (i && "" + t != "null" && !e())
        throw new Error(
          "Unexpected message received from: " +
            t +
            " for " +
            y.iframe.id +
            ". Message was: " +
            n.data +
            ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
        );
      return 1;
    }
    function a(e) {
      return b.substr(b.indexOf(":") + x + e);
    }
    function s(t, i) {
      var e, n, o;
      (e = function () {
        var e, n;
        B(
          "Send Page Info",
          "pageInfo:" +
            ((e = document.body.getBoundingClientRect()),
            (n = y.iframe.getBoundingClientRect()),
            JSON.stringify({
              iframeHeight: n.height,
              iframeWidth: n.width,
              clientHeight: Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              ),
              clientWidth: Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              ),
              offsetTop: parseInt(n.top - e.top, 10),
              offsetLeft: parseInt(n.left - e.left, 10),
              scrollTop: window.pageYOffset,
              scrollLeft: window.pageXOffset,
              documentHeight: document.documentElement.clientHeight,
              documentWidth: document.documentElement.clientWidth,
              windowHeight: window.innerHeight,
              windowWidth: window.innerWidth,
            })),
          t,
          i
        );
      }),
        (n = 32),
        z[(o = i)] ||
          (z[o] = setTimeout(function () {
            (z[o] = null), e();
          }, n));
    }
    function r(e) {
      e = e.getBoundingClientRect();
      return (
        S(v),
        {
          x: Math.floor(Number(e.left) + Number(k.x)),
          y: Math.floor(Number(e.top) + Number(k.y)),
        }
      );
    }
    function d(e) {
      var n = e ? r(y.iframe) : { x: 0, y: 0 },
        t = { x: Number(y.width) + n.x, y: Number(y.height) + n.y };
      T(
        v,
        "Reposition requested from iFrame (offset x:" + n.x + " y:" + n.y + ")"
      ),
        window.top !== window.self
          ? window.parentIFrame
            ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](t.x, t.y)
            : N(
                v,
                "Unable to scroll to requested position, window.parentIFrame not found"
              )
          : ((k = t), c(), T(v, "--"));
    }
    function c() {
      !1 !== l("onScroll", k) ? H(v) : j();
    }
    function u(e) {
      var n,
        t = e.split("#")[1] || "",
        e = decodeURIComponent(t),
        i = document.getElementById(e) || document.getElementsByName(e)[0];
      i
        ? ((n = r(i)),
          T(
            v,
            "Moving to in page link (#" + t + ") at x: " + n.x + " y: " + n.y
          ),
          (k = { x: n.x, y: n.y }),
          c(),
          T(v, "--"))
        : window.top !== window.self
        ? window.parentIFrame
          ? window.parentIFrame.moveToAnchor(t)
          : T(
              v,
              "In page link #" +
                t +
                " not found and window.parentIFrame not found"
            )
        : T(v, "In page link #" + t + " not found");
    }
    function f(e) {
      var n,
        t = {};
      (t =
        0 === Number(y.width) && 0 === Number(y.height)
          ? { x: (n = a(9).split(":"))[1], y: n[0] }
          : { x: y.width, y: y.height }),
        l(e, {
          iframe: y.iframe,
          screenX: Number(t.x),
          screenY: Number(t.y),
          type: y.type,
        });
    }
    function l(e, n) {
      return W(v, e, n);
    }
    function m() {
      switch ((F[v] && F[v].firstRun && F[v] && (F[v].firstRun = !1), y.type)) {
        case "close":
          C(y.iframe);
          break;
        case "message":
          (n = a(6)),
            T(
              v,
              "onMessage passed: {iframe: " +
                y.iframe.id +
                ", message: " +
                n +
                "}"
            ),
            l("onMessage", { iframe: y.iframe, message: JSON.parse(n) }),
            T(v, "--");
          break;
        case "mouseenter":
          f("onMouseEnter");
          break;
        case "mouseleave":
          f("onMouseLeave");
          break;
        case "autoResize":
          F[v].autoResize = JSON.parse(a(9));
          break;
        case "scrollTo":
          d(!1);
          break;
        case "scrollToOffset":
          d(!0);
          break;
        case "pageInfo":
          s(F[v] && F[v].iframe, v),
            (r = v),
            e("Add ", O),
            F[r] && (F[r].stopPageInfo = o);
          break;
        case "pageInfoStop":
          F[v] &&
            F[v].stopPageInfo &&
            (F[v].stopPageInfo(), delete F[v].stopPageInfo);
          break;
        case "inPageLink":
          u(a(9));
          break;
        case "reset":
          P(y);
          break;
        case "init":
          t(), l("onInit", y.iframe);
          break;
        default:
          0 === Number(y.width) && 0 === Number(y.height)
            ? N(
                "Unsupported message received (" +
                  y.type +
                  "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"
              )
            : t();
      }
      function e(n, t) {
        function i() {
          F[r] ? s(F[r].iframe, r) : o();
        }
        ["scroll", "resize"].forEach(function (e) {
          T(r, n + e + " listener for sendPageInfo"), t(window, e, i);
        });
      }
      function o() {
        e("Remove ", R);
      }
      var r, n;
    }
    var g,
      h,
      p,
      w,
      b = n.data,
      y = {},
      v = null;
    "[iFrameResizerChild]Ready" === b
      ? (function () {
          for (var e in F) B("iFrame requested init", q(e), F[e].iframe, e);
        })()
      : M === ("" + b).substr(0, I) && b.substr(I).split(":")[0] in F
      ? ((y = e()),
        (v = y.id),
        F[v] && (F[v].loaded = !0),
        (w = y.type in { true: 1, false: 1, undefined: 1 }) &&
          T(v, "Ignoring init message from meta parent page"),
        !w &&
          ((p = !0),
          F[(h = v)] ||
            ((p = !1),
            N(y.type + " No settings for " + h + ". Message was: " + b)),
          p) &&
          (T(v, "Received: " + b),
          (g = !0),
          null === y.iframe &&
            (N(v, "IFrame (" + y.id + ") not found"), (g = !1)),
          g && o() && m()))
      : E(v, "Ignored: " + b);
  }
  function W(e, n, t) {
    var i = null,
      o = null;
    if (F[e]) {
      if ("function" != typeof (i = F[e][n]))
        throw new TypeError(n + " on iFrame[" + e + "] is not a function");
      o = i(t);
    }
    return o;
  }
  function p(e) {
    e = e.id;
    delete F[e];
  }
  function C(e) {
    var n = e.id;
    if (!1 !== W(n, "onClose", n)) {
      T(n, "Removing iFrame: " + n);
      try {
        e.parentNode && e.parentNode.removeChild(e);
      } catch (e) {
        N(e);
      }
      W(n, "onClosed", n), T(n, "--"), p(e);
    } else T(n, "Close iframe cancelled by onClose event");
  }
  function S(e) {
    null === k &&
      T(
        e,
        "Get page position: " +
          (k = {
            x:
              window.pageXOffset !== u
                ? window.pageXOffset
                : document.documentElement.scrollLeft,
            y:
              window.pageYOffset !== u
                ? window.pageYOffset
                : document.documentElement.scrollTop,
          }).x +
          "," +
          k.y
      );
  }
  function H(e) {
    null !== k &&
      (window.scrollTo(k.x, k.y),
      T(e, "Set page position: " + k.x + "," + k.y),
      j());
  }
  function j() {
    k = null;
  }
  function P(e) {
    T(
      e.id,
      "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")
    ),
      S(e.id),
      L(
        function () {
          A(e), B("reset", "reset", e.iframe, e.id);
        },
        e,
        "reset"
      );
  }
  function A(o) {
    function t(e) {
      function n() {
        Object.keys(F).forEach(function (e) {
          function n(e) {
            return "0px" === (F[t] && F[t].iframe.style[e]);
          }
          var t;
          F[(t = e)] &&
            null !== F[t].iframe.offsetParent &&
            (n("height") || n("width")) &&
            B("Visibility change", "resize", F[t].iframe, t);
        });
      }
      function t(e) {
        T("window", "Mutation observed: " + e[0].target + " " + e[0].type),
          c(n, 16);
      }
      var i;
      a ||
        "0" !== o[e] ||
        ((a = !0),
        T(r, "Hidden iFrame detected, creating visibility listener"),
        (i = h()) &&
          (function () {
            var e = document.querySelector("body");
            new i(t).observe(e, {
              attributes: !0,
              attributeOldValue: !1,
              characterData: !0,
              characterDataOldValue: !1,
              childList: !0,
              subtree: !0,
            });
          })());
    }
    function e(e) {
      var n;
      (n = e),
        o.id
          ? ((o.iframe.style[n] = o[n] + "px"),
            T(o.id, "IFrame (" + r + ") " + n + " set to " + o[n] + "px"))
          : T("undefined", "messageData id not set"),
        t(e);
    }
    var r = o.iframe.id;
    F[r] && (F[r].sizeHeight && e("height"), F[r].sizeWidth && e("width"));
  }
  function L(e, n, t) {
    t !== n.type && r && !window.jasmine
      ? (T(n.id, "Requesting animation frame"), r(e))
      : e();
  }
  function B(n, t, i, o, e) {
    function r() {
      var e;
      i && "contentWindow" in i && null !== i.contentWindow
        ? ((e = F[o] && F[o].targetOrigin),
          T(
            o,
            "[" +
              n +
              "] Sending msg to iframe[" +
              o +
              "] (" +
              t +
              ") targetOrigin: " +
              e
          ),
          i.contentWindow.postMessage(M + t, e))
        : N(o, "[" + n + "] IFrame(" + o + ") not found");
    }
    function a() {
      e &&
        F[o] &&
        F[o].warningTimeout &&
        (F[o].msgTimeout = setTimeout(function () {
          !F[o] ||
            F[o].loaded ||
            s ||
            ((s = !0),
            N(
              o,
              "IFrame has not responded within " +
                F[o].warningTimeout / 1e3 +
                " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
            ));
        }, F[o].warningTimeout));
    }
    var s = !1;
    (o = o || i.id), F[o] && (r(), a());
  }
  function q(e) {
    return (
      e +
      ":" +
      F[e].bodyMarginV1 +
      ":" +
      F[e].sizeWidth +
      ":" +
      F[e].log +
      ":" +
      F[e].interval +
      ":" +
      F[e].enablePublicMethods +
      ":" +
      F[e].autoResize +
      ":" +
      F[e].bodyMargin +
      ":" +
      F[e].heightCalculationMethod +
      ":" +
      F[e].bodyBackground +
      ":" +
      F[e].bodyPadding +
      ":" +
      F[e].tolerance +
      ":" +
      F[e].inPageLinks +
      ":" +
      F[e].resizeFrom +
      ":" +
      F[e].widthCalculationMethod +
      ":" +
      F[e].mouseEvents
    );
  }
  function d(i, e) {
    function n(t) {
      var e,
        n = h();
      n &&
        ((e = n),
        i.parentNode &&
          new e(function (e) {
            e.forEach(function (e) {
              Array.prototype.slice.call(e.removedNodes).forEach(function (e) {
                e === i && C(i);
              });
            });
          }).observe(i.parentNode, { childList: !0 })),
        O(i, "load", function () {
          var e, n;
          B("iFrame.onload", t, i, u, !0),
            (e = F[s] && F[s].firstRun),
            (n = F[s] && F[s].heightCalculationMethod in m),
            !e && n && P({ iframe: i, height: 0, width: 0, type: "init" });
        }),
        B("init", t, i, u, !0);
    }
    function t(e) {
      var n = e.split("Callback");
      2 === n.length &&
        ((this[(n = "on" + n[0].charAt(0).toUpperCase() + n[0].slice(1))] =
          this[e]),
        delete this[e],
        N(
          s,
          "Deprecated: '" +
            e +
            "' has been renamed '" +
            n +
            "'. The old method will be removed in the next major version."
        ));
    }
    function o(e) {
      (e = e || {}),
        (F[s] = {
          firstRun: !0,
          iframe: i,
          remoteHost: i.src && i.src.split("/").slice(0, 3).join("/"),
        }),
        (function (e) {
          if ("object" != typeof e)
            throw new TypeError("Options is not an object");
        })(e),
        Object.keys(e).forEach(t, e),
        (function (e) {
          for (var n in g)
            Object.prototype.hasOwnProperty.call(g, n) &&
              (F[s][n] = (Object.prototype.hasOwnProperty.call(e, n) ? e : g)[
                n
              ]);
        })(e),
        F[s] &&
          (F[s].targetOrigin =
            !0 === F[s].checkOrigin
              ? "" === (e = F[s].remoteHost) ||
                null !== e.match(/^(about:blank|javascript:|file:\/\/)/)
                ? "*"
                : e
              : "*");
    }
    var r,
      a,
      s =
        ("" === (r = i.id) &&
          ((i.id =
            ((a = (e && e.id) || g.id + f++),
            null !== document.getElementById(a) && (a += f++),
            (r = a))),
          (l = (e || {}).log),
          T(r, "Added missing iframe ID: " + r + " (" + i.src + ")")),
        r);
    function d(e) {
      var n = F[s][e];
      1 / 0 !== n &&
        0 !== n &&
        ((i.style[e] = "number" == typeof n ? n + "px" : n),
        T(s, "Set " + e + " = " + i.style[e]));
    }
    function c(e) {
      if (F[s]["min" + e] > F[s]["max" + e])
        throw new Error(
          "Value for min" + e + " can not be greater than max" + e
        );
    }
    s in F && "iFrameResizer" in i
      ? N(s, "Ignored iFrame, already setup.")
      : (o(e),
        (function () {
          switch (
            (T(
              s,
              "IFrame scrolling " +
                (F[s] && F[s].scrolling ? "enabled" : "disabled") +
                " for " +
                s
            ),
            (i.style.overflow =
              !1 === (F[s] && F[s].scrolling) ? "hidden" : "auto"),
            F[s] && F[s].scrolling)
          ) {
            case "omit":
              break;
            case !0:
              i.scrolling = "yes";
              break;
            case !1:
              i.scrolling = "no";
              break;
            default:
              i.scrolling = F[s] ? F[s].scrolling : "no";
          }
        })(),
        c("Height"),
        c("Width"),
        d("maxHeight"),
        d("minHeight"),
        d("maxWidth"),
        d("minWidth"),
        ("number" != typeof (F[s] && F[s].bodyMargin) &&
          "0" !== (F[s] && F[s].bodyMargin)) ||
          ((F[s].bodyMarginV1 = F[s].bodyMargin),
          (F[s].bodyMargin = F[s].bodyMargin + "px")),
        n(q(s)),
        F[s] &&
          (F[s].iframe.iFrameResizer = {
            close: C.bind(null, F[s].iframe),
            removeListeners: p.bind(null, F[s].iframe),
            resize: B.bind(null, "Window resize", "resize", F[s].iframe),
            moveToAnchor: function (e) {
              B("Move to anchor", "moveToAnchor:" + e, F[s].iframe, s);
            },
            sendMessage: function (e) {
              B(
                "Send Message",
                "message:" + (e = JSON.stringify(e)),
                F[s].iframe,
                s
              );
            },
          }));
  }
  function c(e, n) {
    null === t &&
      (t = setTimeout(function () {
        (t = null), e();
      }, n));
  }
  function n() {
    "hidden" !== document.visibilityState &&
      (T("document", "Trigger event: Visiblity change"),
      c(function () {
        w("Tab Visable", "resize");
      }, 16));
  }
  function w(t, i) {
    Object.keys(F).forEach(function (e) {
      var n;
      F[(n = e)] &&
        "parent" === F[n].resizeFrom &&
        F[n].autoResize &&
        !F[n].firstRun &&
        B(t, i, F[e].iframe, e);
    });
  }
  function b() {
    O(window, "message", e),
      O(window, "resize", function () {
        var e;
        T("window", "Trigger event: " + (e = "resize")),
          c(function () {
            w("Window " + e, "resize");
          }, 16);
      }),
      O(document, "visibilitychange", n),
      O(document, "-webkit-visibilitychange", n);
  }
  function y() {
    function i(e, n) {
      n &&
        ((function () {
          if (!n.tagName)
            throw new TypeError("Object is not a valid DOM element");
          if ("IFRAME" !== n.tagName.toUpperCase())
            throw new TypeError(
              "Expected <IFRAME> tag, found <" + n.tagName + ">"
            );
        })(),
        d(n, e),
        o.push(n));
    }
    var o;
    return (
      (function () {
        for (
          var e = ["moz", "webkit", "o", "ms"], n = 0;
          n < e.length && !r;
          n += 1
        )
          r = window[e[n] + "RequestAnimationFrame"];
        r
          ? (r = r.bind(window))
          : T("setup", "RequestAnimationFrame not supported");
      })(),
      b(),
      function (e, n) {
        var t;
        switch (
          ((o = []),
          (t = e) &&
            t.enablePublicMethods &&
            N(
              "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
            ),
          typeof n)
        ) {
          case "undefined":
          case "string":
            Array.prototype.forEach.call(
              document.querySelectorAll(n || "iframe"),
              i.bind(u, e)
            );
            break;
          case "object":
            i(e, n);
            break;
          default:
            throw new TypeError("Unexpected data type (" + typeof n + ")");
        }
        return o;
      }
    );
  }
  function v(e) {
    e.fn
      ? e.fn.iFrameResize ||
        (e.fn.iFrameResize = function (t) {
          return this.filter("iframe")
            .each(function (e, n) {
              d(n, t);
            })
            .end();
        })
      : E("", "Unable to bind to jQuery, it is not fully loaded.");
  }
  "undefined" != typeof window &&
    ((x = "message".length),
    (I = (M = "[iFrameSizer]").length),
    (r = window.requestAnimationFrame),
    (g = {
      autoResize: !(t = k = null),
      bodyBackground: null,
      bodyMargin: null,
      bodyMarginV1: 8,
      bodyPadding: null,
      checkOrigin: !(a = l = !1),
      inPageLinks: !(F = {}),
      enablePublicMethods: !(f = 0),
      heightCalculationMethod: "bodyOffset",
      id: "iFrameResizer",
      interval: 32,
      log: !(m = {
        max: 1,
        scroll: 1,
        bodyScroll: 1,
        documentElementScroll: 1,
      }),
      maxHeight: 1 / 0,
      maxWidth: 1 / 0,
      minHeight: 0,
      minWidth: 0,
      mouseEvents: !0,
      resizeFrom: "parent",
      scrolling: !1,
      sizeHeight: !0,
      sizeWidth: !1,
      warningTimeout: 5e3,
      tolerance: 0,
      widthCalculationMethod: "scroll",
      onClose: function () {
        return !0;
      },
      onClosed: function () {},
      onInit: function () {},
      onMessage: function () {
        N("onMessage function not defined");
      },
      onMouseEnter: function () {},
      onMouseLeave: function () {},
      onResized: function () {},
      onScroll: function () {
        return !0;
      },
    }),
    (z = {}),
    window.jQuery && v(window.jQuery),
    "function" == typeof define && define.amd
      ? define([], y)
      : "object" == typeof module &&
        "object" == typeof module.exports &&
        (module.exports = y()),
    (window.iFrameResize = window.iFrameResize || y()));
})();
