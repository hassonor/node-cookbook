const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.get("/", (req, res) => {
    res.send("Hello Or Hasson :)");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});