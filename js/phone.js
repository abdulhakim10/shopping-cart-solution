function updatePhoneQuantity(isIncrese) {
    const phoneQuantityField = document.getElementById('ph-quantity-field');
    const phoneQuantityString = phoneQuantityField.value;
    const previousPhoneQuantity = parseInt(phoneQuantityString);

    let newPhoneQuantity;

    if (isIncrese === true) {
        newPhoneQuantity = previousPhoneQuantity + 1;
    }
    else {
        newPhoneQuantity = previousPhoneQuantity - 1;
    }

    phoneQuantityField.value = newPhoneQuantity;
    return newPhoneQuantity;
}


function updatePhoneTotalPrice(newPhoneQuantity) {
    const phonePrice = newPhoneQuantity * 1219;
    const phoneTotalPrice = document.getElementById('phone-total-price');
    phoneTotalPrice.innerText = phonePrice;
}



document.getElementById('phone-plus-btn').addEventListener('click', function () {
    const newPhoneQuantity = updatePhoneQuantity(true);

    updatePhoneTotalPrice(newPhoneQuantity);
})

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    const newPhoneQuantity = updatePhoneQuantity(false);
    updatePhoneTotalPrice(newPhoneQuantity);
})