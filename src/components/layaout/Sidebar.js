import React from 'react';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>Gestion de <span>Pedidos</span></h1>
             {/* <NuevoProyecto /> */}
            <div className='proyectos'>
                <h2> Veterinaria</h2>
                <ul>
                    <li>Nuevo Pedido</li>
                    <li>Listado de Pedidos</li>
                </ul>
                <hr />
            </div>
        </aside>
     );
}
 
export default Sidebar;