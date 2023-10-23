
import { useState } from 'react';
import './App.css';
import Rodape from './components/Rodape';
import SecaoBanner from './components/SecaoBanner';
import SecaoExperienciaTrabalho from './components/SecaoExperienciaTrabalho';
import Topo from './components/Topo';

function App() {
  const [ehTemaEscuro, setEhTemaEscuro] = useState(false);

  const alterarTema = () => {
    setEhTemaEscuro(!ehTemaEscuro);
  }
  
  return (
  
    <main>
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      <SecaoBanner ehTemaEscuro={ehTemaEscuro} />
      <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro} />
      <Rodape ehTemaEscuro={ehTemaEscuro}/>
    </main>
  );
}

export default App;
