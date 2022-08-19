function getTextElementValueById(elementId) {
    const totalElement = document.getElementById(elementId);
    const currentTotalElementString = totalElement.innerText;
    const currentTotal = parseFloat(currentTotalElementString);
    return currentTotal;
}


function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    const taxTotalString = (currentSubTotal * 0.1).toFixed(2);
    const taxTotal = parseFloat(taxTotalString);

    setTextElementValueById('tax-total', taxTotal);

    const finalTotal = currentSubTotal + taxTotal;
    setTextElementValueById('final-total', finalTotal);
}