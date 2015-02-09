Number.prototype.pad = function(size) {
      var s = String(this);
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
    }

$(function(){
  var targetElement = $('#countdown')
  var targetDate = new Date(targetElement.data('target'))
  console.log(targetDate);
  var spanDays = $('<span>', {id: 'countdownDays'});
  var spanHours = $('<span>', {id: 'countdownHours'});
  var spanMinutes = $('<span>', {id: 'countdownMinutes'});
  var spanSeconds = $('<span>', {id: 'countdownSeconds'});
  targetElement.append([spanDays, spanHours, spanMinutes, spanSeconds]);
  window.setInterval(clock, 1000)
  function  clock(){
  var delta = Math.abs(targetDate - new Date()) / 1000;
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;
  var hours = Math.floor(delta / 3600);
  delta -= hours * 3600;
  var minutes = Math.floor(delta / 60);
  delta -= minutes * 60;
  var seconds = Math.floor(delta);  
  spanDays.text(days.pad());
  spanHours.text(hours.pad());
  spanMinutes.text(minutes.pad());
  spanSeconds.text(seconds.pad());
  }
})

