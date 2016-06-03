var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({
        isLoading: false,
        location: null,
        temp: null
      });
      alert(errorMessage);
    });
  },
  render: function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
