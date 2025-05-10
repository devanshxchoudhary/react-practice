import { useEffect, useState } from "react";
import './List.css';
import axios from "axios";
function List() {
    const [todos,setTodos] = useState([])
    useEffect(() => {
        async function fetchTodos() {
          try {
            const response = await axios.get("http://localhost:3000/todos"); 
            setTodos(response.data.todos); 
          } catch (error) {
            console.error("Failed to fetch todos:", error);
          }
        }
        fetchTodos();
      }, []);
    
    return(<>
        <div>
            <ul>
            {todos.map((todo) => (
            <li key={todo._id}>
                <Todo title={todo.title} description={todo.description} completed={todo.done}/>
            </li>
            ))}
            </ul>
        </div>
    </>)
  }

  function Todo({ title, description ,completed }) {
    console.log({completed})
    return (
      <ul>
        <li>{title}</li>
        <li>{description}</li>
        <li>Completed: {completed ? "true" : "false"}</li>
      </ul>
    );
  }
export default List;
  