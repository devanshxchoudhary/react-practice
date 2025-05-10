import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { countContext } from './context'
import { useContext } from 'react'
function App() {
const [count,setCount] = useState(0)
  return (
    <>
    <countContext.Provider value={{ count, setCount }}>
      <Count/>
    </countContext.Provider>
    </>
  )
}

function Count(){
  return(<>
  <CountRender/>
  <Buttons/>
  </>)
}

function CountRender(){
  const { count } = useContext(countContext);  
  return(<>
  <div style={{ fontSize: '3rem', color: 'blue' }}>
      {count}
    </div>
  </>)
}

function Buttons(){
  const { count, setCount } = useContext(countContext);
  return(
    <>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </>
  )
}
export default App
