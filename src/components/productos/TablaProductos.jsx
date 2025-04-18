// Importaciones necesarias para el componente visual
import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TablaProductos = ({ productos, cargando, error }) => {

  if (cargando) {
    return <div>Cargando productos...</div>; // Muestra mensaje mientras carga
  }

  if (error) {
    return <div>Error: {error}</div>;        // Muestra error si ocurre
  }

  // Renderizado de la tabla con los datos recibidos
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID Producto</th>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Existencia</th>
          <th>ID Marca</th>
          <th>ID Categoría</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id_producto}>
            <td>{producto.id_producto}</td>
            <td>{producto.descripcion || 'Sin descripción'}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.precio_producto.toFixed(2)}</td>
            <td>{producto.existencia}</td>
            <td>{producto.id_marca || 'Sin marca'}</td>
            <td>{producto.id_categoria}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Exportación del componente
export default TablaProductos;