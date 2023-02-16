// phone number update function
function updatePhoneNumber (isTrue){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    let currentPhoneNumber;
    if(isTrue === true){
         currentPhoneNumber = previousPhoneNumber + 1 ;
    }
    else{
         currentPhoneNumber = previousPhoneNumber - 1 ;
    }
    phoneNumberField.value = currentPhoneNumber;
    return currentPhoneNumber;
}
// price update function
function updatePhoneTotalPrice (currentPhoneNumber){
    const currentPhonePrice = currentPhoneNumber * 1219;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = currentPhonePrice;
}

// for plus button
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const currentPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(currentPhoneNumber);
})
// for minus button
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const currentPhonePrice = updatePhoneNumber(false);

    updatePhoneTotalPrice(currentPhonePrice);
})