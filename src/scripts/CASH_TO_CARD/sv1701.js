var result = {
    "type": "CASH_TO_CARD",

    "data": {
        "documentId": data.document.id,
        "transferDate": data.document.created,
        "creditTarget": {
            "id": data.document.data.creditTarget.id,
            "type": data.document.data.creditTarget.type

        },
        "transferCode": data.document.data.transferCode,
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
        "purpose": data.document.data.purpose,
        "beneficiary": data.document.data.beneficiary
    }
};

result