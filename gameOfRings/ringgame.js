let globalScores;
let localScore;
let isGameOn;
let activePlayer;
let finalScore = 100;
const fpn = 'Bilbo';
const spn = 'Gollum';
const names = ['Bilbo', 'Gollum']

init()
function init() {
    globalScores = [0, 0];
    localScore = 0;
    isGameOn = true;
    activePlayer = 0;

    document.querySelector("#name-0").textContent = names[0];
    document.querySelector("#name-1").textContent = names[1];

    document.querySelector("#score-0").textContent = '0'; document.getElementById('score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    // document.getElementsByClassName('dice').style.display = 'none'
    document.querySelector('.dice-2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

}


function nextPlayer() {
    // if (activePlayer === 0) {
    //     activePlayer = 1
    // } else {
    //     activePlayer = 0
    // }
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}


document.querySelector('.btn-roll').addEventListener('click', () => {
    if (isGameOn) {

        const rand = Math.random() * 6 + 1;
        const flooredRand = Math.floor(rand);
        const diceDom = document.querySelector('.dice');
        diceDom.src = `dice-${flooredRand}.png`;
        diceDom.style.display = 'block';


        const rand2 = Math.random() * 6 + 1;
        const flooredRand2 = Math.floor(rand2);
        const dicedom2 = document.querySelector('.dice-2');
        dicedom2.src = `dice-${flooredRand2}.png`;
        dicedom2.style.display = 'block';

        if (flooredRand !== 1 && flooredRand2 !== 1) {
            localScore = localScore + flooredRand + flooredRand2;
            document.querySelector(`#current-${activePlayer}`).textContent = localScore
        } else {
            localScore = 0;
            document.querySelector(`#current-${activePlayer}`).textContent = '0';
            nextPlayer()
        }
    }
})


// const fpn = 'Bilbo';
// const spn = 'Gollum';
// const 
document.querySelector('.btn-hold').addEventListener('click', () => {
    if (isGameOn) {
        globalScores[activePlayer] = globalScores[activePlayer] + localScore;
        document.querySelector(`#score-${activePlayer}`).textContent = globalScores[activePlayer];
        document.querySelector(`#current-${activePlayer}`).textContent = '0';
        localscore = 0;
        if (globalScores[activePlayer] >= finalScore) {
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            // document.getElementById(`name-${activePlayer}`).textContent = `Winner is ${activePlayer === 0 ? fpn : spn}`;
            document.getElementById(`name-${activePlayer}`).textContent = `Winner is ${names[activePlayer]}`
            isGameOn = false;
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
        } else {
            nextPlayer()
        }
    }
})


document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.final-score').addEventListener('input', function() {
    if (this.value){
        finalScore = +this.value
    } else {
        finalScore = 100
    }
    this.value ? finalScore = +this.value : finalScore = 100
})

document.querySelector('#player-name-0').addEventListener('input', function() {
    names[0] = this.value
    document.querySelector("#name-0").textContent = names[0];
})

document.querySelector('#player-name-1').addEventListener('input', function() {
    names[1] = this.value
    document.querySelector("#name-1").textContent = names[1];
})

document.querySelector('.btn-hold').addEventListener('click', () => {

})