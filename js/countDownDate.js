const launch = function countDownDate(){

var launch = document.getElementById('launch')
var title = document.getElementById('title')

var countDownDate = new Date('Jun 19, 2021 23:59').getTime()

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    launch.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    launch.innerHTML = 'Create a SAFE Passwort days in' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

    if(distance < 0){
        clearInterval(x)
        title.innerHTML(`Create a SAFE passwort now | safepw`)
        launch.innerHTML(`Create a SAFE passwort now on <a href="https://safepw.github.io/create-pw/">safepw.github.io/create-pw/</a>`)
        window.location = "https://safepw.github.io/create-pw/";
    }

}, 1000);

};

window.onload = launch
