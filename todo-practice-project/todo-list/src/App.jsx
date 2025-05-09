import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import './App.css';
import Todo from './components/Todo';
import List from './components/List'; 
import Completed from './components/Completed';  

function App() {
  return (
    <Router>
      <nav>
        <Link to="/todo">
          <button>Todo</button>
        </Link>

        <Link to="/list">
          <button>List</button>
        </Link>

        <Link to="/completed">
          <button>Completed</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/list" element={<List />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </Router>
  );
}

export default App;
