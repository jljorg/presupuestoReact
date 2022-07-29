import React, { useEffect, useState } from "react";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";
function Modal({
   setModal, 
   animarModal, 
   setAnimarModal,
   guardarGasto,
   gastoEditar,
  setGastoEditar}) {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");
  

  const handleCerrarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setModal(false);
      
     set
    }, 500);
  }

 

  const handleGuardarFormulario = e =>{
    e.preventDefault();
    if ([nombre,cantidad,categoria].includes('')) {
      setMensaje('llene los campos por favor');
      setTimeout(() => {
        setMensaje('');
      }, 3000);
      
      return;
      
    }
    guardarGasto(gasto);
  }

  const gasto = {
    nombre,
    cantidad,
    categoria,
    fecha,
    id
    
  }

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setCantidad(gastoEditar.cantidad)
      setNombre(gastoEditar.nombre)
      setCategoria(gastoEditar.categoria)
      setFecha(gastoEditar.fecha)
      setId(gastoEditar.id)
      
    }

  },[])

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={handleCerrarModal} />
      </div>
      <form 
      onSubmit={handleGuardarFormulario} 
      className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre"> Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingrese Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            id="cantidad"
            placeholder="Ingrese cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Clase Gasto</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- seleccione --</option>
            <option value="arriendo">arriendo</option>
            <option value="comida">comida</option>
            <option value="servicios">servicios</option>
            <option value="otrosGastos">Otros Gastos</option>
          </select>
        </div>
        <input type="submit" value={gastoEditar.nombre ? 'Guardar Cambios' : 'Agregar'}  />
      </form>
    </div>
  );
}

export default Modal;
