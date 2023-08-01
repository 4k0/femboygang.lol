// Function to animate the website title
function animateTitle() {
    const originalTitle = document.title;
    const phrases = [
        'best hackers', 'professional skidders', 'on top'
    ]; // Additional phrases to animate
    const letterInterval = 9500; // Adjust the interval (in milliseconds) to control the speed of individual letters
    const phraseInterval = 18000; // Adjust the interval (in milliseconds) to control the speed of switching phrases
    let phraseIndex = 0;
    let letterIndex = 0;

    function updateTitle() {
        const currentPhrase = phrases[phraseIndex];
        const visibleLetters = currentPhrase.substring(0, letterIndex);
        const invisibleLetters = currentPhrase.substring(letterIndex);

        document.title = visibleLetters + ' - femboygang.lol';

        letterIndex++;

        if (letterIndex > currentPhrase.length) {
            letterIndex = 0;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(updateTitle, phraseInterval);
        } else {
            setTimeout(updateTitle, letterInterval);
        }
    }

    updateTitle(); // Start the animation
}

// Call the function to start the title animation
animateTitle();
