import React from "react";
import { Navbar } from './Componentes/Navbar/Navbar.js';
import {SalesListContainer} from './Containers/SalesListContainer/SalesListContainer'
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './Containers/ItemDetailContainer/ItemDetailContainer.js';
import {Cart} from './Componentes/CartView/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CustomProvider} from "./Context/CartContext";
import { Register } from "./UserDataContainer/Register/Register";
import { AuthProvider } from "./Context/authContext.js";
import { Login } from "./UserDataContainer/Login/Login";
import { ProtectedRoute } from "./UserDataContainer/ProtectedRoute/ProtectedRoute.js";

const App = () => {
  const mensaje = "PROMOCIONES";
  return (
    <>
    
      <BrowserRouter>
      <AuthProvider>
      <CustomProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
          <Route path="/ventas" element={<SalesListContainer/>}/>
          <Route path="/registro" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<ItemListContainer/>}/>
        </Routes>
        </CustomProvider>
        </AuthProvider>
      </BrowserRouter>
      
    </>
  )

}
export default App;