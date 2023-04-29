let audio = document.getElementById("audio_pl");
let time = document.querySelector(".time");
let btnPlay = document.querySelector(".player__btn");
let btnPause = document.querySelector(".pause");
// let btnPrev = document.querySelector(".prevBut");
let btnNext = document.querySelector(".nextBut");


let tracks = ['imagine-dragons-warriors.mp3', 'imagine-dragons-whatever-it-takes.mp3',
    'imagine-dragons-it039s-time.mp3', 'imagine-dragons-bad-liar.mp3']

let numberOfTrack = 0;


window.onload = function () {
    numberOfTrack = 0;
}


function switchTrack(numTrack) {
    audio.src = '' + tracks[numTrack];
    audio.currentTime = 0;
    audio.play();
}

btnPause.addEventListener("click", function () {
    let canvas = document.getElementById("canvasLine");
    let canvasCtx = canvas.getContext("2d");
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    audio.pause();
    clearInterval(audioPlay)
});


btnPlay.addEventListener("click", function () {
    audio.play();
    audioPlay = setInterval(function () {
        let audioTime = Math.round(audio.currentTime);

        let audioLength = Math.round(audio.duration)

        time.style.width = (audioTime * 100) / audioLength + '%';

        if (audioTime === audioLength && track < 3) {
            track++;
            switchTrack(track);
        } else if (audioTime === audioLength && track >= 3) {
            track = 0;
            switchTrack(track);
        }
    }, 10)
});


// btnPrev.addEventListener("click", function () {
//     if (numberOfTrack > 0) {
//         numberOfTrack--;
//         switchTrack(numberOfTrack);
//     } else {
//         numberOfTrack = 3;
//         switchTrack(numberOfTrack);
//     }
// });


btnNext.addEventListener("click", function () {
    console.log(numberOfTrack)
    console.log("next")
    if (numberOfTrack < 3) {
        numberOfTrack++;
        switchTrack(numberOfTrack);
    } else {
        numberOfTrack = 0;
        switchTrack(numberOfTrack);
    }
});