document.addEventListener("DOMContentLoaded", () => {
    let screen = document.querySelector("#screen");
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let buttonText = e.target.innerText;

            if (buttonText === "AC") {
                screen.value = ""; 
            } 
            else if (buttonText === "CE") {
                screen.value = screen.value.slice(0, -1); 
            } 
            else if (buttonText === "=") {
                try {
                    screen.value = evaluateExpression(screen.value);
                } catch {
                    screen.value = "Error";
                }
            } 
            else if (buttonText === "x!") {
                screen.value = factorial(parseInt(screen.value)) || "Error";
            } 
            else if (buttonText === "√") {
                screen.value = Math.sqrt(parseFloat(screen.value)) || "Error";
            } 
            else if (buttonText === "π") {
                screen.value += Math.PI.toFixed(8);
            } 
            else if (buttonText === "e") {
                screen.value += Math.E.toFixed(8);
            } 
            else if (buttonText === "log") {
                screen.value = Math.log10(parseFloat(screen.value)) || "Error";
            } 
            else if (buttonText === "x²") {
                screen.value = Math.pow(parseFloat(screen.value), 2);
            } 
            else if (buttonText === "xʸ") {
                screen.value += "**";
            } 
            else if (buttonText.includes("sin")) {
                screen.value = Math.sin(toRadians(parseFloat(screen.value))) || "Error";
            } 
            else if (buttonText.includes("cos")) {
                screen.value = Math.cos(toRadians(parseFloat(screen.value))) || "Error";
            } 
            else if (buttonText.includes("tan")) {
                screen.value = Math.tan(toRadians(parseFloat(screen.value))) || "Error";
            } 
            else if (buttonText.includes("cosec")) {
                screen.value = 1 / Math.sin(toRadians(parseFloat(screen.value))) || "Error";
            } 
            else if (buttonText.includes("sec")) {
                screen.value = 1 / Math.cos(toRadians(parseFloat(screen.value))) || "Error";
            } 
            else if (buttonText.includes("cot")) {
                screen.value = 1 / Math.tan(toRadians(parseFloat(screen.value))) || "Error";
            } 
            else {
                screen.value += buttonText;
            }
        });
    });


    function evaluateExpression(expr) {
        return new Function("return " + expr)();
    }


    function factorial(n) {
        if (n < 0) return null;
        if (n === 0 || n === 1) return 1;
        let fact = 1;
        for (let i = 2; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }
});
