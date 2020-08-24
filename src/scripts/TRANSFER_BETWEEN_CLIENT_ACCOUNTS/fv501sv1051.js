
var errors = [];
var isValid = false;
var debitTargetType = 'ACCOUNT';

if (!data.debitTarget || !data.debitTarget.id) {
    errors.push("INVALID_DEBIT_TARGET")
}
else {
    debitTargetType = data.debitTarget.type;
}

if (!data.debitAmount || !scriptNumberHelper.isGreaterThen(data.debitAmount.value, 0)) {
    errors.push("INVALID_DEBIT_AMOUNT")
}
else {
    if(debitTargetType === 'ACCOUNT' && scriptNumberHelper.isGreaterThen(data.debitAmount.value, scriptBalanceHelper.getAvailableBalance(data.debitTarget.id))){
        errors.push("INSUFFICENT_DEBIT_AMOUNT")
    }
}

if (!data.creditTarget || !data.creditTarget.id) {
    errors.push("INVALID_CREDIT_TARGET")
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

if (errors.length === 0) {
    isValid = true
}

var result = {
    "valid": isValid,
    "errors": errors
};

result