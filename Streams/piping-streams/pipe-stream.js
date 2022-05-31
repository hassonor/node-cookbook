const fs = require('fs');
const rs = fs.createReadStream("file.txt");

// pipe our readable stream to process.stdout, which returns a writable stream connected to STDOUT
rs.pipe(process.stdout);
