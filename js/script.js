let cardsNumber;

let firstFlip = undefined;
let secondFlip = undefined;

do{
    cardsNumber = parseInt(prompt('Com quantas cartas deseja jogar? (números pares entre 4 e 14)'));
}while(cardsNumber % 2 !== 0 || cardsNumber < 4 || cardsNumber > 14);

const parrots = ['bobross','explody','fiesta','metal','revertit','triplets','unicorn'];

parrots.sort(compare);

let chosenCards = [];

for (let i = 0; i < cardsNumber / 2; i++) {
    chosenCards.push(parrots[i]);
    chosenCards.push(parrots[i]);
}

chosenCards.sort(compare);

const cards = document.querySelector('.container');

for (let i = 0; i < cardsNumber; i++) {
    cards.innerHTML += `
        <div class="card" onclick="flip(this)">
            <div class="front-face face">
                <img src="/assets/front.png">
            </div>
            <div class="back-face face">
                <img src="/assets/${chosenCards[i]}parrot.gif">
            </div>
        </div>
    `     
}


function flip(chosenCard){
    chosenCard.classList.add('turned');
}


function compare() { 
	return Math.random() - 0.5; 
}
