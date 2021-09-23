import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('Javascript Developer');
  const [age, setAge] = useState(45);

  const [isDifficult, setIsDifficult] = useState(false);
  const [onlyTrue, setOnlyTrue] = useState(true);

  const [arrary, setArray] = useState(['1', '2', '3']);

  const [objects, setObjects] = useState({ name: 'lion' }); 

  return (
    <div className="App">
      Name: {name}
      <div>{age}</div>

      <button onClick={() => setName('React JS Developer')}>Change name</button>
      <input 
        type="text" 
        placeholder="Name"
        value={name}
        onChange={ e => setName(e.target.value) } 
      />

      <button onClick={ () =>  setIsDifficult(!isDifficult) }>Change Difficult</button>

      {isDifficult ? (
        <div> It's really Difficult </div>
      ) : (
        <div> it's not really that difficult </div>
      )}

      { onlyTrue && (<div> It is really true </div> ) }
    </div>
  );
}

export default App;
