# Simple Calculator

This is a simple calculator implemented using HTML, CSS, and JavaScript. It allows basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Clear display
- Display calculation result

## Project Structure

The project consists of three main files:

1. `index.html`: Contains the structure of the calculator.
2. `style.css`: Contains the styles for the calculator.
3. `script.js`: Contains the logic for the calculator's functionality.

## How to Use

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.
3. Use the calculator by clicking on the buttons to perform arithmetic operations.

## File Contents

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <a href="https://github.com/sameerraj-13" target="_blank">
            <img src="SR.jpg" alt="Logo" id="logo">
        </a>
    </header> 

    <main class="container">
        <h1>Calculator</h1>
        <div class="calculator">
            <input type="text" id="display" placeholder=" 0 " disabled>
            <div class="buttons">
                <button onclick="appendNumber('1')">1</button>
                <button onclick="appendNumber('2')">2</button>
                <button onclick="appendNumber('3')">3</button>
                <button class="fun-btn" onclick="appendOperator('+')">+</button>
                <button onclick="appendNumber('4')">4</button>
                <button onclick="appendNumber('5')">5</button>
                <button onclick="appendNumber('6')">6</button>
                <button class="fun-btn" onclick="appendOperator('-')">-</button>
                <button onclick="appendNumber('7')">7</button>
                <button onclick="appendNumber('8')">8</button>
                <button onclick="appendNumber('9')">9</button>
                <button class="fun-btn" onclick="appendOperator('*')">*</button>
                <button onclick="appendNumber('0')">0</button>
                <button class="clear-btn" onclick="clearDisplay()">C</button>
                <button class="equals-btn" onclick="calculateResult()">=</button>
                <button class="fun-btn" onclick="appendOperator('/')">/</button>
        </div>
    </div>
    </main>
    <footer class="footer">
        <h6 class="name">SR<span class="brand">™</span></h6>
    </footer>
    <script src="script.js"></script>
</body>
</html>
```

### style.css

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #0379a4, #06005e, rgba(0, 0, 1, 0.955));
    justify-content: space-between;
}

.header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
}


#logo {
    height: 60px;
    transition: transform 0.3s ease;
    cursor: pointer;
}

#logo:hover {
    transform: scale(1.4); /* Animate scaling on hover */

}

.container {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    flex-direction: column;
}


h1 {
    margin: 0 0 21px;
    padding: 0px;
    font-size: 2em;
    position: relative;
    display: inline-block;
    color: #ffff00;
    letter-spacing: 6px;
    transition: transform 0.3s ease;
}

h1:hover{
    border: 25px;
    color: #0085d2;
    transform: scale(1.4); /* Animate scaling on hover */
}


.calculator {
    border: 1px solid #000000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 1, 0.6);
}

#display {
    width: 95%;
    padding: 10px;
    font-size: 1.5em;
    text-align: right;
    border: none;
    margin-bottom: 10px;
    border-radius: 6px;
}

input,
input::placeholder {
    font: 1.40rem/3 sans-serif;
    color: #060151;
}


.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 20px;
    font-size: 1.5em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    background-color: rgba(201, 199, 202, 0.56);
    transition: transform 0.2s ease;


}

button:hover {
    background-color: #1e19a8e6;
    transform: scale(1.12); /* Animate scaling on hover */


}

button.fun-btn:hover {
    background-color: #ffff00;
}

button.equals-btn:hover {
    background-color: rgb(45, 193, 34); /* Change the background color to red when hovered */
}

button.clear-btn:hover{
    background-color: red; 
}


.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
}

.footer .name {
    margin: 0 0 0px;
    padding: 0px;
    position: relative;
    font-size: 2em;
    color: #ffff00;
    letter-spacing: 2px;
    transition: transform 0.3s ease;
}


.footer .name:hover {
    border: 20px;
    color: #0085d2;
    transform: scale(1.3); /* Animate scaling on hover */
}


.footer .brand {
    font-size: 0.6em; /* Smaller font size for brand name */
    vertical-align: top;
}

```

### script.js

```js
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
```
#### Thank You
```txt
Team,
SR
```

