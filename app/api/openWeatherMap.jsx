var axios = require('axios');

// 63b863cc12e288a6c215b0271fc327a0
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=63b863cc12e288a6c215b0271fc327a0&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURI(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      //debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};
