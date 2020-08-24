var errors = [];
var isValid = false;

if (!data.debitTarget || !data.debitTarget.id) {
    errors.push("INVALID_DEBIT_TARGET")
}

if (!data.creditTarget || !data.creditTarget.number) {
    errors.push("INVALID_DEBIT_TARGET")
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

if (!data.purpose) {
    errors.push("INVALID_PURPOSE")
}

if (!data.country) {
    errors.push("INVALID_COUNTRY")
}

if (!data.bankInfo) {
    errors.push("INVALID_BANK_INFO")
}
else {
    if (!data.bankInfo.code || !data.bankInfo.code.trim()) {
        errors.push("INVALID_BANK_INFO_CODE")
    }
    if (data.creditAmount && !data.creditAmount.currency === 'RUB' && (!data.bankInfo.account || !data.bankInfo.account.trim())) {
        errors.push("INVALID_BANK_INFO_ACCOUNT")
    }
    if (!data.bankInfo.name || !data.bankInfo.name.trim()) {
        errors.push("INVALID_BANK_INFO_NAME")
    }
}
if(data.intermediaryBankInfo) {
    if (!data.intermediaryBankInfo.code || !data.intermediaryBankInfo.code.trim()) {
        errors.push("INVALID_INTERMIDIATE_BANK_INFO_CODE")
    }
    if (data.creditAmount && !data.creditAmount.currency === 'RUB' && (!data.intermediaryBankInfo.account || !data.intermediaryBankInfo.account.trim())) {
        errors.push("INVALID_INTERMIDIATE_BANK_INFO_ACCOUNT")
    }
    if (!data.intermediaryBankInfo.name || !data.intermediaryBankInfo.name.trim()) {
        errors.push("INVALID_INTERMIDIATE_BANK_INFO_NAME")
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