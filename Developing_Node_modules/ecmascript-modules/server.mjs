import express from 'express';
import {name} from "./get-name/index.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    res.send(`Hello from ${name} and Express :)!`)
})

app.listen(PORT, () => {
    console.log("Server is listening on port: ", PORT);
})