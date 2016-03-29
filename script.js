//setup countdown
  var timeLeft = 15;
  var currentTime = Date.parse(new Date());
  var deadline = new Date(currentTime + timeLeft*60*1000);
  console.log(deadline)
