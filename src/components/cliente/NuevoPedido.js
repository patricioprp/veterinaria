import React,{useContext,useEffect} from 'react';
import ClienteContext from '../../context/cliente/clienteContext';
import alertaContext from '../../context/alertas/alertaContext';

const NuevoPedido = () => {

    const clienteContext = useContext(ClienteContext)
    const{obtenerMisMascotas,mascotas} = clienteContext

    const alertasContext = useContext(alertaContext);
    const {alerta,mostrarAlerta} = alertasContext;

    useEffect(() => {
        obtenerMisMascotas(JSON.parse(localStorage.getItem('user')).id)
    }, [])
    
    return(
        <>
             { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
            <div className="contenedor-form sombra-dark" style={{ margin: "0 auto" , marginTop:"15px"}}>
                <h1>Crear Pedido</h1>

                <form
                    // onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="mascota_id">mascota</label>
                        <select 
                        name="mascota_id" 
                        id="mascota_id" 
                        type="text" 
                        // value={mascota_id} 
                        // onChange={onChange}
                        >
                        <option key = "0" value = "" > Seleccione una opcion </option>
                            {mascotas ?
                                mascotas.map(mascota => 
                                    <option key = {mascota.id} value={mascota.id}>{mascota.nombre}</option>
                                )
                            : 
                            null}
                        </select>

                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Crear Pedido" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default NuevoPedido