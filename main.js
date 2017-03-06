var today = new Date();
		console.log(today);
		var endtime = '2017-03-30';

		function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
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



var days = document.querySelector('.mg-wrapper-days');
var hours = document.querySelector('.mg-wrapper-hours');
var minuts = document.querySelector('.mg-wrapper-minuts');
var seconds = document.querySelector('.mg-wrapper-seconds');
var t = Date.parse(endtime) - Date.parse(new Date());
console.log(t);

function initializeClock(id, endtime){
  var clock = document.querySelector('#clock');
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    days.innerHTML = t.days + '';
    hours.innerHTML = t.hours + '<br>' + ' hours';
    minuts.innerHTML = t.minutes + '<br>' +' mn';
    // seconds.innerHTML = t.seconds + '<br>' + ' Seconds';
    // clock.innerHTML = 'days: ' + t.days + '<br>' +
    //                   'hours: '+ t.hours + '<br>' +
    //                   'minutes: ' + t.minutes + '<br>' +
    //                   'seconds: ' + t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

initializeClock('clockdiv', endtime);






var menu = document.querySelector('.menu');
var burger = document.querySelector('.mg-menu-burger img');

burger.addEventListener('click', function(){
  menu.classList.toggle('closed');
});









