function updateCaseNumber(isIncrese) {
    const caseNumberField = document.getElementById('case-value-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrese === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}


function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('case-plus-btn').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
})

document.getElementById('case-minus-btn').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
})