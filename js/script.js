let numberOfCards;

let firstFlip = undefined;
let secondFlip = undefined;

let plays = 0;
let hits = 0;

let numberOfPairs;

let interval = undefined;
let seconds = 0;

const timer = document.querySelector('.timer');

function counter(){
    timer.innerHTML = parseInt(timer.innerHTML) + 1;
    seconds++;
}

const parrots = ['bobross','explody','fiesta','metal','revertit','triplets','unicorn'];

function startGame(){
    do{
        numberOfCards = parseInt(prompt('Com quantas cartas deseja jogar? (números pares entre 4 e 14)'));
    }while(numberOfCards % 2 !== 0 || numberOfCards < 4 || numberOfCards > 14);
    
    parrots.sort(compare);
    
    let chosenCards = [];
    
    for (let i = 0; i < numberOfCards / 2; i++) {
        chosenCards.push(parrots[i]);
        chosenCards.push(parrots[i]);
    }
    
    chosenCards.sort(compare);
    
    const cards = document.querySelector('.container');

    cards.innerHTML = '';
    timer.innerHTML = 0;    

    for (let i = 0; i < numberOfCards; i++) {
        cards.innerHTML += `
            <div class="card" data-identifier="card" onclick="flip(this)">
                <div class="front-face face" data-identifier="back-face">
                    <img src="./assets/front.png">
                </div>
                <div class="back-face face" data-identifier="front-face">
                    <img src="./assets/${chosenCards[i]}parrot.gif">
                </div>
            </div>
        `
    }

}

function flip(chosenCard){
    chosenCard.classList.add('turned');
    
    if(firstFlip === undefined){
        firstFlip = chosenCard;

        if(interval === undefined){
            interval = setInterval(counter, 1000);
        }
    
        return;
    }
    
    secondFlip = chosenCard;
    
    if(firstFlip.innerHTML === secondFlip.innerHTML){
        firstFlip = undefined;
        secondFlip = undefined;
        hits++;
    }else{
        setTimeout(desflip, 1000);
    }
    
    plays += 2;
    
    setTimeout(checkEndGame, 500);
}

function desflip(){
    firstFlip.classList.remove('turned');
    secondFlip.classList.remove('turned');
    firstFlip = undefined;
    secondFlip = undefined;
}

function checkEndGame(){
    numberOfPairs = numberOfCards / 2;

    if(hits === numberOfPairs){
        alert(`Você ganhou em ${plays} jogadas e em ${seconds} segundos!`);
        endgame();
    }

}

function endgame(){
    let playAgain = '';

    playAgain = prompt(`Deseja jogar novamente? (digite s ou n)`);
        
    plays = 0;
    hits = 0;
    seconds = 0;
        
    if(playAgain === 's'){
        clearInterval(interval);
        interval = undefined;
        startGame();
    }else {
        clearInterval(interval);
    }
}

function compare() { 
	return Math.random() - 0.5; 
}

startGame();
