import React, {useState,useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import alertaContext from '../../context/alertas/alertaContext';


const Login = () => {

    const authContext =  useContext(AuthContext);
    const {mensaje,autenticado,iniciarSesion,perfil,uri,usuario} = authContext; 
    
    const alertasContext = useContext(alertaContext);
    const {alerta,mostrarAlerta} = alertasContext;

    const history = useNavigate();    

    useEffect( () => {
 // falta ver que cuando se ponga manualmente las rutas redireccione a su perfil correspondiente
        if(usuario){
            perfil(usuario.car_id) ;
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
        username:'',
        password:'',
        domain:'',
        grant_type:"password"
    });

    const {username,password,domain,grant_type} = user;

    const onChange = e =>{
        guardarUser({
            ...user,
            [e.target.name]:e.target.value
        });
    }

    const onSubmit = e =>{
        e.preventDefault();
        if(username.trim() === '' || password.trim() === '' || domain.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return
        }
        iniciarSesion({username,password,domain,grant_type});
        // console.log(username,password,domain);
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
                    <label htmlform="username">Usuario</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder='Tu Usuario'
                    onChange={onChange}
                    value={username}
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
                    <label htmlform="type">Perfil de Usuario</label>
                    <select type="text" id="type" name="type" onChange={onChange}>
                        <option value="">---Tipo de Usuario---</option>
                        <option value="1">Cliente</option>
                        <option value="2">Vendedor</option>
                    </select>
                </div>

                <div className='campo-form'>
                    <input
                    type="submit"
                    className='btn btn-primario btn-block'
                    value='Iniciar Sesion'
                    />
                </div>
            </form>
            {/* <Link to={"/nueva-cuenta"} className='enlace-cuenta'>
                Crear Cuenta
            </Link> */}
        </div>
    </div>
    );
}
 
export default Login;