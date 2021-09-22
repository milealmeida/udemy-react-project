import './App.css';
import Home from './Home';

function App() {
  const home = 'House';
  const pi = 3.14;

  return (
    <div className="App">
      Milena
      <Home home={home} pi={pi}/>
    </div>
  );
}

export default App;
