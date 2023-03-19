import React, {useContext,useEffect,useState} from "react";
import alertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";

const NuevoUsuario = () => {

    const alertasContext = useContext(alertaContext);
    const {alerta,mostrarAlerta} = alertasContext;

    const authContext = useContext(AuthContext);
    const {obtenerUsuarioTipos,usuario_tipos,registrarUsuario} = authContext;

    useEffect(() => {
        obtenerUsuarioTipos()
    }, [])

    const [user,guardarUser] =  useState({
        email:'',
        password:'',
        tipo:'',
        confirmar:''
    });

    const {email,password,tipo,confirmar} = user;

    const onChange = e =>{
        guardarUser({
            ...user,
            [e.target.name]:e.target.value
        });
    }

    const onSubmit = e =>{
        e.preventDefault();
        if(email.trim() === '' || tipo.trim() === '' || password.trim() === ''  || confirmar.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return
        }
        
        if(password !== confirmar){
            mostrarAlerta('Las contraseñas no coinciden','alerta-error');
            return
        }
        registrarUsuario({email,password,tipo});
    }
return(
    <div className="form-usuario">
    { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
    <div className="contenedor-form sombra-dark">
        <h1>Crear Usuario</h1>

        <form
             onSubmit={onSubmit}
        >
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
                <label htmlFor="tipo">Tipo</label>
                <select type="number" id="tipo" name="tipo" onChange={onChange}> 
                <option type="number" name="tipo" value="">Selecccion un tipo de usuario</option>

                    {
                        usuario_tipos ?
                        usuario_tipos.map( tipo => (
                            <option
                            key={tipo.id}
                            value={tipo.id}
                            type="number"
                            >{tipo.nombre}</option>
                        ))
                        : 
                        null
                    }

                    </select>
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
</div>
)
}

export default NuevoUsuario