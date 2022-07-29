import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

function Header({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  setGastos
}) {
  return (
    <header>
      <h1>Planificador De Gastos</h1>

      {
        // isValidPresupuesto es true muestra el componente de   ControlPresupuesto
        isValidPresupuesto ? (
          <ControlPresupuesto 
          gastos={gastos}
          presupuesto={presupuesto}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          ></ControlPresupuesto>
        ) : (
          // isValidPresupuesto es false muestra  NuevoPresupuesto
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          ></NuevoPresupuesto>
        )
      }
    </header>
  );
}

export default Header;
