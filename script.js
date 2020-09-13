setInterval(digitalClock, 1000);
digitalDate();
digitalClock();

// funkcija za tacno vreme
function digitalClock(){
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    hour = hour < 10 ? "0" + hour :  hour;
    minute = minute < 10 ? "0" + minute :  minute;
    second = second < 10 ? "0" + second :  second;

    let curectTime = hour + ":" + minute  + ":" + second;
    document.getElementById('corect-time').innerHTML = curectTime;
}
// funkcija za tacan datum
function digitalDate(){
    const date = new Date();
    var day = date.getDate();
    var mount = date.getMonth();
    var year = date.getFullYear();
    mount = mount + 1;
    var dayInWeak;
    switch (new Date().getDay()) {
        case 0:
            dayInWeak = "Sunday";
            break;
        case 1:
            dayInWeak = "Monday";
            break;
        case 2:
            dayInWeak = "Tuesday";
            break;
        case 3:
            dayInWeak = "Wednesday";
            break;
        case 4:
            dayInWeak = "Thursday";
            break;
        case 5:
            dayInWeak = "Friday";
            break;
        case 6:
            dayInWeak = "Saturday";
    }
    let curectDate = dayInWeak +" "+ day+'.'+mount+'.'+year;
    document.getElementById('corect-date').innerHTML = curectDate;

}


// funkcija za promenu teme
function dayOrNight(){
    var element = document.getElementById("thema");
    element.classList.toggle("night"); 
    document.getElementById("MyElement").classList.toggle('fa-sun');
}


window.onload = function(){
    document.getElementById("MyElement").addEventListener( 'click', dayOrNight);
}





