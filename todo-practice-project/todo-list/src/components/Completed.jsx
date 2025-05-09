import axios from "axios";
import { useState } from "react";
import './Completed.css';

function Completed() {
  const [id, setId] = useState("");

  async function handleComplete(e) {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3000/completed", { id });
      alert("Marked as completed!");
    //   console.log(id)
      setId(""); 
    } catch (err) {
      console.error("Error marking as completed:", err);
    }
  }

  return (
    <>
      <h2>Enter the ID number</h2>
      <form onSubmit={handleComplete}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
        />
        <button type="submit">Mark as Completed</button>
      </form>
    </>
  );
}

export default Completed;
