
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { Component1 } from './Componente1';
import { Componente2 } from './Componente2';

function App() {
  return (
    <div>
      <nav>
        <Link to="/componente1">Componente 1</Link>
        <Link to="/componente2">Componente 2</Link>
      </nav>
      <Switch>
      <Route path="/componente1" component={Component1}/>
      <Route path="/componente2" component={Componente2}/>
    </Switch>
    </div>

  );
}

export default App;
