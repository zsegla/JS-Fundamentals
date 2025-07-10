// Write a script that prints the first argument passed to it:

const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script path)
if (args.length > 0) {
  console.log(args[0]); // Print the first argument
}
else {
  console.log("No arguments provided."); // Handle case where no arguments are passed
}
// Usage: node script.js arg1 arg2 ...
// Example: If you run `node script.js hello world`, it will print "hello".
// Note: This script is designed to be run in a Node.js environment.