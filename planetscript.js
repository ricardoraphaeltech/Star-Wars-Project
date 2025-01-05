let currentPageUrl = 'https://swapi.dev/api/planets/'

window.onload = async () => {
    try {
       await loadPlanets(currentPageUrl);
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar cards');
    }
};

async function loadPlanets(url){
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '' // Limpar os resultados anteriores

    try {
        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach((planet) => {
            const card = document.createElement('div');
            card.style.backgroundImage = 
            `url('https://starwars-visualguide.com/assets/img/planets/${planet.url.replace(/\D/g, "")}.jpg')`
            card.className = 'cards'

            const planetNameBG = document.createElement('div');
            planetNameBG.className = 'planet-name-bg';

            const planetName = document.createElement('span');
            planetName.className = 'planet-name';
            planetName.innerHTML = `${planet.name}`;

            planetNameBG.appendChild(planetName);
            card.appendChild(planetNameBG);

            mainContent.appendChild(card);
        });

        currentPageUrl = url

    }catch (error) {
        console.log(error);
        alert('Erro ao carregar os planetas');
    };
};