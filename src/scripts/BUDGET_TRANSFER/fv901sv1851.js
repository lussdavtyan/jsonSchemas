var errors = [];
var isValid = false;

if (!data.debitTarget || !data.debitTarget.id) {
    errors.push("INVALID_DEBIT_TARGET")
}

if (!data.creditTarget || !data.creditTarget.number) {
    errors.push("INVALID_CREDIT_TARGET")
}

if (!data.debitAmount || !scriptNumberHelper.isGreaterThen(data.debitAmount.value, 0)) {
    errors.push("INVALID_DEBIT_AMOUNT")
}

if (!data.creditAmount || !scriptNumberHelper.isGreaterThen(data.creditAmount.value, 0)) {
    errors.push("INVALID_CREDIT_AMOUNT")
}

if (!data.beneficiary || !data.beneficiary.trim()) {
    errors.push("INVALID_PURPOSE")
}

if (!data.purpose || !data.purpose.trim()) {
    errors.push("INVALID_DETAILS")
}

if(!data.taxArea || !data.taxArea.id){
    errors.push("INVALID_TAX_AREA")
}

if(data.mainCreditor){
    if(!data.mainCreditor.type || !data.mainCreditor.type.id){
        errors.push("INVALID_MAIN_CREDITOR_TYPE")
    }
    if(!data.mainCreditor.residence || !data.mainCreditor.residence.id){
        errors.push("INVALID_MAIN_CREDITOR_RESIDENCE")
    }
}
if(data.mainDocument){
    if(!data.mainDocument.transferReason || !data.mainDocument.transferReason.id){
        errors.push("INVALID_MAIN_DOCUMENT_TRANSFER_REASON")
    }
}

if (errors.length === 0) {
    isValid = true
}

var result = {
    "valid": isValid,
    "errors": errors
};

result