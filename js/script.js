const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '2c7bc1880bmshbc56370d627469cp1aef62jsn3ccfa31b1ad3',
    'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
  },
  data: '{"key1":"value","key2":"value"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});