import React from "react";

const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
          <div className="campo">
        <label>Filtro Categoria</label>
        <select name="" id=""
        value={filtro}
        onChange={(e)=>setFiltro(e.target.value)}>
          <option value="">-- seleccione --</option>
          <option value="arriendo">arriendo</option>
          <option value="comida">comida</option>
          <option value="servicios">servicios</option>
          <option value="otrosGastos">Otros Gastos</option>
        </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
