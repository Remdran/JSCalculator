var buttonArray = document.querySelectorAll("button"); //Turn into an array, not a nodelist
console.log(buttonArray);

var state = 1;
var input1 = '';
var input2 = '';
var oper;

var outputbox = document.getElementById('outputbox');


//=========================================================
// NUMBERS
//=========================================================
var button0 = document.getElementById('0');
button0.addEventListener('click', function () {
    if (state === 1) {
        input1 += button0.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button0.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

var button1 = document.getElementById('1');
button1.addEventListener('click', function () {
    if (state === 1) {
        input1 += button1.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button1.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

var button2 = document.getElementById('2');
button2.addEventListener('click', function () {
    if (state === 1) {
        input1 += button2.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button2.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

var button3 = document.getElementById('3');
button3.addEventListener('click', function () {
    if (state === 1) {
        input1 += button3.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button3.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

var button4 = document.getElementById('4');
button4.addEventListener('click', function () {
    if (state === 1) {
        input1 += button4.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button4.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});


var button5 = document.getElementById('5');
button5.addEventListener('click', function () {
    if (state === 1) {
        input1 += button5.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button5.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

var button6 = document.getElementById('6');
button6.addEventListener('click', function () {
    if (state === 1) {
        input1 += button6.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button6.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

var button7 = document.getElementById('7');
button7.addEventListener('click', function () {
    if (state === 1) {
        input1 += button7.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button7.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

var button8 = document.getElementById('8');
button8.addEventListener('click', function () {
    if (state === 1) {
        input1 += button8.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button8.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

var button9 = document.getElementById('9');
button9.addEventListener('click', function () {
    if (state === 1) {
        input1 += button9.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += button9.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

var buttonDecimal = document.getElementById('.');
buttonDecimal.addEventListener('click', function () {
    if (state === 1) {
        input1 += buttonDecimal.id;
        console.log("Input 1 = " + input1);
        outputbox.innerHTML = input1;
    } else if (state === 2) {
        input2 += buttonDecimal.id;
        console.log("Input 2 = " + input2);
        outputbox.innerHTML = input2;
    }
});

//=======================================================================
// OPERATORS
//=======================================================================
var buttonPlus = document.getElementById('plus');
buttonPlus.addEventListener('click', function () {  //IF IN STATE 2 DO THE CALCULATION AND PRINT TO TO SCREEN
    oper = buttonPlus.id;
    state = 2;
    console.log("Operator = " + oper);
    outputbox.innerHTML = '';
});

var buttonMultiply = document.getElementById('multiply');
buttonMultiply.addEventListener('click', function () {
    oper = buttonMultiply.id;
    state = 2;
    console.log("Operator = " + oper);
    outputbox.innerHTML = '';
});

var buttonDivide = document.getElementById('divide');
buttonDivide.addEventListener('click', function () {
    oper = buttonDivide.id;
    state = 2;
    console.log("Operator = " + oper);
    outputbox.innerHTML = '';
});

var buttonSubtract = document.getElementById('subtract');
buttonSubtract.addEventListener('click', function () {
    oper = buttonSubtract.id;
    state = 2;
    console.log("Operator = " + oper);
    outputbox.innerHTML = '';
});

var buttonEquals = document.getElementById('equals'); //If answer is bigger than 7 digits, only show 7 digits or set to 0 and say too large
buttonEquals.addEventListener('click', function () {
    if (oper === 'plus') {
        var output = parseFloat(input1) + parseFloat(input2);
        console.log(output);
        outputbox.innerHTML = output;
        state = 1;
    } else if (oper === 'multiply') {
        var output = parseFloat(input1) * parseFloat(input2);
        console.log(output);
        outputbox.innerHTML = output;
        state = 1;
    } else if (oper === 'divide') {
        var output = parseFloat(input1) / parseFloat(input2);
        console.log(output);
        outputbox.innerHTML = output;
        state = 1;
    } else if (oper === 'subtract') {
        var output = parseFloat(input1) - parseFloat(input2);
        console.log(output);
        outputbox.innerHTML = output;
        state = 1;
    }
});


