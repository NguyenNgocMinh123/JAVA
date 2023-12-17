import cardSources from './card-sources.js';

const cardBroad = document.getElementById('card-broad');

function createCardElement() {
    cardSources.forEach((source, index) => {
        const card = document.createElement('img');
        card.src = source;
        card.classList.add('card');

        
      // Add a click event listener to each card to handle the selection 
      card.addEventListener('click',() => {
        cardBroad.querySelectorAll('.card').forEach((otherCard,otherIndex) => {
            if ( otherIndex != index)
            {
                otherCard.classList.remove('enlarged')
            }
        })
        card.classList.toggle('enlarged'); // Fixed typo: 'enlerged' to 'enlarged'
    })

    cardBroad.appendChild(card);
});

}

createCardElement();

