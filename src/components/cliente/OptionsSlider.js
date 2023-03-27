import React, {useContext} from "react";
import ClienteContext from "../../context/cliente/clienteContext";

const OptionsSlider = () => {
    //Extrart la informacion de cliente
    const clienteContext = useContext(ClienteContext);
    const {
        mostrarFormMascota,
        mostrarMisMascotas,
        mostrarMisPedidos,
        mostrarFormPedidos
        } =  clienteContext;

    return(
        <ul>
        <li onClick={mostrarFormMascota}>Registrar Mascota</li>
        <li onClick={mostrarFormPedidos}>Solicitar Combo</li>
        <li onClick={mostrarMisPedidos}>Ver Combos Pedidos</li>
        <li onClick={mostrarMisMascotas}>Mis Mascotas</li>
    </ul>
    )
}

export default OptionsSlider