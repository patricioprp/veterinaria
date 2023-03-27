import React, {useContext} from "react";
import ClienteContext from "../../context/cliente/clienteContext";

const OptionsSlider = () => {
    //Extrart la informacion de cliente
    const clienteContext = useContext(ClienteContext);
    const {
        mostrarFormMascota,
        mostrarMisMascotas,
        mostrarMisPedidos
        } =  clienteContext;

    return(
        <ul>
        <li onClick={mostrarFormMascota}>Registrar Mascota</li>
        <li>Solicitar Combo</li>
        <li onClick={mostrarMisPedidos}>Ver Combos Pedidos</li>
        <li onClick={mostrarMisMascotas}>Mis Mascotas</li>
    </ul>
    )
}

export default OptionsSlider