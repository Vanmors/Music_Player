let body, num, array, width, context, logo, myElements, analyser, src, height;

body = document.querySelector('body');

num = 32;

array = new Uint8Array(num*2);

width = 10;


const player = document.getElementById('audio_pl')

window.onclick = function(){

    if(context) return;

    // body.querySelector('h1').remove();

    for(let i = 0 ; i < num ; i++){
        logo = document.createElement('div');
        logo.className = 'logo';
        logo.style.background = 'red';
        logo.style.minWidth = width+'px';
        body.appendChild(logo);
    }

    myElements = document.getElementsByClassName('logo');
    context = new (window.AudioContext || window.webkitAudioContext)();
    source = context.createMediaElementSource(player)
    analyser = context.createAnalyser();
    source.connect(analyser)
    analyser.connect(context.destination)

}

// window.requestAnimationFrame(loop);
//
// function loop() {
//     window.requestAnimationFrame(loop);
//     analyser.getByteFrequencyData(array);
//     for (let i = 0; i < num; i++) {
//         height = array[i + num];
//         myElements[i].style.minHeight = height + 'px';
//         myElements[i].style.opacity = 0.008 * height;
//         console.log(height)
//     }
// }


canvas = document.getElementById("canvasLine");
canvasCtx = canvas.getContext("2d");

// analyser.fftSize = 256;
// bufferLength = analyser.frequencyBinCount;
// dataArray = new Uint8Array(bufferLength);

Width = canvas.width;
Height = canvas.height;

const draw = function () {
    window.requestAnimationFrame(draw);
    console.log(array)
    analyser.getByteFrequencyData(array);

    canvasCtx.fillStyle = "rgb(255, 255, 255)";
    canvasCtx.fillRect(0, 0, Width, Height);

    let barWidth = (Width / array.length) * 2;
    let barHeight;
    let x = 0;

    for (let i = 0; i < array.length; i++) {
        barHeight = array[i];

        canvasCtx.fillStyle = "rgb(" + (barHeight + 66) + ",66,66)";
        canvasCtx.fillRect(x, Height - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
    }
};

draw();