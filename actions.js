let audio = document.getElementById("audio_pl");
let time = document.querySelector(".time");
let btnPlay = document.querySelector(".player__btn");
let btnPause = document.querySelector(".pause");
let btnPrev = document.querySelector(".prevBut");
let btnNext = document.querySelector(".nextBut");


let trecks = ['imagine-dragons-warriors.mp3', 'imagine-dragons-whatever-it-takes.mp3',
    'imagine-dragons-it039s-time.mp3', 'imagine-dragons-bad-liar.mp3']

let numberOfTreck;


window.onload = function () {
    numberOfTreck = 0;
}


function switchTreck(numTreck) {
    audio.src = '' + trecks[numTreck];
    audio.currentTime = 0;
    audio.play();
}

btnPause.addEventListener("click", function () {
    audio.pause();
    clearInterval(audioPlay)
});


btnPlay.addEventListener("click", function () {
    audio.play();
    audioPlay = setInterval(function () {
        let audioTime = Math.round(audio.currentTime);

        let audioLength = Math.round(audio.duration)

        time.style.width = (audioTime * 100) / audioLength + '%';

        if (audioTime === audioLength && treck < 3) {
            treck++;
            switchTreck(treck);
        } else if (audioTime === audioLength && treck >= 3) {
            treck = 0;
            switchTreck(treck);
        }
    }, 10)
});


btnPrev.addEventListener("click", function () {
    if (numberOfTreck > 0) {
        numberOfTreck--;
        switchTreck(numberOfTreck);
    } else {
        numberOfTreck = 3;
        switchTreck(numberOfTreck);
    }
});


btnNext.addEventListener("click", function () {
    console.log(numberOfTreck)
    console.log("next")
    if (numberOfTreck < 3) {
        numberOfTreck++;
        switchTreck(numberOfTreck);
    } else {
        numberOfTreck = 0;
        switchTreck(numberOfTreck);
    }
});