const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "hello.txt");
console.log(process.cwd());

const contents = fs.readFileSync(filePath, "utf8");
console.log("File Contents: ", contents);

const upperContents = contents.toUpperCase();

fs.writeFileSync(filePath, upperContents);
console.log("File were updated.");
