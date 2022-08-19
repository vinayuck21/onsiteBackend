const router = require('express').Router()
const Todo = require("../models/Todo")


//routes
router.post("/add/todo", (req,res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo})
    console.log(todo)


    //save
    newTodo.save()
    .then(() => {
        console.log("success")
        res.redirect("/")
    })

    .catch((err) => console.log(err))
})

.get("/delete/todo/:_id", (req,res) => {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("Deleted")
        res.redirect("/")
    })
    .catch(err => console.log(err))
})

module.exports=router;