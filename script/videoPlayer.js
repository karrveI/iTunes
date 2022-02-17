//for upgrade it watch this video https://youtu.be/8-U-gC0iWeg;


import { addZero } from './supScript.js';

export const videoPlayerInit = () => {
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoVolume = document.querySelector('.video-volume');
    const videoVolumeUp = document.querySelector('.fa-volume-up');
    const videoVolumeDown = document.querySelector('.fa-volume-down');
    const videoTimeTotal = document.querySelector('.video-time__total');
    const videoFullScreen = document.querySelector('.video-fullscreen');

    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
        }
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

    const togglePLay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
        toggleIcon();
    };
    
    videoPlayer.addEventListener('click', togglePLay);
    videoButtonPlay.addEventListener('click', togglePLay);

    videoButtonStop.addEventListener('click', stopPlay);

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60);
        let secondPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondPassed);
        videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondTotal);
    });

    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    });

    videoFullScreen.addEventListener('click', () => {
        videoPlayer.requestFullscreen();
    });

    videoVolume.addEventListener('input', () => {
        videoPlayer.volume = videoVolume.value / 100;
    });

    videoVolumeDown.addEventListener('click', () => {
        videoVolume.value = 0;
        videoPlayer.volume = 0;
    });

    videoVolumeUp.addEventListener('click', () => {
        videoVolume.value = 100;
        videoPlayer.volume = 1;
    })
};