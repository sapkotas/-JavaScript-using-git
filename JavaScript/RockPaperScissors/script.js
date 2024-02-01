// Create Rock, Paper & Scissors game in JavaScript.
// The game should ask you to enter R, P or S. The computer should be able to randomly generate S, W or G and declare win or loss using alert
// Use alert, prompt and confirm whereever required!

let player = prompt ("Enter Rock Paper or Sissors:");
let computerI = Math.floor(Math.random() * 3);
let computer= [ "Rock","Paper", "Sissors"][computerI];

function match (player,computer){
    if (player === computer ){
        return "The match is draw";
    }
    else if(player === "Rock" && computer==="Sissors"){
        return "player";
    }
    else if( player ==="Paper" && computer==="Rock"){
        return "player";
    }
    else if (player === "Sissors" && computer === "Paper"){
        return "player";
    }
    else if(player === "Sissors" && computer==="Rock"){
        return "computer";
    }
    else if( player ==="Rock" && computer==="Paper"){
        return "computer";
    }
    else if (player === "Paper" && computer=== "Sissors"){
        return "computer";
    }
}
let result = match(player, computer)
document.write(`COMPUTER:${computer} <br> PLAYER:${player} <br>The winner is: ${result.toUpperCase()}` )

