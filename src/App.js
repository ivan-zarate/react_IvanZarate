import React from "react";
import { Navbar } from './Componentes/Navbar/Navbar.js';
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './Containers/ItemDetailContainer/ItemDetailContainer.js';
import {Cart} from './Componentes/CartView/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const mensaje = "SALES";
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ItemListContainer/>}/>
        </Routes>
        
        
      </BrowserRouter>
    </>
  )

}
export default App;