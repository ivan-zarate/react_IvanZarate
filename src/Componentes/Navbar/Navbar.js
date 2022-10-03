import React from "react";
import panda from '../images/panda.png'
import CartWidget from '../CartWidget/CartWidget.js';
import '../css/style.css';

const Navbar = () => {
    return (
        <>
            <div class="grilla">
                <header class="header">
                    <a href=""><img src={panda} /></a>
                    <h1>Coder-Hard</h1>
                </header>
                <nav class="nav">
                    <a href="">Combos</a>
                    <a href="">Monitores</a>
                    <a href="">Placas de video</a>
                    <a href="">Parlantes</a>
                    <a href="">Memorias</a>
                </nav>
                <section class="cart">
                    <a href=""><CartWidget /></a>
                </section>
            </div>
        </>

    )

}
export default Navbar