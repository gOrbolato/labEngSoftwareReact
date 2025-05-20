import { Link } from 'react-router-dom';
import Gallery from './atividade4/Gallery';
import Toolbar from './atividade4/Toolbar';

function App() {
  return (
    <>
        <h2>Semana 4</h2>
        <Toolbar />
        <Gallery />

        <Link to="/">Voltar</Link>
    </>
  );
}

export default App;