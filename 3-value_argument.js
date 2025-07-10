// Write a script that prints the first argument passed to it: and not allowed to use .length

const arg = process.argv[2];

if (arg !== undefined) {
  console.log(arg);
} else {
  console.log("No argument");
}