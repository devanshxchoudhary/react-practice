import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'; 
import './App.css';
import Todo from './components/Todo';
import List from './components/List'; 
import Completed from './components/Completed';  


function App(){
  return(<>
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  </>)
}
function Main() {
  const navigate = useNavigate();

  return (
    <>
    <nav>
          <button onClick={()=>navigate("/todo")}>Todo</button>
          <button onClick={()=>navigate("/list")}>List</button>
          <button onClick={()=>navigate("/completed")}>Completed</button>
    </nav>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/list" element={<List />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
}

export default App;
