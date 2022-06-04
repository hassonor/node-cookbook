const express = require("express");
const {join} = require("path");
const session = require("express-session");

const auth = require("./routes/auth");
const index = require("./routes/index");

const app = express();

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
    session({
        name: "SESSIONID",
        secret: "Or Hasson",
        resave: false,
        saveUninitialized: false
    })
);

app.use(express.urlencoded({extended: false}));

app.use("/", index);
app.use("/auth", auth);

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})