import React from 'react';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>Monit<span>oreos</span></h1>
             {/* <NuevoProyecto /> */}
            <div className='proyectos'>
                <h2> Konecta Argentina</h2>
                <ul>
                    <li>Nuevo</li>
                    <li>Listado</li>
                    <li>Soporte Operativo</li>
                </ul>
                <hr />
                
    <div className="App">
      <div className='menu-container'>
        <div className='menu-trigger'>
        <h3>Reportes</h3>
        </div>
      </div>
    </div>
            </div>
        </aside>
     );
}
 
export default Sidebar;