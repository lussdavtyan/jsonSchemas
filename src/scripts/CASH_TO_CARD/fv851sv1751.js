var errors = [];
var isValid = false;

if (!data.transferCode || !data.transferCode.trim()) {
    errors.push("INVALID_TRANSFER_CODE")
}

if (!data.creditTarget || !data.creditTarget.id) {
    errors.push("INVALID_CREDIT_TARGET")
}

if (!data.transferSystem || !data.transferSystem.id) {
    errors.push("INVALID_TRANSFER_SYSTEM")
}

if (!data.creditAmount || !scriptNumberHelper.isGreaterThen(data.creditAmount.value, 0)) {
    errors.push("INVALID_CREDIT_AMOUNT")
}

if (!data.debitAmount || !scriptNumberHelper.isGreaterThen(data.debitAmount.value, 0)) {
    errors.push("INVALID_DEBIT_AMOUNT")
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