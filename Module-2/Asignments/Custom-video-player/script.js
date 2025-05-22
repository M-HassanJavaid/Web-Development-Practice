let video = document.querySelector('video');
let playBtn = document.querySelector('.fa-play');
let pauseBtn = document.querySelector('.fa-pause');
let progressBar = document.querySelector('#progress-bar');
let speedDisplay = document.querySelector('#speedDisplay');
let speedInput = document.querySelector('#speed');
let volumeInput = document.querySelector('#volume');
let volumeDisplay = document.querySelector('#volume-display');
let skipForward = document.querySelector('.fa-forward');
let skipBackward = document.querySelector('.fa-backward');

function playVideo() {
    video.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function pauseVideo() {
    video.pause();
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
}

playBtn.addEventListener('click', playVideo);

pauseBtn.addEventListener('click', pauseVideo);

video.addEventListener('canplaythrough', () => {
    progressBar.max = video.duration;
})

video.addEventListener('timeupdate', () => {
    progressBar.value = video.currentTime;
});

progressBar.addEventListener('input', () => {
    video.currentTime = progressBar.value;
});

speedInput.addEventListener('input', () => {
    video.playbackRate = speedInput.value;
    speedDisplay.innerText = `${video.playbackRate}x`
    progressBar.max = + video.duration;
});

video.addEventListener('ended', () => {
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
});

volumeInput.addEventListener('input', () => {
    video.volume = volumeInput.value;
    volumeDisplay.innerText = `${Math.round(video.volume * 100)}%`;
});

skipForward.addEventListener('click', () => {
    video.currentTime += 15;
});
skipBackward.addEventListener('click', () => {
    video.currentTime -= 15;
});

window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        if (video.paused) {
            playVideo();
        } else {
            pauseVideo();
        }
    } else if (e.key === 'ArrowRight') {
        video.currentTime += 15;
    } else if (e.key === 'ArrowLeft') {
        video.currentTime -= 15;
    }
});








