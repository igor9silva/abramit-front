$(function() {

	var slides = [
		document.getElementById('slide1'),
		document.getElementById('slide2'),
		document.getElementById('slide3'),
		document.getElementById('slide4'),
	];

	var nextButton   = document.getElementById('nextButton');
	var prevButton   = document.getElementById('prevButton');
	var finishButton = document.getElementById('finishButton');

	var currentSlide = 0;

	updateButtons();

	nextButton.onclick = function() {

		if (currentSlide < slides.length - 1) {

			hide(slides[currentSlide]);

			currentSlide += 1;

			show(slides[currentSlide], 'right');

			updateButtons();
		}
	}

	prevButton.onclick = function() {

		if (currentSlide > 0) {

			hide(slides[currentSlide]);

			currentSlide -= 1;

			show(slides[currentSlide], 'left');

			updateButtons();
		}
	}

	function hide(element) {
		$(element).removeClass('slide-in-right');
		$(element).removeClass('slide-in-left');
		$(element).addClass('slide-out');
	}

	function show(element, direction) {
		$(element).removeClass('slide-out');
		$(element).addClass('slide-in-' + direction);
	}

	function updateButtons() {

		if (currentSlide === 0) {
			$(prevButton).hide();
			$(finishButton).hide();
		} else {

			$(prevButton).show();

			if (currentSlide === slides.length - 1) {
				$(nextButton).hide();
				$(finishButton).show();
			} else {
				$(nextButton).show();
				$(finishButton).hide();
			}
		}
	}
});