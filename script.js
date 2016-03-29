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

console.log(countDownTime(deadline).minutes)
