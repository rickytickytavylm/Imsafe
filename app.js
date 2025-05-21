// DOM Elements
const pagination = document.getElementById('pagination');
const itemsPerPage = 15;
let currentPage = 1;
const mainScreen = document.getElementById('main-screen');
const detailsScreen = document.getElementById('details-screen');
const phrasesList = document.getElementById('phrases-list');
const backButton = document.getElementById('back-button');
const phraseText = document.getElementById('phrase-text');
const phraseType = document.getElementById('phrase-type');
const phraseDescription = document.getElementById('phrase-description');
const responsesContainer = document.getElementById('responses-container');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Render all phrases
    renderPhrasesList();
    
    // Set up back button
    backButton.addEventListener('click', showMainScreen);
    
    // Handle browser back button
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.screen === 'details') {
            showDetailsScreen(event.state.phraseId);
        } else {
            showMainScreen();
        }
    });
});

// Render the list of phrases
function renderPhrasesList() {
    phrasesList.innerHTML = '';
    pagination.innerHTML = '';
    
    // Вычисляем общее количество страниц
    const totalPages = Math.ceil(phrases.length / itemsPerPage);
    
    // Определяем, какие фразы показывать на текущей странице
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, phrases.length);
    const phrasesToShow = phrases.slice(startIndex, endIndex);
    
    // Отображаем фразы текущей страницы
    phrasesToShow.forEach(phrase => {
        const phraseElement = document.createElement('div');
        phraseElement.className = 'bg-white/60 backdrop-blur-xl rounded-xl shadow-sm px-4 py-3 mb-3 transition hover:shadow cursor-pointer';
        
        // Создаем CSS-класс для типа манипуляции, удаляя пробелы и специальные символы
        const typeClass = phrase.type === 'Перенос вины' ? 'Переносвины' : phrase.type.replace(/[\s\+]+/g, '');
        
        phraseElement.innerHTML = `
            <p class="font-medium mb-3">${phrase.text}</p>
            <span class="badge-${typeClass} px-2 py-1 rounded-full text-xs font-medium">${phrase.type}</span>
        `;
        
        phraseElement.addEventListener('click', () => {
            showDetailsScreen(phrase.id);
        });
        
        phrasesList.appendChild(phraseElement);
    });
    
    // Создаем кнопки пагинации, если страниц больше одной
    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `pagination-button ${i === currentPage ? 'active' : ''}`;
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderPhrasesList();
                // Прокручиваем страницу вверх при переключении
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pagination.appendChild(pageButton);
        }
    }
}

// Show the details screen for a specific phrase
function showDetailsScreen(phraseId) {
    const phrase = phrases.find(p => p.id === phraseId);
    if (!phrase) return;
    
    // Update URL state
    history.pushState({ screen: 'details', phraseId }, '', `#phrase-${phraseId}`);
    
    // Update UI elements
    phraseText.textContent = phrase.text;
    phraseType.textContent = phrase.type;
    // Создаем CSS-класс для типа манипуляции, удаляя пробелы и специальные символы
    const typeClass = phrase.type === 'Перенос вины' ? 'Переносвины' : phrase.type.replace(/[\s\+]+/g, '');
    phraseType.className = `badge-${typeClass} px-3 py-1 rounded-full text-sm font-medium`;
    phraseDescription.textContent = phrase.description;
    
    // Render responses
    responsesContainer.innerHTML = '';
    phrase.responses.forEach(response => {
        const responseElement = document.createElement('div');
        responseElement.className = 'bg-white/60 backdrop-blur-xl rounded-xl shadow-sm px-4 py-3 mb-3';
        responseElement.textContent = response;
        responsesContainer.appendChild(responseElement);
    });
    
    // Show details screen, hide main screen
    mainScreen.classList.add('hidden');
    mainScreen.classList.remove('block');
    detailsScreen.classList.remove('hidden');
    detailsScreen.classList.add('block');
}

// Show the main screen
function showMainScreen() {
    // Update URL state
    history.pushState({ screen: 'main' }, '', './');
    
    // Show main screen, hide details screen
    mainScreen.classList.remove('hidden');
    mainScreen.classList.add('block');
    detailsScreen.classList.add('hidden');
    detailsScreen.classList.remove('block');
}
