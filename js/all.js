		$(function() {

			$("li.tabs_color").on('click', function () {

				$(this).addClass('active_cc').siblings('li').removeClass('active_cc');
			})


			$("#navbarSupportedContent a").on('click', function () {

				var target = $($(this).attr("href")).offset().top;


				target -= 70;


				$("html, body").animate({
					scrollTop: target }, 400);


				return false;
			});


			$(window).scroll(function () {
				for (var i = 1; i <= 4; i++) {
					if ($("section:nth-child(" + i + ")").offset().top < $(window).scrollTop() + 300) {
						$(".navbar-nav li").removeClass("navTarget active");

						$(".navbar-nav li:nth-child(" + i + ")").addClass("navTarget active");
					}
				}
			});

		})