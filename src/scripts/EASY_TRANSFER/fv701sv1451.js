var errors = [];
var isValid = false;

if (!data.debitTarget || !data.debitTarget.id) {
    errors.push("INVALID_DEBIT_TARGET")
}

if (!data.beneficiaryClientId) {
    errors.push("INVALID_BENEFICIARY_CLIENT_ID")
}

if (!data.debitAmount || !scriptNumberHelper.isGreaterThen(data.debitAmount.value, 0)) {
    errors.push("INVALID_DEBIT_AMOUNT")
}

if (!data.creditAmount || !scriptNumberHelper.isGreaterThen(data.creditAmount.value, 0)) {
    errors.push("INVALID_CREDIT_AMOUNT")
}

if (!data.rate) {
    errors.push("INVALID_RATE")
}

if (!data.beneficiary || !data.beneficiary.trim()) {
    errors.push("INVALID_BENEFICIARY")
}

if (!data.purpose || !data.purpose.trim()) {
    errors.push("INVALID_PURPOSE")
}

if (errors.length === 0) {
    isValid = true
}

var result = {
    "valid": isValid,
    "errors": errors
};

result