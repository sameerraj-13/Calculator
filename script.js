// Append number to the display
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

// Append operator to the display
function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += ' ' + operator + ' ';
}

// Clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '+') {
        appendOperator('+');
    } else if (key === '-') {
        appendOperator('-');
    } else if (key === '*') {
        appendOperator('*');
    } else if (key === '/') {
        appendOperator('/');
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    }
});



