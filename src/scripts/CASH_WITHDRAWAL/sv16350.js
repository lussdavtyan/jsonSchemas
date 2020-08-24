var result = {
    "clientId": data.document.clientId,
    "notificationType": {
        "code": data.document.workflowCode + "_REJECTED"
    },
    "metadata": {
        "documentId": data.document.id,
        "workflowCode": data.document.workflowCode,
        "creationDate": data.document.created
    }
};

result