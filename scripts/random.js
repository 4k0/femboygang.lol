    // Array with different texts to be displayed randomly
    const randomTexts = [
        "Hear björk bro.",
        "Url encoding is crazy yo.",
        "Haciendo enemigos, no puedo ni verlos.",
        "profesional doxer - igna.",
        "I have 5 cats!",
        "Learning HTML, Python and JS!",
        // Add more texts here as desired
    ];

    // Function to pick a random element from the array
    function getRandomText() {
        const randomIndex = Math.floor(Math.random() * randomTexts.length);
        return randomTexts[randomIndex];
    }

    // Function to update the content of the HTML element with a random text
    function updateRandomText() {
        const randomTextElement = document.getElementById("randomTextElement");
        randomTextElement.textContent = '⠀⠀⠀ ⠀⠀⠀ ⠀ ⠀ ⠀ "' + getRandomText() + '"';
    }

    // Call the function on page load
    updateRandomText();