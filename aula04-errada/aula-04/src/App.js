import './App.css';
import { COmponent2 } from './Component2';
import { Componente1 } from './Componente1';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <COmponent2/>
        <Componente1/>
      </header>
    </div>
  );
}

export default App;
