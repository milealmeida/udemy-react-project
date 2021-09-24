import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('Hello');

  useEffect(() => {
    alert(message);
  }, []);

  useEffect(() => {
    alert('Changed');
  }, [message]);

  return (
    <div className="App">

      <input 
        type="text" 
        value={message} 
        onChange={ e => setMessage(e.target.value) } 
      />

    </div>
  );
}

export default App;
