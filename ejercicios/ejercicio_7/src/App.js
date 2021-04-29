import { useState  } from 'react';
import { useEffect } from 'react';
import Lista from './componentes/Lista';


import './App.css';

function App() {

const [Movie, setListaArray] = useState([]);

const URL_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=fc514dfc2ab8931cf6434c2853ad7cfa";

useEffect(() => {
fetch(URL_UPCOMING)
  .then(response => response.json())
  .then(data => setListaArray(data));
}, []);


  return (
    <div className="App">
      <Lista Movie={Movie}/>
    </div>
  );
}

export default App;
