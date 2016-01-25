//to search google with given query

var searchbox = document.getElementById('search');
var searchbutton = document.getElementById('button-search');
var clearbutton = document.getElementById('button-clear');

window.onload = function() {
    searchbox.focus();
};

$('#search').focus();
searchbox.onkeypress = function(e) {
	if (e.keyCode === 13) {
		search();
	}
}

searchbutton.addEventListener('click', search, false);
clearbutton.addEventListener('click', clear, false);

function search() {
	var query = searchbox.value;
	window.location = 'https://google.co.in/search?q=' + query;
}

function clear() {
	searchbox.val = null;
	searchbox.blur();
}

//searchbox.onblur = function (event) { $('#search').focus(); };