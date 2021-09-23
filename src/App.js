import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('Javascript Developer');
  const [age, setAge] = useState(45);

  const [isDifficult, setIsDifficult] = useState(false);

  const [arrary, setArray] = useState(['1', '2', '3']);

  const [objects, setObjects] = useState({ name: 'lion' }); 

  return (
    <div className="App">
      {name}
      <div>{age}</div>

      <button onClick={() => setName('React JS Developer')} >Change name</button>
    </div>
  );
}

export default App;
