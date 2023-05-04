const codeInput = document.getElementById('codeInput');
const videoContainer = document.getElementById('videoContainer');
const playButton = document.getElementById('playButton');
const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', () => {
    window.location.href = "home.html";
});

playButton.addEventListener('click', () => {
    player.playVideo();
    homeButton.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

codeInput.addEventListener('input', () => {
    codeInput.value = codeInput.value.replace(/\d/g, '*');
});
