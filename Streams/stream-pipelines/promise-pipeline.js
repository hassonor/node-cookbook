const fs = require("fs");
const stream = require("stream");
const util = require("util");

const pipeline = util.promisify(stream.pipeline);

const uppercase = new stream.Transform({
    transform(chunk, encoding, callback) {
        //Data Processing
        callback(null, chunk.toString().toUpperCase());
    }
});

async function run() {
    await pipeline(
        fs.createReadStream("./file.txt"),
        uppercase,
        fs.createWriteStream("./newFile.txt"),
    );
    console.log("Pipeline succeeded.");
};

run().catch((err) => {
    console.log("Pipeline failed.", err);
})