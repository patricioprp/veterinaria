import React, {useContext} from "react";
import VendedorContext from "../../context/vendedor/vendedorContext";

const OptionsSlider = () => {
    //Extrart la informacion de vendedor
    const vendedorContext = useContext(VendedorContext);
    const {mostrarFormUsuario,mostrarFormPedido,mostrarListadoPedido,mostrarListadoUsuario} =  vendedorContext
    return(
        <ul>
        <li onClick={mostrarFormPedido}>Nuevo Pedido</li>
        <li onClick={mostrarListadoPedido}>Listado de Pedidos</li>
        <li onClick ={mostrarFormUsuario}>Nuevo Usuario</li>
        <li onClick ={mostrarListadoUsuario}>Listado de Usuarios</li>
    </ul>
    )
}

export default OptionsSlider