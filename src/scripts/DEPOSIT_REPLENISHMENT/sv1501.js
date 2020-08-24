var result = {
    "type": "DEPOSIT_REPLENISHMENT",

    "data": {
        "documentId": data.document.id,
        "transferDate": data.document.created,
        "debitTarget": {
            "id": data.document.data.debitTarget.id,
            "type": data.document.data.debitTarget.type
        },
        "creditTarget": {
            "id": data.document.data.creditTarget.id,
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
        "purpose": data.document.data.purpose
    }
};

result