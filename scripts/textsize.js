                            function adjustPreformattedText() {
                                const container = document.getElementById('textContainer');
                                const preElement = document.getElementById('adjustableText');
                    
                                // Reset font size to the original value
                                preElement.style.fontSize = 'inherit';
                    
                                // Calculate the pre element width and container width
                                const preWidth = preElement.clientWidth;
                                const containerWidth = container.clientWidth;
                    
                                // Check if the pre element overflows the container
                                if (preWidth > containerWidth) {
                                    // Calculate the new font size to reduce by 35%
                                    const currentFontSize = parseFloat(window.getComputedStyle(preElement).fontSize);
                                    const newFontSize = currentFontSize * 0.65;
                    
                                    // Apply the new font size to adjust the pre element size
                                    preElement.style.fontSize = `${newFontSize}px`;
                                }
                            }
                    
                            // Call the function when the page loads and when it resizes
                            window.addEventListener('load', adjustPreformattedText);
                            window.addEventListener('resize', adjustPreformattedText);