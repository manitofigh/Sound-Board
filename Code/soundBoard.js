var path = "../Sounds/";
const android = new Audio(path + "android.mp3");
const augghh = new Audio(path + "augghh.mp3");
const slowAugh = new Audio (path + "slowAugh.mp3")
const hellNah = new Audio(path + "hellNah.mp3");
const nokia = new Audio(path + "nokia.mp3");
const omgb = new Audio(path + "omgb.mp3");
const ohio = new Audio(path + "ohio.mp3")
const shutcho = new Audio(path + "shutcho.mp3");
const slipping = new Audio(path + "slipping.mp3");
const tarkibi = new Audio(path + "tarkibi");
const wth = new Audio(path + "wth.mp3");
const resetButton = document.querySelector('.reset');

var audiosArray = [android, augghh, slowAugh, hellNah, nokia, omgb, ohio, shutcho, slipping, tarkibi, wth];

document.getElementsByClassName("android")[0].addEventListener("click", function(){
    android.play();
});

document.getElementsByClassName("augghh")[0].addEventListener("click", function(){
    // var chance = Math.round(Math.random());
    // if (chance == 0){
    //     augghh.play();
    //     console.log(chance);
    // }
    // else{
    //     slowAugh.play();
    //     console.log(chance);
    // }
    slowAugh.play();
});

document.getElementsByClassName("hellNah")[0].addEventListener("click", function(){
    hellNah.play();
});

document.getElementsByClassName("nokia")[0].addEventListener("click", function(){
    nokia.play();
});

document.getElementsByClassName("ohio")[0].addEventListener("click", function(){
    ohio.play();
});

document.getElementsByClassName("omgb")[0].addEventListener("click", function(){
    omgb.play();
});

document.getElementsByClassName("shutcho")[0].addEventListener("click", function(){
    shutcho.play();
});

document.getElementsByClassName("slipping")[0].addEventListener("click", function(){
    slipping.play();
});

document.getElementsByClassName("wth")[0].addEventListener("click", function(){
    wth.play();
});

function resetSound(item){
    item.pause()
    // item.currentTime = 0;
}

resetButton.addEventListener('click', function() { //Stop all (Refreshes the page)
    // location.reload();
    // resetSound(android);
    // resetSound(augghh);
    // resetSound(hellNah);
    // resetSound(nokia);
    // resetSound(ohio);
    // resetSound(omgb);
    // resetSound(shutcho);
    // resetSound(slipping);
    // resetSound(slowAugh);
    // resetSound(wth);
    for (var i of audiosArray){
        resetSound(i);
    }
  });
