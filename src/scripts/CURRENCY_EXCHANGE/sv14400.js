var debitTargetType = '';
var debitTargetNumber = '';
if (data.document.data.debitTarget) {
    debitTargetType = data.document.data.debitTarget.targetType || data.document.data.debitTarget.type
}
switch (debitTargetType) {
    case 'ACCOUNT':
        debitTargetNumber = data.document.data.debitTarget.accountNumber || data.document.data.debitTarget.number;
        break;
    case 'CARD':
        debitTargetNumber = data.document.data.debitTarget.displayCardNumber || data.document.data.debitTarget.number;
        break;
    case 'DEPOSIT':
        debitTargetNumber = data.document.data.debitTarget.contractNumber || data.document.data.debitTarget.number;
        break;
    case 'LOAN':
        debitTargetNumber = data.document.data.debitTarget.contractNumber || data.document.data.debitTarget.number;
        break;
}

var result = {
    "clientId": data.document.clientId,
    "notificationType": {
        "code": data.document.workflowCode + "_APPROVED"
    },
    "metadata": {
        "documentId": data.document.id,
        "workflowCode": data.document.workflowCode,
        "creationDate": data.document.created,
        "debitCurrency": data.document.data.debitAmount.currency,
        "debitAmount": data.document.data.debitAmount.value,
        "purpose": data.document.data.purpose,
        "debitTargetType": debitTargetType,
        "debitTargetNumber": debitTargetNumber
    }
};

result