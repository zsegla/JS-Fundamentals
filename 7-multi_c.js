const num = parseInt(process.argv[2]);

if (!isNaN(num)) {
  let output = '';
  for (let i = 0; i < num; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
} else {
  console.log("Missing number of occurrences");
}