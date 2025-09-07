/*-----------------------------------------------------------------------------------

Theme Name: Gerold - Personal Portfolio HTML5 Template
Theme URI: https://themejunction.net/html/gerold/demo/
Author: Theme-Junction
Author URI: https://themeforest.net/user/theme-junction
Description: Gerold - Personal Portfolio HTML5 Template

-----------------------------------------------------------------------------------

/***************************************************
==================== JS INDEX ======================
****************************************************
// Data js
// Sidebar Navigation
// Sticky Header
// Hamburger Menu
// Scroll To Section
// OnePage Active Class
// Portfolio Filter
// Portfolio Gallery Carousel
// Testimonial Carousel
// Nice Select
// ALL Popup
// Preloader
// Sidebar Hover BG Color
// Services Hover BG
// Portfolio Filter BG Color
// Funfact
// WoW Js

****************************************************/

(function ($) {
	"use strict";

	/*------------------------------------------------------
  /  Data js
  /------------------------------------------------------*/
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-bg-image") + ")"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$(document).ready(function ($) {

		/*------------------------------------------------------
  	/  Sticky Header
  	/------------------------------------------------------*/
	var lastScrollTop = 0;
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll > 300) {
			$(".tj-header-area.header-sticky").addClass("sticky");
			$(".tj-header-area.header-sticky").removeClass("sticky-out");
		} else if (scroll < lastScrollTop) {
			if (scroll < 500) {
				$(".tj-header-area.header-sticky").addClass("sticky-out");
				$(".tj-header-area.header-sticky").removeClass("sticky");
			}
		} else {
			$(".tj-header-area.header-sticky").removeClass("sticky");
		}

		lastScrollTop = scroll;
	});
		

		/*------------------------------------------------------
  	/  Hamburger Menu
  	/------------------------------------------------------*/
		$(".menu-bar").on("click", function () {
			$(".menu-bar").toggleClass("menu-bar-toggeled");
			$(".header-menu").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});

		$(".header-menu ul li a").on("click", function () {
			$(".menu-bar").removeClass("menu-bar-toggeled");
			$(".header-menu").removeClass("opened");
			$("body").removeClass("overflow-hidden");
		});

		/*------------------------------------------------------
  	/  OnePage Active Class
  	/------------------------------------------------------*/
		function onPageNav(switchName) {
			const navSwitch = $(switchName);
			const deductHeight = 60;
			let navArr = [];

			navSwitch.each(function (i) {
				let navSwitchHref = $(this).attr("href");
				let tgtOff = $(navSwitchHref).offset().top - deductHeight;
				navArr.push([]);
				navArr[i].switch = $(this);
				navArr[i].tgtOff = tgtOff;
			});
			//        console.log(navArr);
			$(window).scroll(function () {
				for (let i = 0; i < navArr.length; i++) {
					let scroll = $(window).scrollTop();
					let tgtKey = navArr[i];
					let tgtSwitch = tgtKey.switch;
					let tgtOff = tgtKey.tgtOff;
					if (scroll >= tgtOff) {
						navSwitch.parent().removeClass("is-current");
						tgtSwitch.parent().addClass("is-current");
					} else {
						tgtSwitch.parent().removeClass("is-current");
					}
				}
			});
		}
		$(window).on("load resize", function () {
			onPageNav(".side-navbar a");
		});

		$(".header-menu nav ul").onePageNav({
			currentClass: "current-menu-ancestor",
			changeHash: false,
			easing: "swing",
		});

		/*------------------------------------------------------
  	/  Portfolio Filter
  	/------------------------------------------------------*/
		var $grid = $(".portfolio-box").isotope({
			// options
			masonry: {
				columnWidth: ".portfolio-box .portfolio-sizer",
				gutter: ".portfolio-box .gutter-sizer",
			},
			itemSelector: ".portfolio-box .portfolio-item",
			percentPosition: true,
		});

		// filter items on button click
		$(".filter-button-group").on("click", "button", function () {
			$(".filter-button-group button").removeClass("active");
			$(this).addClass("active");

			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		/*------------------------------------------------------
  	/  Portfolio Gallery Carousel
  	/------------------------------------------------------*/
		$(".portfolio_gallery.owl-carousel").owlCarousel({
			items: 2,
			loop: true,
			lazyLoad: true,
			center: true,
			// autoWidth: true,
			autoplayHoverPause: true,
			autoplay: false,
			autoplayTimeout: 5000,
			smartSpeed: 800,
			margin: 30,
			nav: false,
			dots: true,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
					margin: 0,
				},
				// breakpoint from 768 up
				768: {
					items: 2,
					margin: 20,
				},
				992: {
					items: 2,
					margin: 30,
				},
			},
		});

		/*------------------------------------------------------
  	/ Testimonial Carousel
  	/------------------------------------------------------*/
		$(".testimonial-carousel.owl-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			autoplay: false,
			active: true,
			smartSpeed: 1000,
			autoplayTimeout: 7000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 2,
				},
			},
		});

		/*------------------------------------------------------
  	/ Post Gallery Carousel
  	/------------------------------------------------------*/
		$(".tj-post__gallery.owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			margin: 30,
			dots: false,
			nav: true,
			navText: [
				'<i class="fal fa-arrow-left"></i>',
				'<i class="fal fa-arrow-right"></i>',
			],
			autoplay: false,
			smartSpeed: 1000,
			autoplayTimeout: 3000,
		});

		/*------------------------------------------------------
  	/  Nice Select
  	/------------------------------------------------------*/
		$("select").niceSelect();

		/*------------------------------------------------------
  	/  ALL Popup
  	/------------------------------------------------------*/
		if ($(".popup_video").length > 0) {
			$(`.popup_video`).lightcase({
				transition: "elastic",
				showSequenceInfo: false,
				slideshow: false,
				swipe: true,
				showTitle: false,
				showCaption: false,
				controls: true,
			});
		}

		$(".modal-popup").magnificPopup({
			type: "inline",
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: "auto",
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: "popup-mfp",
		});
	});

	$(window).on("load", function () {
		/*------------------------------------------------------
  	/  WoW Js
  	/------------------------------------------------------*/
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 100, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();

		/*------------------------------------------------------
  	/  Preloader
  	/------------------------------------------------------*/
		const svg = document.getElementById("preloaderSvg");
		const tl = gsap.timeline();
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

		tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 1.5,
			y: -100,
			opacity: 0,
		});
		tl.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.easeIn",
		}).to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.easeOut",
		});
		tl.to(".preloader", {
			y: -1500,
		});
		tl.to(".preloader", {
			zIndex: -1,
			display: "none",
		});

		/*------------------------------------------------------
  	/  Sidebar Hover BG Color
  	/------------------------------------------------------*/
		if ($(".side-navbar").length > 0) {
			function sidebar_animation() {
				var active_bg = $(".side-navbar ul .active-bg");

				$(".side-navbar ul li").on("mouseenter", function () {
					var element = $(this);
					activeSidebar(active_bg, element);
				});

				$(".side-navbar ul").on("mouseleave", function () {
					var element = $(".side-navbar ul li.is-current");
					activeSidebar(active_bg, element);
					element.closest("li").siblings().removeClass("mleave");
				});

				// Use MutationObserver to detect changes in the is-current class
				var observer = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						if (
							mutation.attributeName === "class" &&
							mutation.target.classList.contains("is-current")
						) {
							var element = $(".side-navbar ul li.is-current");
							activeSidebar(active_bg, element);
						}
					});
				});

				observer.observe(document.querySelector(".side-navbar ul"), {
					attributes: true,
					subtree: true,
				});

				// Initial setup
				var initialElement = $(".side-navbar ul li.is-current");
				activeSidebar(active_bg, initialElement);
			}

			sidebar_animation();

			function activeSidebar(active_bg, e) {
				if (!e.length) {
					return false;
				}
				var topOff = e.offset().top;
				var height = e.outerHeight();
				var menuTop = $(".side-navbar ul").offset().top;
				e.closest("li").removeClass("mleave");
				e.closest("li").siblings().addClass("mleave");
				active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
			}
		}

		/*------------------------------------------------------
  	/  Services Hover BG
  	/------------------------------------------------------*/
		function service_animation() {
			var active_bg = $(".services-widget .active-bg");
			var element = $(".services-widget .current");
			$(".services-widget .service-item").on("mouseenter", function () {
				var e = $(this);
				activeService(active_bg, e);
			});
			$(".services-widget").on("mouseleave", function () {
				element = $(".services-widget .current");
				activeService(active_bg, element);
				element.closest(".service-item").siblings().removeClass("mleave");
			});
			activeService(active_bg, element);
		}
		service_animation();

		function activeService(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var topOff = e.offset().top;
			var height = e.outerHeight();
			var menuTop = $(".services-widget").offset().top;
			e.closest(".service-item").removeClass("mleave");
			e.closest(".service-item").siblings().addClass("mleave");
			active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
		}

		$(".services-widget .service-item").on("click", function () {
			$(".services-widget .service-item").removeClass("current");
			$(this).addClass("current");
		});

		/*------------------------------------------------------
  	/  Portfolio Filter BG Color
  	/------------------------------------------------------*/
		function filter_animation() {
			var active_bg = $(".portfolio-filter .button-group .active-bg");
			var element = $(".portfolio-filter .button-group .active");
			$(".portfolio-filter .button-group button").on("click", function () {
				var e = $(this);
				activeFilterBtn(active_bg, e);
			});
			activeFilterBtn(active_bg, element);
		}
		filter_animation();

		function activeFilterBtn(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var leftOff = e.offset().left;
			var width = e.outerWidth();
			var menuLeft = $(".portfolio-filter .button-group").offset().left;
			e.closest("button").removeClass("active");
			e.closest("button")
				.siblings()
				.addClass(".portfolio-filter .button-group");
			active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
		}

		/*------------------------------------------------------
  	/  Funfact
  	/------------------------------------------------------*/
		if ($(".odometer").length > 0) {
			$(".odometer").appear(function () {
				var odo = $(".odometer");
				odo.each(function () {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
		}
	});


	/*------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('imgCompareCrop');
  const afterImg = document.getElementById('imgCompareAfter');
  const handle = document.getElementById('imgCompareHandle');
  let dragging = false;

  function setPosition(percent) {
    percent = Math.max(0, Math.min(100, percent));
    // The after image is clipped to show only the left side up to the handle.
    afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    handle.style.left = percent + '%';
  }

  function getRelativeX(e) {
    const rect = container.getBoundingClientRect();
    let clientX;
    if (e.touches) clientX = e.touches[0].clientX;
    else clientX = e.clientX;
    return ((clientX - rect.left) / rect.width) * 100;
  }

  function onDrag(e) {
    if (!dragging) return;
    setPosition(getRelativeX(e));
  }

  function onStart(e) {
    dragging = true;
    document.body.style.userSelect = 'none';
    onDrag(e);
  }
  function onEnd() {
    dragging = false;
    document.body.style.userSelect = '';
  }

  handle.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', onEnd);

  handle.addEventListener('touchstart', onStart, {passive:false});
  window.addEventListener('touchmove', onDrag, {passive:false});
  window.addEventListener('touchend', onEnd);

  // Also allow clicking on the image area to set handle
  container.addEventListener('mousedown', function(e) {
    if (e.target !== handle) onStart(e);
  });
  container.addEventListener('touchstart', function(e) {
    if (e.target !== handle) onStart(e);
  }, {passive:false});

  // Initialize to center
  setPosition(50);
});


// Place this AFTER your DOM is loaded and after the slider/init code
(function autoAnimateComparison() {
  const container = document.getElementById('imgCompareCrop');
  const afterImg = document.getElementById('imgCompareAfter');
  const handle = document.getElementById('imgCompareHandle');
  let percent = 0;
  let direction = 1; // 1 = forward, -1 = backward
  let interval = null;
  let speed = 0.5; // percent per frame; lower = slower

  function setPosition(p) {
    afterImg.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    handle.style.left = p + '%';
  }

  function step() {
    percent += direction * speed;
    if (percent >= 100) {
      percent = 100;
      direction = -1;
    } else if (percent <= 0) {
      percent = 0;
      direction = 1;
    }
    setPosition(percent);
    requestAnimationFrame(step);
  }

  // Start animation automatically
  setPosition(percent);
  requestAnimationFrame(step);
})();



/*------------------------------------------------------*/
// --- Custom Video Player ---
const video = document.getElementById('customVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');
const progressContainer = document.getElementById('progressContainer');
const playedBar = document.getElementById('playedBar');
const bufferedBar = document.getElementById('bufferedBar');
const hoverBar = document.getElementById('hoverBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const overlay = document.getElementById('videoOverlay');
const overlayIcon = document.getElementById('overlayIcon');
const controls = document.getElementById('videoControls');

// Auto-hide controls
let controlsTimeout;
function showControls() {
    controls.classList.add('show');
    controls.classList.remove('hide');
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(hideControls, 5000);
}
function hideControls() {
    controls.classList.remove('show');
    controls.classList.add('hide');
}
function immediateShowControls() {
    controls.classList.add('show');
    controls.classList.remove('hide');
    clearTimeout(controlsTimeout);
}

// Show controls initially
showControls();

// Listen for mouse/touch interactions
['mousemove', 'mouseenter', 'touchstart', 'touchmove', 'click'].forEach(evt => {
    video.addEventListener(evt, showControls);
    controls.addEventListener(evt, showControls);
});

// Also show on progress bar interactions
progressContainer.addEventListener('mousemove', showControls);
progressContainer.addEventListener('mouseenter', showControls);
progressContainer.addEventListener('mouseleave', showControls);

// Hide controls when mouse leaves video area (optional for desktop)
video.addEventListener('mouseleave', () => {
    controlsTimeout = setTimeout(hideControls, 2000);
});

// Prevent controls from hiding while hovered
controls.addEventListener('mouseenter', immediateShowControls);
controls.addEventListener('mouseleave', showControls);

// Don't hide controls when video is paused
video.addEventListener('pause', immediateShowControls);

// (Rest of your video logic below...)

function formatTime(s) {
    if (!isFinite(s)) return "00:00";
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return (m<10?'0':'')+m+':'+(ss<10?'0':'')+ss;
}
function showOverlay(icon) {
    overlayIcon.textContent = icon;
    overlay.style.display = 'flex';
    overlay.style.opacity = 1;
    setTimeout(() => {
        overlay.style.opacity = 0;
        setTimeout(() => overlay.style.display = 'none', 350);
    }, 500);
}

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        showOverlay('play_arrow');
    } else {
        video.pause();
        showOverlay('pause');
    }
});
playPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (video.paused) video.play();
    else video.pause();
});
rewindBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    video.currentTime = Math.max(0, video.currentTime - 10);
});
forwardBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
});
video.addEventListener('play', () => playPauseIcon.textContent = 'pause');
video.addEventListener('pause', () => playPauseIcon.textContent = 'play_arrow');

video.addEventListener('timeupdate', updateProgress);
video.addEventListener('progress', updateBuffer);
video.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(video.duration);
    updateBuffer();
    updateProgress();
});
function updateProgress() {
    const percent = (video.currentTime/video.duration)*100 || 0;
    playedBar.style.width = percent + '%';
    currentTimeEl.textContent = formatTime(video.currentTime);
    durationEl.textContent = formatTime(video.duration);
}
function updateBuffer() {
    let buffered = 0;
    if (video.buffered.length) {
        buffered = video.buffered.end(video.buffered.length-1);
    }
    bufferedBar.style.width = ((buffered/video.duration)*100 || 0) + '%';
}

progressContainer.addEventListener('mousemove', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    hoverBar.style.left = 0;
    hoverBar.style.width = (percent*100)+'%';
    hoverBar.style.display = 'block';
    let tooltip = document.getElementById('progressTooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'progressTooltip';
        tooltip.style.position = 'absolute';
        tooltip.style.top = '-28px';
        tooltip.style.background = 'rgba(0,0,0,0.8)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '2px 8px';
        tooltip.style.fontSize = '12px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.zIndex = 10;
        progressContainer.appendChild(tooltip);
    }
    const t = percent * video.duration;
    tooltip.textContent = formatTime(t);
    tooltip.style.left = (x-20)+'px';
});
progressContainer.addEventListener('mouseleave', () => {
    hoverBar.style.display = 'none';
    const tooltip = document.getElementById('progressTooltip');
    if (tooltip) tooltip.remove();
});
progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    video.currentTime = percent * video.duration;
    video.play();
});
	
	
})(jQuery);