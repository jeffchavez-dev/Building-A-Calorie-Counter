const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')

let isError = false

function cleanInputString (str) {
    const regex = /hello/;
    const strArray = str.split('');
    const cleanStrArray = [];

    for (let i = 0; i < strArray.length; i++) {
        if (!["+", "-", " "].includes(strArray[i])) {
            cleanStrArray.push(strArray[i])
        } 
    }
}

cleanInputString()


