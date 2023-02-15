
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previousCaseNumber = parseInt(caseNumberString);

    const currentCaseNumber = previousCaseNumber + 1 ;
    caseNumberField.value = currentCaseNumber;
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberFieldMinus = document.getElementById('case-number-field');
    const caseNumberStringMinus = caseNumberFieldMinus.value ;
    const previousCaseNumberMinus = parseInt(caseNumberStringMinus);

    if(previousCaseNumberMinus === 0){
        alert('Out Of Stock');
        return;
    }
    const currentCaseNumberMinus = previousCaseNumberMinus - 1 ;
    caseNumberFieldMinus.value = currentCaseNumberMinus;
})
