import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import {useAuth} from "../../Context/authContext"

export const Register= () =>{

const [user, setUser]=useState({
    email: "",
    password:""
})

const {signUp} = useAuth();
const navigate=useNavigate();
const [error, setError]= useState()

const handleChange = ({target: {name, value}}) =>{
    
    setUser({...user, [name]:value})
}

const handleSubmit= async (e) =>{
    e.preventDefault();
    setError('');
    try {
        await signUp(user.email, user.password);
        localStorage.setItem('email', user.email);
        localStorage.setItem('password', user.password);
        navigate('/cart')
    } catch (error) {
        console.log(error);
        switch (error.code){
            case "auth/weak-password":
                setError("La contraseña debe tener al menos 6 digitos");
                break;
            case "auth/invalid-email":
                setError("Verifique formato de mail");
                break;
            case "auth/email-already-in-use":
                setError("Email ya utilizado");
                break;
            default:
                setError("Algo salio mal");
                break;
        }
    }
}

return(
        <div className='registro'>
          {error && <p className='errorMessage'>{error}</p>}
        <form className='formulario'onSubmit={handleSubmit}>
            
            <label className='ajustes'>Email</label>
            <input type="email" name="email" placeholder='email@gmail.com' onChange={handleChange}></input>
            
            <label>Password</label>
            <input type="password" name="password" placeholder='Password' id='password'onChange={handleChange}></input>
            
            <button className='submit'>Submit</button>
        </form>
            <div className='existencia'>
                <p>Ya tienes una cuenta?</p>
                <p><Link to='/login'>Login</Link></p>
            </div>
        </div>
    
)

}


