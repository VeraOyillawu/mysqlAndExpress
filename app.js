const express = require("express")
const cors = require("cors")
const cookieParse = require("cookie-parser")
const path = require("path")
require("dotenv").config()
// const router = require("./routes/router")
const connDb = require("./utils/mysql")
const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(cookieParse())
app.use(express.urlencoded({extended: false}))
app.use("/api", require("./routes/router"))
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res) => {
    res.json({message: "Welcome to my webPage"})
})

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
})