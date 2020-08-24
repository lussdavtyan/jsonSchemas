var errors = [];
var isValid = false;

if (!data.feedback) {
    errors.push("INVALID_FEEDBACK")
}

if (errors.length === 0) {
    isValid = true
}

var result = {
    "valid": isValid,
    "errors": errors
};

result;