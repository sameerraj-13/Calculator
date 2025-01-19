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
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div class="buttons">
            <button onclick="appendNumber('1')">1</button>
            <button onclick="appendNumber('2')">2</button>
            <button onclick="appendNumber('3')">3</button>
            <button onclick="appendOperator('+')">+</button>
            <button onclick="appendNumber('4')">4</button>
            <button onclick="appendNumber('5')">5</button>
            <button onclick="appendNumber('6')">6</button>
            <button onclick="appendOperator('-')">-</button>
            <button onclick="appendNumber('7')">7</button>
            <button onclick="appendNumber('8')">8</button>
            <button onclick="appendNumber('9')">9</button>
            <button onclick="appendOperator('*')">*</button>
            <button onclick="appendNumber('0')">0</button>
            <button onclick="clearDisplay()">C</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="appendOperator('/')">/</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
