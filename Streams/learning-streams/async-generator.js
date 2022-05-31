const {Readable} = require('stream');

async function* generate() {
    yield "Or";
    yield "Hasson";
    yield "was";
    yield "here.";
}

const readable = Readable.from(generate());

readable.on("data", (chunk) => {
    console.log(chunk);
});