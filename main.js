Number.prototype.pad = function(size) {
      var s = String(this);
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
    }

$(function(){
  var targetDays = $('#countdownDays')
  var targetHours = $('#countdownHours')
  var targetMins = $('#countdownMins')
  var targetSecs = $('#countdownSecs')
  var targetContainer = $('#coundownContainer')
  var targetDate = new Date(targetContainer.data('target'))
  console.log(targetDate);
  var spanDays = $('<span>', {id: 'spanDays'});
  var spanHours = $('<span>', {id: 'spanHours'});
  var spanMinutes = $('<span>', {id: 'spanMinutes'});
  var spanSeconds = $('<span>', {id: 'spanSeconds'});
  targetDays.append(spanDays)
  targetHours.append(spanHours)
  targetMins.append(spanMinutes)
  targetSecs.append(spanSeconds)
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

