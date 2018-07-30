// $(document).ready(function(){
//     $('#button').click(function geolocate(){
//         function geolocate() {
//             if (window.navigator && window.navigator.geolocation) {
//               navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
//             }
//           }
//     })

// });

$(function() {  
       
    
    
    $('#button').click(function (e){
        e.preventDefault();
    var $city = $('#mySearch').val();
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $city;
	var apiKey = "bc818852b779780bea8a774455bb4a5a"; // Replace "APIKEY" with your own API key;


    $.get(url + '&appid=' + apiKey)
    .done(function(response) {

		console.log(response);
        updateUISuccess(response)
		
    })
    .fail(function(error) {
        console.log(error);
        
        updateUIError()
			
	});

	//handle XHR success
	function updateUISuccess(response) {

        var condition = response.weather[0].main;
        console.log(condition);
        
        var degC = response.main.temp - 273.15;

        console.log(degC);
        
        var degCInt = Math.floor(degC);
        
        console.log(degCInt);

        var degF = degC * 1.8 + 32;
        
        console.log(degF);
        var degFInt = Math.floor(degF);
        console.log(degFInt);
        
        var weatherBox = document.getElementById("weather");
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; Celcius / " + degFInt + "&#176; Farhenheit</p><p>Condition: " + condition + "</p>";
		
	}

	// handle XHR error
	function updateUIError() {
//		var weatherBox = document.getElementById("weather");
//		weatherBox.className = "hidden";
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
	}


});
});