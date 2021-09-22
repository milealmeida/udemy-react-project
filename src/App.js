import './App.css';
import Home from './Home';
import About from './About';

function App() {
  const home = 'House';
  const pi = 3.14;

  const message = 'Welcome, this is About page.'

  return (
    <div className="App">
      Milena
      <Home home={home} pi={pi}/>
      <About message={message}/>
    </div>
  );
}

export default App;
