import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('Javascript Developer');
  const [age, setAge] = useState(45);

  const [isDifficult, setIsDifficult] = useState(false);
  const [onlyTrue, setOnlyTrue] = useState(true);

  const [arrary, setArray] = useState(['1', '2', '3']);

  const [objects, setObjects] = useState([
    { id: 1,name: 'lion' },
    { id: 2,name: 'tiger' },
    { id: 3,name: 'fish' },
    { id: 4,name: 'bird' },
    { id: 5,name: 'spaceship' },
  ]); 

  const filteredArray = () => {
    console.log(objects.filter( ({name}) => name !== 'lion' ));
  }

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

      <div>
        {objects.map(({id, name}) => (
            <div key={id}>{name}</div>
          )
        )}
      </div>

      <button onClick={filteredArray}>Filter Array</button>

    </div>
  );
}

export default App;
