function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
} 
function reloj(){
    var fecha = new Date();
    var horas = fecha.getHours();
    var mins = fecha.getMinutes();
    var segs = fecha.getSeconds();
    var milsgs = fecha.getMilliseconds();
    horas = (horas < 10)?"0"+horas:horas;
    mins = (mins < 10)?"0"+mins:mins;
    segs = (segs<10)?"0"+segs:segs;
    milsgs = fecha.getMilliseconds();//(milsgs<100)?"00"+milsgs:milsgs;
    if (milsgs<10){
          milsgs='00'+milsgs;     
    } else if (milsgs<100){
        milsgs='0'+milsgs;
    } 

    
    document.getElementById('window').innerHTML= horas + ":" + mins + ":" + segs + ":" +milsgs   ;
}
setInterval(random_bg_color, 0.01);
setInterval(reloj, 1);