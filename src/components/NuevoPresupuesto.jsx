import React, { useState } from "react";
import Mensaje from "./Mensaje";

function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) {
  const [mensaje, setMensaje] = useState("");
  
  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (presupuesto <= 0 || !presupuesto) {
      setMensaje("Ingrese precio correcto");
      return;
    }
    setMensaje("");
    //de app llega  por medio tambien de header la variable isValidPresupuesto la ponemos en true par que muestre el control de presuouesto
    //en el header esta la validacion para que muestre el componente de control de presupuesto si es true
    //si agrega un precio correcto pasa a la validacion y pone setIsValidPresupuesto en true y en el header  esta la validacion
    //que si esta en true muestre el componetne control presupuesto
    setIsValidPresupuesto(true);
    /*
      else{
        setMensaje('Muy bien');
        
      }
      */
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Ingrese Presupuesto</label>
          
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Agregar Presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Agregar" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
