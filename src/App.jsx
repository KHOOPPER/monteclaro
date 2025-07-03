// src/App.jsx
import './styles/index.css';
import Home from './pages/Home';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Fuerza scroll al inicio para evitar glitches visuales en móviles
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Home />
    </div>
  );
}

export default App;
