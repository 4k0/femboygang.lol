        function adjustSpecificPreformattedTextSize() {
            const specificPreText = document.getElementById('specificPreText');

            // Get the current font size of the specific preformatted text
            const currentFontSize = parseFloat(window.getComputedStyle(specificPreText).fontSize);

            // Calculate the new font size to be 67% of the original font size
            const newFontSize = currentFontSize * 0.50;

            // Apply the new font size to adjust the specific preformatted text size
            specificPreText.style.fontSize = `${newFontSize}px`;
        }

        // Call the function when the page loads
        window.addEventListener('load', adjustSpecificPreformattedTextSize);
