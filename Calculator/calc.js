function displayValue(val) {
    document.getElementById("display").value = document.getElementById("display").value + val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    var userInput = document.getElementById("display").value;
    try {
        // evaluate expression
        var result = eval(userInput);

        // check if valid number was entered
        if (isNaN(result)) throw new Error("Invalid input");

        // update the display with the calculated value
        document.getElementById("display").value = result;
    } catch (err) {
        alert("Error: " + err.message);
        clearDisplay();
    };
}

function keyboardFunctionality(event) {
    // Get the pressed key from the event
    var keyPressed = event.key;

    // Check if the pressed key is a valid input (0-9, +, -, *, /, ., c, =)
    if (/[\d\+\-\*\/\.=c]/.test(keyPressed)) {
        // Perform the action based on the pressed key
        switch (keyPressed) {
            case "0":
                displayValue('0');
                break;
            case ".":
                if (!document.getElementById("display").value.includes('.')) {
                    displayValue('.');
                }
                break;
            case "c":
                clearDisplay();
                break;
            case "=":
                calculate();
                break;
            case "Backspace":
                backspace();
                break;
            default:
                displayValue(keyPressed);
        }
    }
}

function backspace() {
    var currentValue = document.getElementById("display").value;
    // Remove the last character from the display
    document.getElementById("display").value = currentValue.slice(0, -1);
}