function validationNumber() {
    const inputField = document.getElementById('inputText')
    const messageEl = document.getElementById('message');
    const number = parseInt(inputField.value)

    if (isNaN(number)) {
        messageEl.textContent = "Please enter a valid number";
        messageEl.classList.add("red")
        return
    }

    if (number < 0) {
        messageEl.textContent = "Enter a positive value"
        messageEl.classList.add("dark-red")
        
    }else if (number % 2 === 0) {
        messageEl.textContent = `Next 3 even numbers: ${number +2}, ${number +4}, ${number +6}`
        messageEl.classList.add("green")
    }else{
        messageEl.textContent = `Next 3 odd numbers: ${number +2}, ${number +4}, ${number +6}`
        messageEl.classList.add("green")
    }
}
