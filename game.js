function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(3)
    let num1 = Math.floor(Math.random() * (max - min + 1)+min);
    if(num1 === 1) {
        return 'Rock';
    } else if (num1 === 2) {
        return 'Paper';
    } else if (num1 === 3) {
        return 'Scissors';
    }
}

console.log(getComputerChoice());