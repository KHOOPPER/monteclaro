import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

// ✅ Montar la app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Registrar Service Worker para PWA (solo si ya existe /sw.js en public)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => console.log('✔️ Service Worker registrado:', reg.scope))
      .catch((err) => console.error('❌ Error al registrar Service Worker:', err));
  });
}
