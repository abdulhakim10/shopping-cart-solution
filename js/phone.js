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
}



document.getElementById('phone-plus-btn').addEventListener('click', function () {
    updatePhoneQuantity(true);
})

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    updatePhoneQuantity(false);
})