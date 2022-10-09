import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="App">
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default App;
