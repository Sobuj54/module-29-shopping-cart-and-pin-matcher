// ------
// adding 1 or subtracting 1 from input field done by this function
function updatePhoneNumber (isTrue,elementId){
    const phoneNumberField = document.getElementById(elementId);
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
// ----------
// function needed to add sub total
function setSubTotal (elementId){
    const casePrice = document.getElementById(elementId);
    const casePriceString = casePrice.innerText;
    const casePriceValue = parseInt(casePriceString);
    return casePriceValue;
}
// setting sub total using function
function setTextElementById (elementId,value){
    const subtotalValue = document.getElementById(elementId);
    subtotalValue.innerText = value;
}
// function adding sub total
function calculateSubTotal (){
    const phonePriceInt = getElementValueById('phone-price');

    const casePriceValue = setSubTotal('case-price');
    const totalSub = phonePriceInt + casePriceValue;

    setTextElementById('subtotal-value',totalSub);
    // tax amount
    const taxAmountString = (totalSub * 0.1).toFixed(2) ;
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-total',taxAmount);
    // tax + total amount
    const total = totalSub + taxAmount;
    setTextElementById('phone-case-total',total);
}