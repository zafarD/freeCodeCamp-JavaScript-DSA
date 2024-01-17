const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

textInput.addEventListener("click", (e) => {
    e.preventDefault();
    const text = textInput.value;
    console.log(text);
})

