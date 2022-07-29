import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import  "react-circular-progressbar/dist/styles.css"
function ControlPresupuesto({
  gastos,
  presupuesto,
  setGastos,
  setPresupuesto,
  setIsValidPresupuesto
 }) {
  const [porcentaje,setPorcentaje]=useState(0)
  const [cantidadDisponible,setCantidadDisponible]=useState(0);
  const [cantidadGastado,setCantidadGastado]=useState(0);
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  };

  //el use efect se activa cada vez que cambie su valor
  useEffect(() =>{
    const totalGasto = gastos.reduce( (total,gasto) => (gasto.cantidad + total),0 );
    const totalDisponible = presupuesto - totalGasto;
    //calcular porcentaje
    const nuevoPorcentaje = (((presupuesto - totalDisponible)/presupuesto)*100).toFixed(2);
    setCantidadDisponible(totalDisponible);
    setCantidadGastado(totalGasto);
    
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
  },[gastos])
  
   const handleResetApp =()=>{
    const resultado = confirm("desea reiniciar el presupuesto");
   
   if (resultado) {
     setGastos([])
     setPresupuesto(0)
     setIsValidPresupuesto(false)
   }
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar value={porcentaje}
        styles={buildStyles({
          pathColor : porcentaje > 100 ? 'red' : '#3B82F6',
          trailColor :'#F5F5F5',
          textColor : porcentaje > 100 ? 'red' : '#3B82F6'
        })}
        text={`${porcentaje}% Gastado`}>
          
        </CircularProgressbar>
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" 
        type="button" 
        onClick={handleResetApp}>Resetear App</button>
        <p>
          <span>Presupuesto : {formatearCantidad(presupuesto)}</span>
          </p>
          <p className={`${cantidadDisponible < 0 ? 'negativo': ''}`}>
            <span>Disponible : {formatearCantidad(cantidadDisponible)}</span>
          </p>
          <p>
            <span>Gastado : { formatearCantidad(cantidadGastado)}</span>
          </p>
        
      </div>
    </div>
  );
}

export default ControlPresupuesto;
