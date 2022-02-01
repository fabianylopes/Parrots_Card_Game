let cardNumber;

do{
    cardNumber = parseInt(prompt('Com quantas cartas deseja jogar? '));
}while(cardNumber % 2 !== 0 || cardNumber < 4 || cardNumber > 14);


const parrots = ['bobross','explody','fiesta','metal','revertit','triplets','unicorn'];

parrots.sort(compare);

const cards = document.querySelector('.container');

function startGame(){

}

for (let i = 0; i < cardNumber / 2; i++) {

    cards.innerHTML += `
        <div class="card" onclick="flip()">
            <div class="front-face face">
                <img src="/assets/front.png">
            </div>
            <div class="back-face face">
                <img src="/assets/${parrots[i]}parrot.gif">
            </div>
        </div>
    `   

    cards.innerHTML += `
        <div class="card" onclick="flip()">
            <div class="front-face face">
                <img src="/assets/front.png">
            </div>
            <div class="back-face face">
                <img src="/assets/${parrots[i]}parrot.gif">
            </div>
        </div>
    `   
}


function flip(){
    
}


function compare() { 
	return Math.random() - 0.5; 
}