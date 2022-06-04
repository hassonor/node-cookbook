const password = process.argv[2];
const bcrypt = require("bcrypt");

const saltRounds = 11;

bcrypt.hash(password, saltRounds, (err, hash) => {
    console.log(hash);
});

