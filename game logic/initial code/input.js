const readline = require('readline');

/**
 * Interface for input/output.
 * 
 * Use .question() for displaying and asking input.
 * Use .close() to close stream buffer.
 */
const ioDevice = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


module.exports = ioDevice;