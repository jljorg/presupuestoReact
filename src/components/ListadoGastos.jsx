import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltro,
}) => {
  return (
    <div className="listado.gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay Gastos"}</h2>
      {filtro ?( 
        gastosFiltro.map((gasto) => (
            <Gasto
              key={gastos.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            ></Gasto>
          ))
        ): (
          gastos.map((gasto) => (
            <Gasto
              key={gastos.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            ></Gasto>
          ))
        )}
    </div>
  );
};

export default ListadoGastos;
