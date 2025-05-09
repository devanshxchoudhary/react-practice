const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("Failed to connect to MongoDB:", err));
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    done: {type: Boolean, default:false}
})

const todo = mongoose.model("todo",todoSchema)
module.exports = todo