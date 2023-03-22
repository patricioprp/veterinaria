import React from 'react'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from './components/auth/Login';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import VendedorState from './context/vendedor/vendedorState';
import RutaPrivada from './components/rutas/RutaPrivada';
import HomeCliente from './components/cliente/Home';
import HomeVendedor from './components/vendedor/Home';
import FormUsuario from './components/vendedor/NuevoUsuario';
import NuevaCuenta from './components/auth/NuevaCuenta';

function App() {
  return (
    <VendedorState>
      <AlertaState>
        <AuthState>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/nueva-cuenta" element={<NuevaCuenta />} />
              { 
                  <Route exact path="/home/vendedor" element={
                      <RutaPrivada>
                        <HomeVendedor />
                      </RutaPrivada>
                    } >
                    </Route>
              }
              { 
                  <Route exact path="/home/vendedor/nuevoUsuario" element={
                      <RutaPrivada>
                        <FormUsuario />
                      </RutaPrivada>
                    } >
                    </Route>
              }
              { <Route exact path="/home/cliente" element={
                <RutaPrivada>
                  <HomeCliente />
                </RutaPrivada>
              } /> }
            </Routes>
          </BrowserRouter>
        </AuthState>
       </AlertaState>
    </VendedorState>
  );
}

export default App;
