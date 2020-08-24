var result = {
    "type": "CASH_WITHDRAWAL",

    "data": {
        "documentId": data.document.id,
        "transferDate": data.document.created,
        "debitTarget": {
            "id": data.document.data.debitTarget.id,
            "type": data.document.data.debitTarget.type
        },
        "branch": data.document.data.branch.id,
        "amount": data.document.data.amount.value,
        "withdrawalDate": data.document.data.withdrawalDate,
        "feesTarget": {
            "id": data.document.data.feesTarget.id,
            "type": data.document.data.feesTarget.type
        },
        "fee": {
            "value": data.document.data.fee.value,
            "currency": data.document.data.fee.currency
        },
        "beneficiary": data.document.data.beneficiary,
        "purpose": data.document.data.purpose
    }
};

result