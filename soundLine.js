let body, num, array, width, context, logo, myElements, analyser;

body = document.querySelector('body');

num = 32;

array = new Uint8Array(num * 2);

width = 10;

const player = document.getElementById('audio_pl')

window.onload = function (){
    let el = document.getElementsByClassName('.pause');
    el.click();
}


// window.addEventListener('load', function(){
//     'use strict';
//
//     // Получим наш параграф
//     let el = document.querySelector('.pause');
//
//     // Событие, которое происходит при клике на параграф
//     el.addEventListener('click', function(){
//         alert('Был клик');
//     });
//
//     // Тут запускаем через 5 секунд симуляцию клика по парагафу
//     setTimeout(function(){
//         el.click();
//     }, 5000);
// });

window.onclick = function () {

    if (context) return;

    for (let i = 0; i < num; i++) {
        logo = document.createElement('div');
        logo.className = 'logo';
        logo.style.background = 'red';
        logo.style.minWidth = width + 'px';
        body.appendChild(logo);
    }

    myElements = document.getElementsByClassName('logo');
    context = new (window.AudioContext || window.webkitAudioContext)();
    source = context.createMediaElementSource(player)
    analyser = context.createAnalyser();
    source.connect(analyser)
    analyser.connect(context.destination)

}

canvas = document.getElementById("canvasLine");
canvasCtx = canvas.getContext("2d");

Width = canvas.width;
Height = canvas.height;

const draw = function () {
    window.requestAnimationFrame(draw);
    // console.log(array)
    analyser.getByteFrequencyData(array);

    canvasCtx.fillStyle = "rgb(162,42,42)";
    // canvasCtx.fillStyle = linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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