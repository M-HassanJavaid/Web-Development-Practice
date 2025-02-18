// for (let i = 1; i <= 10; i++) {
//     for (var j = 1; j <= 10; j++) {
//         console.log(i * j + '\t');
//     }
//     console.log();
// }

let n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }
    
    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write("*");
    }
    
    console.log(); // Move to the next line
}
