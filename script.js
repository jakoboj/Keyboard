class Keyboard {
    constructor(output) {
        this.output = output;
    }

    appendLetter(letter) {
        output.innerHTML = output.innerHTML.toString() + letter.toString();
    }

    delete() {
        output.innerHTML = output.innerHTML.slice(0, -1);
    }

    clickEnter() {
        alert(output.innerHTML);
    }

    clear() {
        output.innerHTML = "";
    }

    updateDisplay() {
        this.currentOutput = output.innerHTML;
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const letterButtons = document.querySelectorAll("[data-letter]");
const backButton = document.querySelector("[data-back]");
const operationButtons = document.querySelectorAll("[data-operation]");
const enterButton = document.querySelector("[data-enter]");
const shiftButton = document.querySelector("[data-shift]");
const spaceButton = document.querySelector("[data-space]");

let output = document.getElementById("output");

const myKeyboard = new Keyboard(output);

letterButtons.forEach(letter => {
    letter.addEventListener("click", () => {
        myKeyboard.appendLetter(letter.innerHTML);
        myKeyboard.updateDisplay();
    })
})

numberButtons.forEach(number => {
    number.addEventListener("click", () => {
        myKeyboard.appendNumber(number.innerHTML);
        myKeyboard.updateDisplay();
    })
})

spaceButton.addEventListener("click", () => {
    myKeyboard.appendSpace();
    myKeyboard.updateDisplay();
})

backButton.addEventListener("click", () => {
    myKeyboard.delete();
    myKeyboard.updateDisplay();
})

operationButtons.forEach(operation => {
    operation.addEventListener("click", () => {
        myKeyboard.appendOperation(operation.innerHTML);
        myKeyboard.updateDisplay();
    })
})

enterButton.addEventListener("click", () => {
    myKeyboard.clickEnter();
    myKeyboard.clear();
})

