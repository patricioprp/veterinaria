import React, { useState, useContext, useEffect } from 'react'
import PedidoContext from '../../context/pedidos/pedidoContext'

const ListadoPedido = () => {
    const pedidoContext = useContext(PedidoContext);
    const { obtenerPedidos} = pedidoContext;

    useEffect(() => {
        obtenerPedidos()
    }, [])
    

    return(

        <h1>Listado pedido</h1>
    )
}

export default ListadoPedido