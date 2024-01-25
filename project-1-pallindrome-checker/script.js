const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function getInput() {
    const regex = /[^a-zA-Z0-9]/g;
    const inputText = textInput.value;
    const text = inputText.replace(regex, '').toLowerCase()
    console.log(text);
    if(!text) {
        window.alert("Please input a value");
        return;
    }
    if(isPalindrome(text)) {
        result.innerText = `${inputText} is a Palindrome`;
        return;
    } else {
        result.innerText = `${inputText} is not a Palindrome`;
        return;
    }
    
}

function isPalindrome(text) {
    if (text.length === 1) return true;
    for (let i = 0; i <= Math.floor(text.length / 2); i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

checkButton.addEventListener('click', getInput);
textInput.addEventListener('keydown',(e) => {
    if (e.key === "Enter") {
        getInput();
    }
});

