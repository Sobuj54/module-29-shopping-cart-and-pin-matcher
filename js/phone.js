// for plus button
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    const currentPhoneNumber = previousPhoneNumber + 1 ;
    phoneNumberField.value = currentPhoneNumber;

    const phonePrice = document.getElementById('phone-price');
    const phonePriceString = phonePrice.innerText;
    const previousPhonePrice = parseInt(phonePriceString);

    const currentPhonePrice = currentPhoneNumber * 1219;
    phonePrice.innerText = currentPhonePrice;

})
// for minus button
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    const currentPhoneNumber = previousPhoneNumber - 1 ;
    phoneNumberField.value = currentPhoneNumber;

    const phonePrice = document.getElementById('phone-price');
    const phonePriceString = phonePrice.innerText;
    const previousPhonePrice = parseInt(phonePriceString);
    
    const currentPhonePrice = currentPhoneNumber * 1219;
    phonePrice.innerText = currentPhonePrice;
})