const Todo = require("../models/Todo");

const router = require("express").Router()

//routes will be here...

router.get("/", async(req,res) => {
    const allTodo = await Todo.find()
    res.render("index", {todo: allTodo})
})


module.exports=router;