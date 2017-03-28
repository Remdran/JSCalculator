var state = 1;
var input1 = '';
var input2 = '';
var oper;
var calcOn = true;
var output = 0;
var stringIn = ''
var stringArr = [];

var outputbox = document.getElementById('outputbox');
var inputString = document.getElementById('stringinput');

//=======================================================================
// Numbers
//=======================================================================
const numButtons = Array.from(document.querySelectorAll(".num"));

numButtons.forEach(function (num) {
    num.addEventListener('click', function () {
        if (calcOn) {
            if (state === 1) {
                input1 += num.dataset.num;
                outputbox.innerHTML = input1;
                stringIn += num.dataset.num;
            } else if (state === 2) {
                input2 += num.dataset.num;
                outputbox.innerHTML = input2;
                stringIn += num.dataset.num;
            }
        }
    });
});

//=======================================================================
// OPERATORS
//=======================================================================
const opButtons = Array.from(document.querySelectorAll(".op"));

opButtons.forEach(function (opButton) {
    opButton.addEventListener('click', function () {
        if (calcOn) {
            oper = opButton.dataset.op;
            if (state === 2) {
                output = CalculateAnswer();
                input1 = output;
                input2 = '';
                outputbox.innerHTML = output;
            } else {
                state = 2;
            }
            stringIn += ' ' + oper + ' ';
            stringArr.push(stringIn);
            stringIn = '';
            inputString.innerHTML = stringArr.join('');
        }
    });
});


var buttonEquals = document.getElementById('equals');
buttonEquals.addEventListener('click', function () {
    if (calcOn) {
        output = CalculateAnswer();
        outputbox.innerHTML = output;
        state = 1;
        input1 = output;
        input2 = '';
        stringIn = output;
        stringArr = [];
        stringArr.push(stringIn);
        stringIn = '';
        inputString.innerHTML = '';
    }
});

//=======================================================================
// ON/OFF and Clear buttons
//=======================================================================

var buttonOn = document.getElementById('on');
buttonOn.addEventListener('click', function () {
    calcOn = true;
    outputbox.classList.remove('off');
    outputbox.classList.add('on');
    outputbox.innerHTML = '0';
    stringIn = '';
    stringArr = [];
    inputString.innerHTML = '';
});

var buttonOff = document.getElementById('off');
buttonOff.addEventListener('click', function () {
    calcOn = false;
    outputbox.innerHTML = '';
    input1 = '';
    input2 = '';
    state = 1;
    outputbox.classList.remove('on');
    outputbox.classList.add('off');
    stringIn = '';
    stringArr = [];
    inputString.innerHTML = '';
});

var buttonClearE = document.getElementById('ce');
buttonClearE.addEventListener('click', function () {
    if (calcOn) {
        if (state === 1) {
            outputbox.innerHTML = '0';
            input1 = '';
            stringIn = '';
        } else if (state === 2) {
            outputbox.innerHTML = '0';
            input2 = '';
            stringIn = '';
        }
    }
});

var buttonClear = document.getElementById('c');
buttonClear.addEventListener('click', function () {
    if (calcOn) {
        stringIn = '';
        stringArr = [];
        inputString.innerHTML = '';
        outputbox.innerHTML = '0';
        input1 = '';
        input2 = '';
        state = 1;
    }
});

function CalculateAnswer() {
    if (oper === '+')
        return parseFloat(input1) + parseFloat(input2);
    else if (oper === '-')
        return parseFloat(input1) - parseFloat(input2);
    else if (oper === '/')
        return parseFloat(input1) / parseFloat(input2);
    else if (oper === 'x')
        return parseFloat(input1) * parseFloat(input2);
}