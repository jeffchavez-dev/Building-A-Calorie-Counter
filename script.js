const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget')
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')

let isError = false

function cleanInputString (str) {
    const regex = /[+-\s]g/;
    return str.replace(regex, "")


    // const strArray = str.split('');
    // const cleanStrArray = [];

    // for (let i = 0; i < strArray.length; i++) {
    //     if (!["+", "-", " "].includes(strArray[i])) {
    //         cleanStrArray.push(strArray[i])
    //     } 
    // }
}

function isInvalidInput(str) {
    const regex = /\d+e\d+/i
    return str.match(regex)
}


function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry${entryNumber} Name</label>
        <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">Entry${entryNumber}">
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" placeholder="Calories" min="0" id="${entryDropdown.value}-${entryNumber}-calories">

    `

}