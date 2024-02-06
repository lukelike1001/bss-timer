function formatToTwoDigits(number) {
    // Convert the number to a string and pad it with a leading zero if necessary
    return String(number).padStart(2, '0');
}

// Example usage:
console.log(formatToTwoDigits(5));    // Output: "05"
console.log(formatToTwoDigits(12));   // Output: "12"
console.log(formatToTwoDigits(123));  // Output: "123" (no changes as it already has more than two digits)
