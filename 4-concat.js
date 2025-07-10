const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script path)
if (args.length > 1) {
    console.log(args.join(' is ')); // Print all arguments concatenated with a space
    }
else if (args.length === 1) {
    console.log(args[0]); // Print the single argument
}
else {
    console.log("No arguments provided."); // Handle case where no arguments are passed
}