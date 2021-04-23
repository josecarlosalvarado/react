
import './App.css';
// import FirstComponents, {SecondComponents} from './components/FirstComponents';
import UseeffectComponents from './components/UseeffectComponents';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">


        {show && <UseeffectComponents/>}
        <button onClick={() => setShow(!show)}>Show</button>

        {/* <FirstComponents title="titulo enviado desde el padre" date = "16 de Agosto de 2025"/>
        <SecondComponents /> */}

        {/* < UseeffectComponents /> */}

    </div>
  )
}

export default App;
