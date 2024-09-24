document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const showPopupButton = document.getElementById('showPopup');
    const closePopup = document.querySelector('.popup .close');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Play background music
    backgroundMusic.play();

    showPopupButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Optional: Add functionality to pause/resume music if desired
    document.addEventListener('keydown', (event) => {
        if (event.key === 'm') {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
            } else {
                backgroundMusic.pause();
            }
        }
    });
});
