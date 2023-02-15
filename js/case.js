
function updateCaseNumber (istrue){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previousCaseNumber = parseInt(caseNumberString);

    let currentCaseNumber  ;
    if(istrue === true){
        currentCaseNumber = previousCaseNumber + 1 ;
    }
    else{
        if(previousCaseNumber === 0){
            alert('Out Of Stock');
            return;
        }
            currentCaseNumber = previousCaseNumber - 1 ;
    }
    caseNumberField.value = currentCaseNumber;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
  updateCaseNumber(true);
})
// using addEventListener in minus button
document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
})
