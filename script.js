function calculateResult() {
    const inputNumber = document.getElementById('ip').value;

    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputNumber);
        }, 2000);
    });

    promise1
        .then((result) => {
            printResult(`Result: ${result}`);
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result * 2);
                }, 1000);
            });
        })
        .then((result) => {
            printResult(`Result: ${result}`);
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result - 3);
                }, 1000);
            });
        })
        .then((result) => {
            printResult(`Result: ${result}`);
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result / 2);
                }, 1000);
            });
        })
        .then((result) => {
            printResult(`Result: ${result}`);
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result + 10);
                }, 1000);
            });
        })
        .then((finalResult) => {
            printResult(`Final Result: ${finalResult}`);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function printResult(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
}