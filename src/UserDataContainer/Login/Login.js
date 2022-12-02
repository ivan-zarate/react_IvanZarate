import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Context/authContext"

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password)
            localStorage.setItem('email', user.email)
            localStorage.setItem('password', user.password)
            navigate('/cart')
        }catch (error) {
            console.log(error);
            switch (error.code){
                case "auth/wrong-password":
                    setError("Contraseña incorrecta");
                    break;
                case "auth/user-not-found":
                    setError("Mail no registrado");
                    break;
                case "auth/email-already-in-use":
                    setError("Email ya utilizado");
                    break;
                default:
                    setError("Verifique que los campos esten completos");
                    break;
            }
        }
    }
    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate('/cart')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
        <p className="sinProductos">Para poder acceder a la finalizacion de la compra primero debe registrarse</p>
        <div className='registro'>
            {error && <p className='errorMessage'>{error}</p>}

            <form className='formulario' onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" placeholder='email@gmail.com' onChange={handleChange}></input>
                <label>Password</label>
                <input type="password" name="password" placeholder='Password' id='password' onChange={handleChange}></input>
                <button className='submit'>Login</button>
            </form>
            <div className='existencia'>
                <p>Aun no estas registrado? </p>
                <p><Link to='/registro'>Registrarse</Link></p>
            </div>
            <button className='google' onClick={handleGoogleSignin}>Loguearse con cuenta de Google</button>
        </div>
        </>
    )

}
