const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script path)
if (args.length > 0) {
    const num = parseInt(args[0], 10); // Convert the first argument to an integer
    if (!isNaN(num)) {
        //  print a square with X
        for (let i = 0; i < num; i++) {
            let row = '';
            for (let j = 0; j < num; j++) {
                row += 'X'; // Append 'X' to the row
            }
            console.log(row); // Print the row
        }
    } else {
        console.log("Missing size"); // Handle case where conversion fails
    }
}
else {
    console.log("No arguments provided."); // Handle case where no arguments are passed
}