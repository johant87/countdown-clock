//setup countdown
  var timeLeft = 15;
  var currentTime = Date.parse(new Date());
  var deadline = new Date(currentTime + timeLeft*60*1000);

function countDownTime(deadline){
  var t = Date.parse(deadline) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function startCountdown(id, deadline){
  var countdown = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = countDownTime(deadline);
    countdown.innerHTML = t.minutes + ':' +
                          + t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

startCountdown('countdown', deadline);
