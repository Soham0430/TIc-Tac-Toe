let blocks = document.querySelectorAll(".block");
let player1 = true;
let player2 = false;
let winnerDisplay = document.querySelector(".display");
let count = 0;
let winArray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

blocks.forEach((block) => {
    block.addEventListener("click", (evt) => {
        if (player1 && block.innerText === "") {
            block.innerHTML = "X";
            player1 = false;
            player2 = true;
        } else if (player2 && block.innerText === "") {
            block.innerHTML = "O";
            player2 = false;
            player1 = true;
        }

        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            winnerDisplay.innerHTML = `<p>Game is draw</p>`;
        }
    });
});

const checkWinner = () => {
    for (let winner of winArray) {
        let box1 = blocks[winner[0]].innerText;
        let box2 = blocks[winner[1]].innerText;
        let box3 = blocks[winner[2]].innerText;

        if (box1 !== "" && box2 !== "" && box3 !== "") {
            if (box1 === box2 && box2 === box3) {
                winnerDisplay.innerHTML = `<p class="winner-message">Congratulations, Winner is ${box1}  &#127881; &#129395;</p>`;
                applyAnimation(winner);
                applyAnimationDisplay(winnerDisplay);
                return true;
            }
        }
    }
};

const applyAnimation = (winner) => {
    winner.forEach((index) => {
        blocks[index].classList.add("winning-animation");
    });
};
const applyAnimationDisplay = (winner) => {

      winnerDisplay.classList.add("display-animation");
    
};

let resetButton = document.querySelector(".Res-but");
const resetGame = () => {
    blocks.forEach((block) => {
        block.innerHTML = "";
        block.classList.remove("winning-animation");
    });

    winnerDisplay.innerHTML = "";
    player1 = true;
    player2 = false;
    count = 0;
    winnerDisplay.classList.remove("display-animation");

};

resetButton.addEventListener("click", resetGame);
