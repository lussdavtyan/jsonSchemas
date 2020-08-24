var creditTarget = scriptFavoriteAccountHelper.getFavoriteAccount(data.document.data.beneficiaryClientId, data.document.data.creditAmount.currency);
var result = {
    "type": "EASY_TRANSFER",
    "data": {
        "documentId": data.document.id,
        "transferDate": data.document.created,
        "debitTarget": {
            "id": data.document.data.debitTarget.id,
            "type": data.document.data.debitTarget.type
        },
        "creditTarget": creditTarget,
        "beneficiaryClientId": scriptClientHelper.getBankClientReferenceId(data.document.data.beneficiaryClientId),
        "debitAmount": data.document.data.debitAmount.value,
        "creditAmount": data.document.data.creditAmount.value,
        "rate": data.document.data.rate,
        "beneficiary": data.document.data.beneficiary,
        "purpose": data.document.data.purpose
    }
};
result