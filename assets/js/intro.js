const mottoLetters = document.querySelectorAll("#motto path");
const svgItem = document.querySelector("#motto");
const intro = document.querySelector(".intro");

function startAnimation(){
    console.log("start");
    var cookie = document.cookie;
    if (cookie.indexOf("stopAnim=true")===-1){
        intro.style.display="flex";
        for (letter of mottoLetters){
            letterLen = letter.getTotalLength().toString();
            letter.style.strokeDasharray = letterLen;
            letter.style.strokeDashoffset = letterLen;
            letter.style.animation = `motto-text 2s ease forwards`;
        }
    }
}

function stopAnimation(){
    var now = new Date();
    // cookie expires after one hour
    now.setTime(now.getTime() + 1 * 3600 * 1000);
    setTimeout(()=>{
        document.cookie = "stopAnim=true;expires="+now.toUTCString()+"path=/";
        console.log("stop");
    }, 3600);
}
console.log(document.cookie);
window.onload = startAnimation();
window.onbeforeunload = stopAnimation();