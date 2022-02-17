//for upgrade it watch this video https://youtu.be/7tr_hegKXKI;


import { videoPlayerInit } from './videoPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { radioPlayerInit } from './radioPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
};

playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
}));

videoPlayerInit();
musicPlayerInit();
radioPlayerInit();


//this code wroted by me...

const playerVideoBtn = document.querySelector('.player-video');
const playerMusicBtn = document.querySelector('.player-audio');
const playerRadioBtn = document.querySelector('.player-radio');

const stopVideo = () => {
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');

    videoButtonPlay.classList.remove('fa-pause');
    videoButtonPlay.classList.add('fa-play');
    videoPlayer.pause();
};

const stopMusic = () => {
    const audio = document.querySelector('.audio');
    const audioPlayer = document.querySelector('.audio-player');
    const audioButtonPlay = document.querySelector('.audio-button__play');

    audio.classList.remove('play');
    audioPlayer.pause();
    audioButtonPlay.classList.add('fa-play');
    audioButtonPlay.classList.remove('fa-pause');
};

const  stopRadio = () => {
    const radio = document.querySelector('.radio');
    const radioStop = document.querySelector('.radio-stop');

    radio.classList.remove('play');
    radioStop.classList.add('fa-play');
    radioStop.classList.remove('fa-stop');
    
};

playerVideoBtn.addEventListener('click', () => {
    stopMusic();
    stopRadio();
});

playerMusicBtn.addEventListener('click', () => {
    stopVideo();
    stopRadio();
});

playerRadioBtn.addEventListener('click', () => {
    stopMusic();
    stopVideo();
});
