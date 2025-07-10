const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script path)

function add(a, b) {
  return a + b;
}
if (args.length >= 2) {
  const num1 = parseFloat(args[0]); // Convert the first argument to a float
  const num2 = parseFloat(args[1]); // Convert the second argument to a float
  
  if (!isNaN(num1) && !isNaN(num2)) {  //isNaN checks if the conversion was successful
    console.log(add(num1, num2)); // Call the add function and print the result
  } else {
    console.log("Error: Both arguments must be valid numbers."); // Handle case where conversion fails
  }
}
else {
  console.log("Error: Please provide two numbers as arguments."); // Handle case where not enough arguments are passed
}