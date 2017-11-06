$(function(){
	var c=false;
	var apiData;


	backgroundImg=[
	"https://s.hswstatic.com/gif/thunderstorm-orig.jpg",
	"http://www.radionacional.com.pe/sites/default/files/noticias/neblina_lima_senamhi.jpg"
	"http://howlermag.com/wp-content/uploads/2016/12/rain.jpg",
	"https://i.imgur.com/HRmlwoH.jpg",
	"https://images.techhive.com/images/article/2016/11/fog_visibility_island-100692732-large.jpg",
	"https://s3.envato.com/files/23923178/TropicalBlueSkyWithClouds590300.jpg",
	"https://img00.deviantart.net/2729/i/2008/096/a/f/cloudy_sky_2_by_kuschelirmel_stock.jpg"
]

function displayTemp(F,c){
	if(c)return Math.round((F-32)*(5/9)) + "&deg; c";
	return Math.round(F)+"&deg; F";
}

//function rende$
$.getJSON("https://freegeoip.net/json/").done(function(location){
//console.log(location); success
$("#country").html(location.country_name);
$("#city").html(location.city);
$("#latitude").html(location.latitude);
$("#longitude").html(location.longitude);
 

 $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="location.latitude+"&lon="location.longitude +"&units=imperial&appid=d20e2d0b1e9f9f54d98e47b09fd3887b",function(data){
 apiData=data;
  // console.log(apiData); success!
 //render(apiData,c);

})
})


})