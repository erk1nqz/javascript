const audio = document.getElementById('audio1');

document.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'Spacebar') {
    event.preventDefault();
    audio1.play();
    }
});