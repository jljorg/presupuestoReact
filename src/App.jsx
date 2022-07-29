import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevo from "./img/nuevo-gasto.svg";
import { generarId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";

function App() {
  const [presupuesto, setPresupuesto] = useState();
  const [gastos, setGastos] = useState([]);

  /*
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')?? 0)
  );
   const [gastos, setGastos] = useState(
     localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
  
  */

  //flase para la validacion de validar presupuesto
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  //se incializa el modal en false para que no muestre el modal
  const [modal, setModal] = useState(false);
  // funcion al darle clic en el  img max cambie la variable de set modal a true y muestre el modal

  const [animarModal, setAnimarModal] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [gastosFiltro, setGastosFiltro] = useState([]);
  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      //Actualizar gasto
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      // nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const [gastoEditar, setGastoEditar] = useState({});
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      handleNuevoGasto();
    }
  }, [gastoEditar]);

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);
  /*
  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  },[gastos])

  useEffect(()=>{
    const  presupuestoLS =Number(  localStorage.getItem('presupuesto') ) ?? 0;
     if (presupuestoLS > 0) {
       setIsValidPresupuesto(true)
     }
  },[])
  */
 useEffect(()=>{
   if (filtro) {
     const gastosFiltrados = gastos.filter(gasto => gasto.categoria===
      filtro)
      setGastosFiltro(gastosFiltrados)
   }
 },[filtro])
  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      ></Header>

      {
        //valida si al ingresas el prwsupuesto al principio es valido que muestre el boton  de nuevo modal el max
        isValidPresupuesto ? (
          <>
            <main>
              <Filtros
              filtro={filtro}
              setFiltro={setFiltro}></Filtros>
              <ListadoGastos
                gastos={gastos}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                filtro={filtro}
                gastosFiltro={gastosFiltro}
              ></ListadoGastos>
            </main>
            <div className="nuevo-gasto">
              <img src={IconoNuevo} onClick={handleNuevoGasto} />
            </div>
          </>
        ) : //false no hace nada
        null
      }

      {
        //validacion si  modal es true muestra el componente   modal si es false no
        //se le pasa una variable del set modal para hacer el cambio a false en el componente ir al componente
        modal && (
          <Modal
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            setModal={setModal}
            guardarGasto={guardarGasto}
            gastoEditar={gastoEditar}
            setGastoEditar={setGastoEditar}
          ></Modal>
        )
      }
    </div>
  );
}

export default App;
