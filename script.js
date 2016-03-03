//to search google, kat, piratebay, youtube, duckduckgo with given query

var searchbox = document.getElementById('search');
var searchbutton = document.getElementById('button-search');
var clearbutton = document.getElementById('button-clear');

var weatherdiv = document.getElementById('weathershow');
var weathericon = document.getElementById('weather-icon');
var weathertemp = document.getElementById('weather-temp');
var weathervars = document.getElementById('weather-vars');
var weatherinfo = document.getElementById('weather-info');

var openweatherapikey = '33d4b32bf0b782eeb988e3472b09c53c';

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

    if (locater == '!d ') {
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
    else if (locater == '!w ') {
        weatheris();
    } 
    else {
        window.location = 'https://google.co.in/search?q=' + query;
    }
}

function weatheris() {
    var searchtext = searchbox.value.substring(3);
    $.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + searchtext + '&units=metric&appid=' + openweatherapikey, function(data) {
        var generalweather = data.list[0].main;
        var descweather = data.list[0].weather[0].description;
        var id = data.list[0].weather[0].id;
        var loc = data.list[0].name + ', ' + data.list[0].sys.country;

        console.log(generalweather);
    	console.log(descweather);
        console.log(loc);
        
        // var d = new Date();
        // var hours = d.getHours();

        // var dayornight = 'night';
        // if(hours >= 6 && hours < 20)
        // {
        //     dayornight = 'day';
        // }

        var w_icon_html = '<i class=\"wi wi-owm-' + id + '\"></i>';
        var w_temp_html = '<p><h1>' + generalweather.temp + ' &deg;C</h1></p>';
        var w_loc_html = '<p>' + loc + '</p>';
       
        var w_vars_html = 
                        '<p><h3>Min. Temp: ' + generalweather.temp_min + ' &deg;C</h3></p>' + 
                        '<p><h3>Max. Temp: ' + generalweather.temp_max + ' &deg;C</h3></p>' + 
                        '<p><h3>Humidity: ' + generalweather.humidity + '%</h3></p>'; 
        var w_desc_html = '<p><h2>' + descweather + '</h2></p>';
        
        weathericon.innerHTML = w_icon_html;
        weathertemp.innerHTML = w_temp_html + w_loc_html + w_desc_html;
        weathervars.innerHTML = w_vars_html;
        // weatherinfo.innerHTML = w_desc_html;
        
        $('#weathershow').show("slow");
    });
}

function clear() {
    searchbox.val = null;
    searchbox.blur();
}
