function playAudio(source) {
    const audio = new Audio(source);
    audio.play();
}

document.querySelectorAll('.drum').forEach(function(button) {
    button.addEventListener('click', function() {
        const audioSource = button.getAttribute('data-audio');
        playAudio(audioSource);
    });
    window.addEventListener("keydown", (event) => {
        if (event.key === button.innerText) {
            const audioSource = button.getAttribute('data-audio');
            playAudio(audioSource);
        }
    })
    
});


