const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script path)
if (args.length > 1) {
    console.log(args.join(' is ')); // Print all arguments concatenated with a space
} else {
    console.log(`${args[0]} is undefined`); // Print the single argument
}
