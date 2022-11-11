import React from "react";
import { Navbar } from './Componentes/Navbar/Navbar.js';
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './Containers/ItemDetailContainer/ItemDetailContainer.js';
import {Cart} from './Componentes/CartView/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CustomProvider} from "./Context/CustomContext";

const App = () => {
  const mensaje = "SALES";
  return (
    <>
    
      <BrowserRouter>
      <CustomProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ItemListContainer/>}/>
        </Routes>
        </CustomProvider>
      </BrowserRouter>
      
    </>
  )

}
export default App;