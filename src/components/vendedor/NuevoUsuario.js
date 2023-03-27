import React, {useContext,useEffect,useState} from "react";
import alertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";
import VendedorContext from "../../context/vendedor/vendedorContext";

const NuevoUsuario = () => {

    const alertasContext = useContext(alertaContext);
    const {alerta,mostrarAlerta} = alertasContext;

    const authContext = useContext(AuthContext);
    const {registrarUsuario} = authContext;

    const vendedorContext = useContext(VendedorContext)
    const {mostrarListadoUsuario} = vendedorContext;

    // useEffect(() => {
    //     obtenerUsuarioTipos()
    // }, [])

    const [user,guardarUser] =  useState({
        email:'',
        nombre:'',
        password:'',
        tipo:'2',
        confirmar:''
    });

    const {email,nombre,password,tipo,confirmar} = user;

    const onChange = e =>{
        guardarUser({
            ...user,
            [e.target.name]:e.target.value
        });
    }

    const onSubmit = e =>{
        e.preventDefault();
        if(email.trim() === '' || password.trim() === ''  || confirmar.trim() === '' || nombre.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return
        }
        
        if(password !== confirmar){
            mostrarAlerta('Las contraseñas no coinciden','alerta-error');
            return
        }
        mostrarListadoUsuario()
        registrarUsuario({nombre,email,password,tipo});
    }
return(
    <>
    { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
    <div className="contenedor-form sombra-dark" style={{ margin: "0 auto" , marginTop:"15px"}}>
        <h1>Crear Usuario</h1>

        <form
             onSubmit={onSubmit}
        >
            <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu Nombre"
                        value={nombre}
                        onChange={onChange}
                        />
            </div>            
            <div className="campo-form">
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Tu Email"
                    value={email}
                    onChange={onChange}
                />
            </div>

            <div className="campo-form">
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Tu Password"
                    value={password}
                    onChange={onChange}
                />
            </div>

            <div className="campo-form">
                <label htmlFor="confirmar">Confirmar Password</label>
                <input 
                    type="password"
                    id="confirmar"
                    name="confirmar"
                    placeholder="Repite tu Password"
                    value={confirmar}
                    onChange={onChange}
                />
            </div>

            <div className="campo-form">
                <input type="submit" className="btn btn-primario btn-block" value="Crear Usuario" />
            </div>
        </form>
    </div>
</>
)
}

export default NuevoUsuario