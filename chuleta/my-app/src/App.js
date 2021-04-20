
import './App.css';
import FirstComponents, {SecondComponents} from './components/FirstComponents';

function App() {
  return (
    <div className="App">

        <FirstComponents title="titulo enviado desde el padre" date = "16 de Agosto de 2025"/>
        <SecondComponents />

    </div>
  )
}

export default App;
