const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script path)

// take the first argument and convert it to an integer
if (args.length > 0) {
    const num = parseInt(args[0], 10); // Convert the first argument to an integer
    if (!isNaN(num)) {
        for (let i = 0; i < num; i++) {
            console.log("C is fun"); // Print "C is fun" num times
        }
    } else {
        console.log("Missing number of occurrences"); // Handle case where conversion fails
    }
}
else {
    console.log("Missing number of occurrences"); // Handle case where no arguments are passed
}