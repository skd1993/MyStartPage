//to search google, kat, piratebay, youtube, duckduckgo with given query

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
	var locater = query.substring(0, 3);
	var searchtext = query.substring(3);

	if(locater == '!d ') {
		window.location = 'https://duckduckgo.com/?q=' + searchtext;
	}
	else if (locater == '!k ') {
		window.location = 'https://kat.cr/usearch/' + searchtext;
	}
	else if (locater == '!p ') {
		window.location = 'https://thepiratebay.se/search/' + searchtext;
	}
	else if (locater == '!y ') {
		window.location = 'https://www.youtube.com/results?search_query=' + searchtext;
	}
	else {
		window.location = 'https://google.co.in/search?q=' + query;
	}
}

function clear() {
	searchbox.val = null;
	searchbox.blur();
}

//searchbox.onblur = function (event) { $('#search').focus(); };