import React from 'react';
import Navbar from './components/navbar.js';
import ItemListContainer from './components/itemlistcontainer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
