import { useState } from "react";
import axios from "axios";
import "./Todo.css";
function Todo() {

    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        if (title && description) {
            try {
              const response = await axios.post("http://localhost:3000/todo", {
                title: title,
                description: description,
              });
              console.log("Todo created and sent via API", response.data);
              setTitle("");
              setDescription("");
            } catch (error) {
              console.error("Error creating todo:", error);
              alert("Failed to create todo. Please try again.");
            }
          } else {
            alert("Please provide both title and description");
          }
}
    return (
      <>
      <h2>Create a Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter todo description"
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
      </>
    );
  }
  
  export default Todo;