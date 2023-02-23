import React, {useState, useEffect, useRef,useContext} from 'react';
import ReporteContext from '../../context/reporte/reporteContext'
import NuevoProyecto from '../supervisor/monitoreos/NuevoProyecto';
import Listado from '../supervisor/monitoreos/Listado';
import DropdownItem from '../general/DropdownItem';

const Sidebar = () => {
    // const html = "<h1>My title</h1>"
    // <div dangerouslySetInnerHTML={{ __html: html }} />

    const reporteContext =  useContext(ReporteContext);
    const {obtenerModelos,modelos} = reporteContext; 

    const [open, setOpen] = useState(false);

    let menuRef = useRef();
    
    useEffect(() => {
      obtenerModelos()
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    },[open]);

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
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
        <h3>Reportes</h3>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            {/* <DropdownItem  text = {"My Profile"}/>
            <DropdownItem  text = {"Edit Profile"}/>
            <DropdownItem  text = {"Inbox"}/>
            <DropdownItem  text = {"Settings"}/>
            <DropdownItem  text = {"Helps"}/>
            <DropdownItem  text = {"Logout"}/> */}
            {
             modelos ?
             modelos.map(modelo =>
              <DropdownItem  text = {modelo.modelo}
              key={modelo.id}
              />
              ) : null
            }
          </ul>
        </div>
      </div>
    </div>
            </div>
        </aside>
     );
}
 
export default Sidebar;