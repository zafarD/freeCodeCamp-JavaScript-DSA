const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

function getInput() {
    const text = textInput.value;
    console.log(text);
}

checkButton.addEventListener("click", getInput);

