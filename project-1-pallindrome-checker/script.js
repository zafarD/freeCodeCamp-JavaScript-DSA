const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function getInput() {
    const text = textInput.value;
    if(!text) {
        window.alert("Please input a value");
        return;
    }
    if(isPalindrome(text)) {
        result.innerText = `${text} is a Palindrome`;
        return;
    } else {
        result.innerText = `${text} is not a Palindrome`;
        return;
    }
    // getInput.value = "";
    // return text;
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


// function showResult() {
//     const text = getInput();
//     const text2 = text.trim().toLowerCase();
//     const isTrue = isPalindrome(text2);
//     if (isTrue) {
//         result.innerHTML = `<h2>${text} is a Palindrome</h2>`
//     }
//     else {
//         result.innerHTML = `<h2>${text}  is not a palindrome</h2>`
//     }
    
// }


checkButton.addEventListener('click', getInput);

