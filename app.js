const express = require("express")
const { default: mongoose } = require("mongoose")



const app = express()


mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) 

//middlewares
app.use(express.urlencoded({ extended: true}))
app.use(express.static("public"))
app.set("view engine","ejs")

//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

//server config
app.listen(3000,() => console.log("App has started listening on port: 3000"))