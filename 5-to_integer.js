const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script path)
if (args.length > 0) {
    const num = parseInt(args[0], 10); // Convert the first argument to an integer
    if (!isNaN(num)) {
        console.log(`My number: ${num}`); // Print the integer value
    } else {
        console.log("Not a number"); // Handle case where conversion fails
    }
}
else {
    console.log("Not a number"); // Handle case where no arguments are passed
}
// Usage: node script.js 42
// Example: If you run `node script.js 42`, it will print "42"