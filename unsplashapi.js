async function setRandomEarthBackground() {
    const accessKey = '0MwUVyx606t93Y8-awbnR5s8mghBqmkPhrqqvzrRguM';
    const apiUrl = `https://api.unsplash.com/photos/random?query=earth&orientation=landscape&client_id=${accessKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const imageUrl = data.urls.regular;

        
        document.body.style.backgroundImage = `url('${imageUrl}')`;
        document.body.style.backgroundSize = 'cover'; 
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center'; 
        document.body.style.backgroundAttachment = 'fixed'; 

        document.body.style.width = '100vw'; 
        document.body.style.height = '100vh'; 
    } catch (error) {
        console.error('Chyba při načítání obrázku:', error);
    }
}

window.addEventListener('load', () => {
    setRandomEarthBackground();
});
