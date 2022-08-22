


// API Begins Here 
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://motivational-quotes1.p.rapidapi.com/motivation",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"X-RapidAPI-Key": "2c7bc1880bmshbc56370d627469cp1aef62jsn3ccfa31b1ad3",
		"X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com"
	},
	"processData": false,
	"data": {
		"key1": "value",
		"key2": "value"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});