var errors = [];
var isValid = false;

if (!data.debitTarget || !data.debitTarget.id) {
    errors.push("INVALID_DEBIT_TARGET")
}

if (!data.withdrawalDate) {
    errors.push("INVALID_WITHDRAWAL_DATE")
}

if (!data.amount || !scriptNumberHelper.isGreaterThen(data.amount.value, 0)) {
    errors.push("INVALID_AMOUNT")
}

if (!data.branch || !data.branch.id) {
    errors.push("INVALID_BRANCH")
}

if (!data.beneficiary || !data.beneficiary.trim()) {
    errors.push("INVALID_BENEFICIARY")
}

if (errors.length === 0) {
    isValid = true
}

var result = {
    "valid": isValid,
    "errors": errors
};

result