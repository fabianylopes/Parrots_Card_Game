let cardNumber;

do{
    cardNumber = parseInt(prompt('Com quantas cartas deseja jogar? (números pares entre 4 e 14)'));
}while(cardNumber % 2 !== 0 || cardNumber < 4 || cardNumber > 14);


const parrots = ['bobross','explody','fiesta','metal','revertit','triplets','unicorn'];


const cards = document.querySelector('.container');

parrots.sort(compare);

let chosenCards = [];

for (let i = 0; i < cardNumber / 2; i++) {
    chosenCards.push(parrots[i]);
    chosenCards.push(parrots[i]);
}

chosenCards.sort(compare);

for (let i = 0; i < cardNumber; i++) {
    cards.innerHTML += `
        <div class="card" onclick="flip()">
            <div class="front-face face">
                <img src="/assets/front.png">
            </div>
            <div class="back-face face">
                <img src="/assets/${chosenCards[i]}parrot.gif">
            </div>
        </div>
    `     
}



function compare() { 
	return Math.random() - 0.5; 
}
