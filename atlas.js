const continentSelect = document.getElementById('selectContinent');
const continentContainers = {
    europe: document.getElementById('statyEvropy'),
    asia: document.getElementById('statyAsie'),
    africa: document.getElementById('statyAfriky'),
    americas: document.getElementById('statyAmeric'),
    oceania: document.getElementById('statyOceánie')
};

function createCountryBlocks(region, containerElement) {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Chyba při načítání dat ze serveru.');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            containerElement.innerHTML = ''; 
            data.forEach((stat) => {
                const blockCountry = `
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <!-- Definice rozměrů buněk pro různé zařízení -->
                        <div class="card h-100"> <!-- Výška karty se přizpůsobí obsahu -->
                            <a href="${stat.maps.googleMaps}" target="_blank">
                                <img class="card-img-top" src="${stat.flags.png}" alt="${stat.name.official}" />
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">${stat.translations.ces.common}</h4>
                                <p class="card-text">
                                    Počet obyvatel: ${stat.population}<br>
                                    Rozloha: ${stat.area} km<sup>2</sup>
                                </p>
                            </div>
                        </div>
                    </div>`;
                containerElement.innerHTML += blockCountry;
            });
        })
        .catch((error) => {
            console.error('Chyba při načítání dat:', error);
        });
}

continentSelect.addEventListener('change', () => {
    const selectedContinent = continentSelect.value;
    const selectedContainer = continentContainers[selectedContinent];
    if (selectedContainer) {
        createCountryBlocks(selectedContinent, selectedContainer);
    }
});