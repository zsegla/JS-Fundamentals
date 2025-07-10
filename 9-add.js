const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script path)

function add(a, b) {
  return a + b;
}

  const num1 = parseFloat(args[0]); // Convert the first argument to a float
  const num2 = parseFloat(args[1]); // Convert the second argument to a float
  
  //isNaN checks if the conversion was successful
  console.log(add(num1, num2)); // Call the add function and print the result

