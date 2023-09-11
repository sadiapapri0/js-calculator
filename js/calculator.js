let inputField = document.getElementById('input-field');
const buttons = document.querySelectorAll('button');
let string = '';
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        if (event.target.innerText === '=') {
            string = eval(string);
            inputField.value = string;
        }

        else if (event.target.innerText === 'AC') {
            string = '';
            inputField.value = string;
        }

        else if (event.target.innerText === 'DEL') {
            string = string.substring(0, string.length - 1);
            inputField.value = string;
        }

        else {
            string += event.target.innerText;
            inputField.value = string;
        }
    })

}