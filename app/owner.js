$(function() {

	var jose    = document.getElementById('jose');
	var william = document.getElementById('william');
	var carla   = document.getElementById('carla');
	var pedro   = document.getElementById('pedro');

	var joseContent    = document.getElementById('content0');
	var williamContent = document.getElementById('content1');
	var carlaContent   = document.getElementById('content2');
	var pedroContent   = document.getElementById('content3');

	william.onclick = function() {
		setSelected(william);
		show(williamContent);
		hide(carlaContent);
		hide(pedroContent);
		hide(joseContent);
		setTitle('William Foo');
	}

	carla.onclick = function() {
		setSelected(carla);
		show(carlaContent);
		hide(williamContent);
		hide(pedroContent);
		hide(joseContent);
		setTitle('Carla Bar');
	}

	pedro.onclick = function() {
		setSelected(pedro);
		show(pedroContent);
		hide(williamContent);
		hide(carlaContent);
		hide(joseContent);
		setTitle('Pedro Baz');
	}

	jose.onclick = function() {
		setSelected(jose);
		show(joseContent);
		hide(williamContent);
		hide(carlaContent);
		hide(pedroContent);
		setTitle('José Diaz');
	}

	function clearSelection() {
		$(jose).removeClass('selected');
		$(william).removeClass('selected');
		$(carla).removeClass('selected');
		$(pedro).removeClass('selected');
	}

	function setSelected(element) {
		clearSelection();
		$(element).addClass('selected');
	}

	function hide(element) {
		$(element).addClass('content-hidden');
		$(element).removeClass('content-shown');
	}

	function show(element) {
		$(element).removeClass('content-hidden');
		$(element).addClass('content-shown');
	}

	function setTitle(title) {
		$('#sidebar-content h1').html(title);
	}
});