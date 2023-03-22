import React, {useContext} from "react";
import VendedorContext from "../../context/vendedor/vendedorContext";

const OptionsSlider = () => {
    //Extrart la informacion de vendedor
    const vendedorContext = useContext(VendedorContext);
    const {
        mostrarFormUsuario,
        mostrarFormPedido,
        mostrarListadoPedido,
        mostrarListadoUsuario} =  vendedorContext;

    return(
        <ul>
        <li onClick={mostrarFormPedido}>Nuevo Pedido</li>
        <li onClick={mostrarListadoPedido}>Listado de Pedidos</li>
        <li onClick ={mostrarFormUsuario}>Nuevo Vendedor</li>
        <li onClick ={mostrarListadoUsuario}>Listado de Vendedores</li>
        <li>Listado de Clientes</li>
    </ul>
    )
}

export default OptionsSlider