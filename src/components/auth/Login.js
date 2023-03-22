import React, {useState,useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import alertaContext from '../../context/alertas/alertaContext';
import { Link } from 'react-router-dom';


const Login = () => {

    const authContext =  useContext(AuthContext);
    const {mensaje,perfil,autenticado,iniciarSesion,uri,usuario,user_tipo} = authContext; 
    
    const alertasContext = useContext(alertaContext);
    const {alerta,mostrarAlerta} = alertasContext;

    const history = useNavigate();    

    useEffect( () => {
 // falta ver que cuando se ponga manualmente las rutas redireccione a su perfil correspondiente
        if(usuario){
            perfil(user_tipo)
            if(autenticado && uri){
                history(uri);   
          }
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria);
            return
        }

    },[mensaje,autenticado,history,uri,usuario]);

    const [user,guardarUser] =  useState({
        email:'',
        password:''
    });

    const {email,password} = user;

    const onChange = e =>{
        guardarUser({
            ...user,
            [e.target.name]:e.target.value
        });
    }

    const onSubmit = e =>{
        e.preventDefault();
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return
        }
        iniciarSesion({email,password});
         //console.log(username,password);
    }


    return ( 
    <div className='form-usuario'>
        {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
        <div className='contenedor-form sombra-dark'>
            <h1>Iniciar Sesion</h1>

            <form
            onSubmit={onSubmit}
            >
                <div className='campo-form'>
                    <label htmlform="email">Email</label>
                    <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder='Tu Email'
                    onChange={onChange}
                    value={email}
                    />
                </div>

                <div className='campo-form'>
                    <label htmlform="password">Contraseña</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Tu Password'
                    onChange={onChange}
                    value={password}
                    />
                </div>

                <div className='campo-form'>
                    <input
                    type="submit"
                    className='btn btn-primario btn-block'
                    value='Iniciar Sesion'
                    />
                </div>
            </form>
            <Link to={"/nueva-cuenta"} className='enlace-cuenta'>
                Crear Cuenta
            </Link>
        </div>
    </div>
    );
}
 
export default Login;