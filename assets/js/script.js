
const options = document.querySelectorAll(".rps_options");
let player_score = 0;
let comp_score = 0;

options.forEach((option) => {
    option.addEventLister("click", function () {
        const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random () * 3)];

        compareInputs (pInput, cInput);
    }); 
});

function compareInputs (pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;
    // Draw
    if (pInput === cInput) {
        alert(`${currentMatch} is a Tie`);
        return;
    }

    //Rock
    if (pInput === "Rock") {
        if (cInput === "Scissors") {
            alert (`${currentMatch} = You Win`)
        } else {
            alert (`${currentMatch} = Computer Wins`)
        }
    }

    //Paper
    else if (pInput === "Paper") {
        if (cInput === "Rock") {
            alert (`${currentMatch} = You Win`)
        } else {
            alert (`${currentMatch} = Computer Wins`)
        }
    }

    //Scissors
    else if (pInput === "Scissors") {
        if (cInput === "Paaper") {
            alert (`${currentMatch} = You Win`)
        } else {
            alert (`${currentMatch} = Computer Wins`)
        }
    }

}