var result = {
    "type": "TRANSFER_TO_OTHER_ACCOUNTS",

    "data": {
        "documentId": data.document.id,
        "transferDate": data.document.created,
        "debitTarget": {
            "id": data.document.data.debitTarget.id,
            "type": data.document.data.debitTarget.type
        },
        "creditTarget": {
            "number": data.document.data.creditTarget.number,
            "type": data.document.data.creditTarget.type
        },
        "debitAmount": data.document.data.debitAmount.value,
        "creditAmount": data.document.data.creditAmount.value,
        "feesTarget": {
            "id": data.document.data.feesTarget.id,
            "type": data.document.data.feesTarget.type
        },
        "fee": {
            "value": data.document.data.fee.value,
            "currency": data.document.data.fee.currency
        },
        "rate": data.document.data.rate,
        "beneficiary": data.document.data.beneficiary,
        "purpose": data.document.data.purpose,
        "additionalInfo": data.document.data.additionalInfo
    }
};

result