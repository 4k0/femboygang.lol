                            function makeText40PercentSmaller() {
                                const specificText = document.getElementById('ak');
                    
                                // Get the current font size of the specific text element
                                const currentFontSize = parseFloat(window.getComputedStyle(specificText).fontSize);
                    
                                // Calculate the new font size to be 60% of the original font size
                                const newFontSize = currentFontSize * 0.1;
                    
                                // Apply the new font size to adjust the specific text size
                                specificText.style.fontSize = `${newFontSize}px`;
                            }
                    
                            // Call the function when the page loads
                            window.addEventListener('load', makeText40PercentSmaller);