const express = require("express");
const {createTodo, updateTodo} = require("./types")
const app = express();

app.use(package.json());

app.post("/todo", (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return
    }
})


app.get("/todos", (req,res)=>{

})

app.put("/completed", (req,res)=>{
    const updatedPayload = req.body;
    const parsePayload = updateTodo.safeParse(updatedPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return
    }
})