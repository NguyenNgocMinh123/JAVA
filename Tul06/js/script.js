const cardContainer = document.querySelector('#flashcard-container');
// Task 1: flip word/ definition
/**
 * @param {MouseEvent} event 
 */
function flipCard(event) {
    //get clicked flash card
    const flashcard = event.currentTarget;
    console.log(flashcard);
      //get word - toggle show/hide
      const wordSide = flashcard.querySelector('.word');
      if (wordSide.classList.contains('hidden')){
          wordSide.classList.remove('hidden');
      } else {
          wordSide.classList.add('hidden');
      }
  
      //get definition - toggle show/hide
      const definitionSide = flashcard.querySelector('.definition');
      definitionSide.classList.toggle('hidden');
    
}
 
// const flashcard = cardContainer.querySelector('.flashcard-box');
// flashcard.addEventListener('click', flipCard);

//Task2:populate data
function createCard(word,definition){
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard', 'hidden')

    //word side
    const wordSide = document.createElement('div');
    wordSide.classList.add('flashcard','word');
    wordSide.textContent = word;

    flashcard.appendChild(wordSide);

    //definition side
    const definitionSide = document.createElement('div');
    definitionSide.classList.add('flashcard','definition','hidden');
    definitionSide.textContent = definition;

    flashcard.appendChild(definitionSide);
    
 return flashcard;
}

function populateCard(){
    const cards =[];

    for (const word in ENGLISH){
        const definition = ENGLISH[word];

        const card = createCard(word, definition);

        //handle event
        card.addEventListener('click', flipCard);

        cardContainer.appendChild(card);

        cards.push(card);
    }

    return cards;
}

const cards = populateCard();
// show fist card
cards[0].classList.remove('hidden');
//Task3: mouse event -navigation
const statusBar = document.querySelector('#status-bar');
const btnPrev = statusBar.querySelector('#prev');
const btnNext = statusBar.querySelector('#next');

const statusBarCurrentInedx = statusBar.querySelector('strong');
const statusBarNoWords = statusBar.querySelector ('span');

//set max Index
statusBarNoWords.textContent = cards.length;

//Task4:keybroad events -navigation
/**
 * 
 * @param {KeyboardEvent} event 
 */
function onKeyUp(event) {
    switch(event.key){
        case 'ArrowLeft':
            prevCard();
            break;
        case 'ArrowRight':
            nextCard();
            break;
    }
    console.log(event.key);
}

document.addEventListener('keydown', onKeyUp);