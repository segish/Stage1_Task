const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const Routers = require("./routes/Routs");

//midleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
//routs
app.use("/", Routers)

app.listen(8800, () => {
    console.log("Backend server is running on port 8800!");
});