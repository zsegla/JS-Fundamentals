const num = parseInt(process.argv[2]);

if (num > 0) {
  let output = '';
  for (let i = 0; i < num; i++) {
    output += 'C is fun\n';
  }
  console.log(output.trim());
}