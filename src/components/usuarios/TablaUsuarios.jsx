// Importaciones necesarias para el componente visual
import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Declaración del componente TablaUsuarios que recibe props
const TablaUsuarios = ({ usuarios, cargando, error }) => {
  // Renderizado condicional según el estado recibido por props
  if (cargando) {
    return <div>Cargando usuarios...</div>; // Muestra mensaje mientras carga
  }
  if (error) {
    return <div>Error: {error}</div>;         // Muestra error si ocurre
  }

  // Renderizado de la tabla con los datos recibidos
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Usuarios</th>
          <th>Contraseña</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
            <tr key={usuario.usuario}>
            <td>{usuario.usuario}</td>
            <td>{usuario.contraseña}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Exportación del componente
export default TablaUsuarios;