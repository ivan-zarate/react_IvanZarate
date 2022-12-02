import React from "react";
import panda from '../../Assets/panda.png'
import CartWidget from '../CartWidget/CartWidget.js';
import {Link, NavLink} from 'react-router-dom';
import { useAuth } from "../../Context/authContext";
import '../css/style.css';

export const Navbar = () => {
    const {user, logout}=useAuth();
    const handleLogOut = async () =>{
        await logout();
    }
    const categorias= [
        {nombre:"Inicio", id:0, ruta:"/"},
        {nombre:"Bebes", id:1, ruta:"categoria/bebes"},
        {nombre:"Juegos de mesa", id:2, ruta:"categoria/juegos de mesa"},
        {nombre:"Muñecos y muñecas", id:3, ruta:"categoria/muñecos y muñecas"},
        {nombre:"Vehiculos", id:4, ruta:"categoria/vehiculos"},
        {nombre:"Video Juegos", id:5, ruta:"categoria/video juegos"},
    ]

    return (
        <>
            <div className="grilla">
                <section className="UserYCompras">
                    {(user==null || undefined) ? (
                        <Link to="/ventas"><h2>Compras</h2></Link>
                    ) : 
                    <div className="UserYCompras">
                        <h3>Bienvenido {user.email}</h3>
                        <button tipe="button" onClick={handleLogOut}>Log Out</button>
                        <Link to="/ventas"><h2>Compras</h2></Link>
                    </div>
                    }
                </section>
            
                <header className="header">
                    <Link to="/"><img src={panda} alt="Cara de panda"/></Link>
                    <h1>Coder-Store</h1>
                </header>
                <nav className="nav">{
                    categorias.map((categoria)=>{
                        return <NavLink key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink>
                    })}
                </nav>
                <section className="cart">
                    <Link to="/cart"><CartWidget /></Link>
                </section>
            </div>
        </>

    )

}
