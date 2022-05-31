const {Transform} = require('stream');
const {stringify} = require('ndjson');

const Name = Transform({
    objectMode: true,
    transform: ({forename, surname}, encoding, callback) => {
        callback(null, {name: forename + " " + surname});
    }
});

Name.pipe(stringify()).pipe(process.stdout);

Name.write({forename: "Or", surname: "Hasson"});
Name.write({forename: "Gil", surname: "Hasson"});