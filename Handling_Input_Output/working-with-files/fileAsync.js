const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt");

fs.readFile(filepath, "utf8", (err, contents) => {
    if (err) {
        return console.log(err);
    }
    console.log("File Contents:", contents);
    const upperContents = contents.toUpperCase();

    setTimeout(() => updateFile(filepath, upperContents), 100);
});

function updateFile(filepath, contents) {
    fs.writeFile(filepath, contents, (err) => {
        if (err) throw err;
        console.log("File Uploaded.");
    });
}

setInterval(() => process.stdout.write("**** \n"), 1).unref();

