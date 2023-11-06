document.addEventListener('DOMContentLoaded', (event) => {
    // Video element
    const video = document.getElementById('player1');
    video.autoplay = false; // Turn off autoplay
    video.loop = false; // Turn off looping

    // Function to format time in minutes and seconds
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsPart = Math.floor(seconds % 60);
        return `${minutes}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
    }

    // Function to update the current time display
    function updateTime() {
        document.getElementById('currentTime').textContent = formatTime(video.currentTime);
        document.getElementById('duration').textContent = formatTime(video.duration);
    }

    // Update the time display when the video metadata is loaded
    video.addEventListener('loadedmetadata', updateTime);

    // Update the time display periodically
    video.addEventListener('timeupdate', updateTime);

    // Play button
    document.getElementById('play').addEventListener('click', function() {
        video.play();
        updateVolumeInfo();
    });

    // Pause button
    document.getElementById('pause').addEventListener('click', function() {
        video.pause();
    });

    // Slow Down button
    document.getElementById('slower').addEventListener('click', function() {
        video.playbackRate *= 0.9; // Slow down by 10%
        console.log(`New speed: ${video.playbackRate}`);
    });

    // Speed Up button
    document.getElementById('faster').addEventListener('click', function() {
        video.playbackRate /= 0.9; // Increase speed
        console.log(`New speed: ${video.playbackRate}`);
    });

    // Skip Ahead button
    document.getElementById('skip').addEventListener('click', function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log(`Current location: ${video.currentTime}`);
    });

    // Mute button
    document.getElementById('mute').addEventListener('click', function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
    });

    // Volume Slider
    document.getElementById('slider').addEventListener('input', function() {
        video.volume = this.value / 100;
        updateVolumeInfo();
    });

    // Update Volume Info
    function updateVolumeInfo() {
        document.getElementById('volume').textContent = `${Math.round(video.volume * 100)}%`;
    }

    // Old School button
    document.getElementById('vintage').addEventListener('click', function() {
        video.classList.add('oldSchool');
    });

    // Original button
    document.getElementById('orig').addEventListener('click', function() {
        video.classList.remove('oldSchool');
    });
});
