
// another function
function updateCaseTotalPrice (currentCaseNumber){
    const totalPrice = currentCaseNumber * 59;
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = totalPrice ;
}
// -----------------
// using addEventListener in plus button
document.getElementById('btn-case-plus').addEventListener('click',function(){
  const currentCaseNumber= updatePhoneNumber(true,'case-number-field');

  updateCaseTotalPrice (currentCaseNumber);
//   adding subtotal
calculateSubTotal();
})
// ------------------
// using addEventListener in minus button
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const currentCaseNumber= updatePhoneNumber(false, 'case-number-field');

    updateCaseTotalPrice (currentCaseNumber);
// adding subtotal
calculateSubTotal();
})
