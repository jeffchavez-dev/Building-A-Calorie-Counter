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
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1
    // const HTMLString = `
    //     <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    //     <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
    //     <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    //     <input type="number" placeholder="Calories" min="0" id="${entryDropdown.value}-${entryNumber}-calories">
    // `
    targetInputContainer.insertAdjacentHTML('beforeend', `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" placeholder="Calories" min="0" id="${entryDropdown.value}-${entryNumber}-calories">
    `) 
}

addEntryButton.addEventListener('click', addEntry)


function getCaloriesFromInputs(list) {
    let calories = 0
    
    let i;
    for (i = 0; i < list.length; i++) {
        const currVal = cleanInputString(list[i].value)
        const invalidInputMatch = isInvalidInput(currVal)
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`)
            isError = true
            return null
        }
        calories += Number(currVal)
    }
    return calories
}

function calculateCalories(e) {
    e.preventDefault()
    isError = false

    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]')
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]')
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]')
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]')
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]')

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs)
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs)
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs)
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs)
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs)

    const budgetCalories = getCaloriesFromInputs([budgetNumberInput])

    if (isError) {
        return
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories
}