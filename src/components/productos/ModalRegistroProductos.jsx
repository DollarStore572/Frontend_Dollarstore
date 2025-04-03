import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ModalRegistroProductos = ({
  mostrarModal,
  setMostrarModal,
  nuevoProducto,
  manejarCambioInput,
  agregarProducto,
  errorCarga,
  categorias // Lista de categorías obtenidas
}) => {
  return (
    <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Nuevo Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formDescripcionProducto">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              name="descripcion"
              value={nuevoProducto.descripcion}
              onChange={manejarCambioInput}
              placeholder="Ingresa la descripción (máx. 30 caracteres)"
              maxLength={30}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCantidadProducto">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              name="cantidad"
              value={nuevoProducto.cantidad}
              onChange={manejarCambioInput}
              placeholder="Ingresa la cantidad"
              min="0"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrecioProducto">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="precio_producto"
              value={nuevoProducto.precio_producto}
              onChange={manejarCambioInput}
              placeholder="Ingresa el precio"
              step="0.01"
              min="0"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formExistenciaProducto">
            <Form.Label>Existencia</Form.Label>
            <Form.Control
              type="number"
              name="existencia"
              value={nuevoProducto.existencia}
              onChange={manejarCambioInput}
              placeholder="Ingresa la existencia"
              min="0"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMarcaProducto">
            <Form.Label>ID Marca</Form.Label>
            <Form.Control
              type="number"
              name="id_marca"
              value={nuevoProducto.id_marca}
              onChange={manejarCambioInput}
              placeholder="Ingresa el ID de la marca (opcional)"
              min="1"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategoriaProducto">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="id_categoria"
              value={nuevoProducto.id_categoria}
              onChange={manejarCambioInput}
              required
            >
              <option value="">Selecciona una categoría</option>
              {categorias.map((categoria) => (
                <option key={categoria.id_categoria} value={categoria.id_categoria}>
                  {categoria.nombre_categoria}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {errorCarga && (
            <div className="text-danger mt-2">{errorCarga}</div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setMostrarModal(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={agregarProducto}>
          Guardar Producto
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegistroProductos;