// Import the Google Translate API client library
const { Translate } = require('@google-cloud/translate').v2;

// Create a new instance of the Google Translate client
const translate = new Translate({ key: 'YOUR_API_KEY' });

document.addEventListener('DOMContentLoaded', function () {
    const sourceText = document.getElementById('sourceText');
    const translationOutput = document.getElementById('translationOutput');
    const translationDirection = document.getElementById('translationDirection');
    const translateButton = document.getElementById('translateButton');
    const thankYouMessage = document.getElementById('thankYouMessage');

    translateButton.addEventListener('click', async function () {
        const textToTranslate = sourceText.value;
        const targetLanguage = translationDirection.value;

        try {
            // Use the Google Translate API to translate text
            const [translation] = await translate.translate(textToTranslate, targetLanguage);
            translationOutput.value = translation;
            thankYouMessage.textContent = 'Thank you for using our translation service!';
        } catch (error) {
            console.error(error);
            thankYouMessage.textContent = 'Translation failed. Please try again later.';
        }
    });
});
