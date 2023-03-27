import React,{useState,useEffect,useContext} from 'react'
import ClienteContext from '../../context/cliente/clienteContext';
import alertaContext from '../../context/alertas/alertaContext';
import moment from 'moment';

const NuevaMascota = () => {

    const clienteContext = useContext(ClienteContext)
    const {obtenerEspecies,especies,registrarMascota} = clienteContext;

    const alertasContext = useContext(alertaContext);
    const {alerta,mostrarAlerta} = alertasContext;

    const [mascota,guardarMascota] =  useState({
        nombre:'',
        especie_id:'',
        fecha_nacimiento:'',
        peso:'',
        esterelizado:''
    });
    const {nombre,especie_id,fecha_nacimiento,peso,esterelizado} = mascota;

    const onChange = e =>{
 
        guardarMascota({
            ...mascota,
            [e.target.name]:e.target.value
        });
        // console.log(mascota)
    }

    useEffect(() => {
        obtenerEspecies()
    }, [])


    const onSubmit = e =>{
        e.preventDefault();
        if(nombre.trim() === '' || especie_id.trim() === ''  || fecha_nacimiento.trim() === '' || peso.trim() === '' || esterelizado.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return
        }
        mascota.usuario_id = JSON.parse(localStorage.getItem('user')).id

        mascota.fecha_nacimiento = moment(mascota.fecha_nacimiento,"YYYY/MM/DD").format('DD/MM/YYYY');
        console.log('mascota',mascota)
        // mostrarListadoUsuario()
        registrarMascota(mascota);
    }
    

    return(
        <>
        { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
      <div className="contenedor-form sombra-dark" style={{ margin: "0 auto" , marginTop:"15px"}}>
        <h1>Registrar Mascota</h1>

        <form
              onSubmit={onSubmit}
        >
            <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre de su Mascota"
                        value={nombre}
                        onChange={onChange}
                        />
            </div>    

            <div className="campo-form">
                <label htmlFor="especie_id">Especie</label>
                <select 
                name="especie_id" 
                id="especie_id" 
                type="text" 
                value={especie_id} 
                onChange={onChange}
                >
                 <option key = "0" value = "" > Seleccione una opcion </option>
                    {especies ?
                        especies.map(especie => 
                            <option key = {especie.id} value={especie.id}>{especie.tipo}</option>
                        )
                     : 
                     null}
                </select>

            </div>

            <div className="campo-form">
                <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
                <input 
                    type="date"
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    placeholder="dd/mm/aaaa"
                    value={fecha_nacimiento}
                    onChange={onChange}
                />
            </div>

            <div className="campo-form">
                <label htmlFor="peso">Peso</label>
                <input 
                    type="number"
                    step="0.01"
                    id="peso"
                    name="peso"
                    placeholder="Ingrese el peso en Kg"
                    value={peso}
                    onChange={onChange}
                />
            </div>

            <div className="campo-form">
                <label htmlFor="esterelizado">Esterelizado</label>
                <select 
                name="esterelizado" 
                id="esterelizado" 
                type="text"
                value={esterelizado}
                onChange={onChange}
                >
                    <option key = "0" value = "" > Seleccione una opcion </option>
                    <option key = "1" value = "si" > SI </option>
                    <option key = "2" value = "no" > NO </option>
                </select>
            </div>

            <div className="campo-form">
                <input type="submit" className="btn btn-primario btn-block" value="Registrar Mascota" />
            </div>
        </form>
    </div>
        </>
    )
}
export default NuevaMascota