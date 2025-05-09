const express = require("express");
const {createTodo, updateTodo} = require("./types")
const todo = require("./db")
const app = express();
const cors = require("cors")
app.use(cors());

app.use(express.json()); 

app.post("/todo", async(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })
    res.json({
        msg: "Todo created"
    })
})


app.get("/todos", async(req,res)=>{
    try {
        const todos = await todo.find({}, {
            title: 1,
            description: 1,
            done: 1 
        });
        return res.json({ todos });
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
})

app.put("/completed", async(req,res)=>{
    const updatedPayload = req.body;
    const parsePayload = updateTodo.safeParse(updatedPayload);
    console.log(updatedPayload.id)
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return
    }
    try {
        await todo.updateOne({ _id: updatedPayload.id }, { $set: { done: true } });
        return res.json({msg: "Updated successfully"})
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
})

app.listen(3000)