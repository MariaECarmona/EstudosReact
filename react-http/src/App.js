import logo from './logo.svg';
import './App.css';

import Usuarios from './components/Usuarios/Usuarios';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aplicação de Usuários</h1>
      </header>
      <main>
        <Usuarios/>
      </main>
    </div>
  );
}

export default App;
