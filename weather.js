$(function() {
  var handleWeatherResponse = function(data) {
    // "data" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(data);

    // Must use the data sections to succeed.  what would data.currently.summary give you
    //what would it give you 

    // We also set a window-level variable so we can use it in the console,
    // by typing data
    window.data = data;
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    //var markup = "<p>The weather report... " + "will be here when I finish my homework.</p>";
    var markup ="<h2>Current Weather for " + data.timezone + "</h2>"      
    +  data.currently.summary + ", with " + data.currently.precipProbability 
    + "% chance of precepitation.  Current temperature is " + data.currently.temperature + "&deg F, but feels like " 
    + data.currently.apparentTemperature + "&deg F."
    + "<h2>Three-Day Forecast</h2>" + "<p><strong> Overview: &nbsp;&nbsp;</strong>" + data.daily.summary + "</p>"
    + "<p><strong>Tomorrow:  </strong>" + "&nbsp; Expect " + data.daily.data[1].icon + ", with a high of of " 
    + data.daily.data[1].apparentTemperatureMax + "&deg F and low of "   + data.daily.data[1].apparentTemperatureMin + "&deg F.</p>"
    + "<p><strong>In two days:  </strong>" + "&nbsp; Expect " + data.daily.data[2].icon + ", with a high of " 
    + data.daily.data[2].apparentTemperatureMax + "&deg F and low of "   + data.daily.data[2].apparentTemperatureMin + "&deg F.</p>"
    + "<p><strong>In three days:  </strong>" + "&nbsp; Expect " + data.daily.data[3].icon + ", with a high of " 
    + data.daily.data[3].apparentTemperatureMax + "&deg F and low of "   + data.daily.data[3].apparentTemperatureMin + "&deg F.</p>"
    // End of your code. No, really. Don't change anything below this, or above line 11. 
    // Takes the contents of the "markup" variable (which should contain HTML) 
    // and write it out to the page.
    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});