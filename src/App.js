import './App.css';
import { BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import Navbar from './componentes/navbar/Navbar';
import Catalogo from './componentes/catalogo/Catalogo';
import Inicio from './componentes/inicio/Inicio';
import NotFound from './componentes/404/NotFound';
import Three from './componentes/three/Three'

function App() {
  return (
    <div className='testtttttttttt'>

    <BrowserRouter >
      <Navbar />
    <Routes > 
      <Route path='/' element={<Inicio />} />
      <Route path='/catalogo' element={<Catalogo />} />
      <Route path='/three' element={<Three />} />
      <Route path='/game/:id' element={<Catalogo />} />


      {/* Not found, navigate when bad link */}
      <Route path='/404' element={<NotFound />} />
      <Route path='*' element={<Navigate to='/404' />} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
