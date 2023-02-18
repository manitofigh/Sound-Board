var path = "Sounds/";
const resetButton = document.querySelector('.reset');

var buttonCount = document.querySelectorAll(".sound-buttons").length;
// var audiosArray = [android, augghh, slowAugh, hellNah, nokia, omgb, ohio, shutcho, slipping, tarkibi, wth];
var audioArray = [];

function resetSound(item){
    item.pause();
    item.currentTime = 0;
}

for (var i = 0; i < buttonCount ; i++){
    document.querySelectorAll(".sound-buttons")[i].addEventListener("click", function(){
        var audioName = this.classList[1];
        var audioToPlay = audioArray.find(a => a.src.includes(audioName));
        if (!audioToPlay) {
            audioToPlay = new Audio(path + audioName + ".mp3");
            audioArray.push(audioToPlay);
        }
        resetSound(audioToPlay);
        audioToPlay.play();
    });
}

resetButton.addEventListener("click", function() { // Loops through all sounds and resets them
    for (var j of audioArray){
        resetSound(j);
    }
  });