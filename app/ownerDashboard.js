$(function () {

    var marcos = document.getElementById('marcos');
    var claudio = document.getElementById('claudio');

    var marcosContent = document.getElementById('content0');
    var claudioContent = document.getElementById('content1');

    marcos.onclick = function () {
        setSelected(marcos);
        show(marcosContent);
        hide(claudioContent);
        setTitle('Marcos');
    }

    claudio.onclick = function () {
        setSelected(claudio);
        show(claudioContent);
        hide(marcosContent);
        setTitle('Claudio');
    }

    function clearSelection() {
        $(marcos).removeClass('selected');
        $(claudio).removeClass('selected');
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
