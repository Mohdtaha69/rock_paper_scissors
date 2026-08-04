let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

function getComputerChoice() {

    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "rock";
    }

    else if (random === 1) {
        return "paper";
    }

    return "scissors";
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        result.textContent =
            `Tie! Both chose ${humanChoice}.`;
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {

        humanScore++;

        result.textContent =
            `You Win! ${humanChoice} beats ${computerChoice}.`;
    }

    else {

        computerScore++;

        result.textContent =
            `You Lose! ${computerChoice} beats ${humanChoice}.`;
    }

    score.textContent =
        `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {

        if (humanScore > computerScore) {
            winner.textContent = "🎉 You won the game!";
        }

        else {
            winner.textContent = "💻 Computer won the game!";
        }

        document.querySelectorAll("button").forEach(button => {
            button.disabled = true;
        });
    }
}

document.querySelector("#rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.querySelector("#paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.querySelector("#scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});