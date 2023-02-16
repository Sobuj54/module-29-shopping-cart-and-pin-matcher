// ---------------
// price update function
function updatePhoneTotalPrice (currentPhoneNumber){
    const currentPhonePrice = currentPhoneNumber * 1219;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = currentPhonePrice;
}

// --------------
function getElementValueById (elementId){
    const phonePrice = document.getElementById(elementId);
    const phonePriceString = phonePrice.innerText;
    const phonePriceInt = parseInt(phonePriceString);
    return phonePriceInt;
}
// -------------
// for plus button
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const currentPhoneNumber = updatePhoneNumber(true, 'phone-number-field');

    updatePhoneTotalPrice(currentPhoneNumber);
    // adding subtotal
   calculateSubTotal();
})

// ---------------
// for minus button
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const currentPhonePrice = updatePhoneNumber(false, 'phone-number-field');

    updatePhoneTotalPrice(currentPhonePrice);
    // adding sub total
    calculateSubTotal();
})