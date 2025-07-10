// Write a script that prints a message depending of the number of arguments passed:

const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script path)
if (args.length === 0) {
  console.log("No argument");
}
else if (args.length === 1) {
  console.log("Argument found");
}
else {
  console.log("Arguments found");
}