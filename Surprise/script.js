document.addEventListener('DOMContentLoaded', function () {
    const apologyMessage = document.getElementById('apologyMessage');
    const messagePreview = document.getElementById('messagePreview');
    const apology = "Your Message Here"; // Put your apology letter here.
    let currentIndex = 0;
    const h1Element = document.querySelector('h1'); 
    const pElement = document.querySelector('p'); 

    apologyMessage.addEventListener('input', function () {
        const message = apologyMessage.value;
        let previewText = '';

        if (message) {
            h1Element.textContent = "MY APOLOGY LETTER"; 
            pElement.textContent = "Dear Someone, ";
            previewText += `Message Preview: `;
        } else {
            h1Element.textContent = "Testing"; 
            pElement.textContent = `Word Box Testing`;
        }

        if (currentIndex < apology.length) {
            previewText += apology.substring(0, currentIndex + 1);
            currentIndex++;
        } else {
            previewText = apology;
        }

        messagePreview.textContent = previewText;

        apologyMessage.addEventListener('input', updatePreview);

      
        apologyMessage.addEventListener('change', updatePreview);

    });
});