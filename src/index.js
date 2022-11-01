let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let displayVal = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        inputText = e.target.innerText;
        // console.log(inputText);
        if (inputText == 'X') {
            inputText = '*';
            displayVal += inputText;
            display.value = displayVal;
        }
        else if (inputText == 'C') {
            displayVal = "";
            display.value = displayVal;
        }
        else if (inputText == '=') {
            display.value = eval(displayVal);
        }
        else {
            displayVal += inputText;
            display.value = displayVal;
        }

    })
}