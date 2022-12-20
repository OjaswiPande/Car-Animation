window.onload = function() {
var audio=document.createElement('audio');
 audio.setAttribute('src','sound.mp3');
 audio.loop=true;
 audio.load();
 audio.autoplay = true;
 audio.play;

 document.body.appendChild(audio);


}
function playsound(audioname,loop){
    let audio=new Audio(audioname);
    audio.loop=loop;
    audio.play();
}
playsound("sound.mp3",true)

