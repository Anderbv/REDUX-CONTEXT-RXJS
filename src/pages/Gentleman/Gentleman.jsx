import ComponentContext1 from "./components/ComponentContext1"
import ComponentContext2 from "./components/ComponentContext2"
import ComponentRedux2 from "./components/ComponentRedux2"
import { GentlemanProvider } from "./context/gentleman.context"

function Gentleman() {

  //2-Generamos nuestro contexto
  //Lo creamos, cuando lo creamos tenemos que poner cuales son las cosas
  //a transmitir a traves del mismo
  // const context = createContext({
  //   gentlemanContextValue: '',
  //   setGentlemanContextValue: () => {}
  // });    

  //3-utlizamos el contexto
  //cual va a ser? gentlemanContext
  // const GentlemanContext = useContext(gentlemanContext);

  //4-ahora si lo queremos utilizar un provider

  //-------------------INCIO----------------
  //Normalmente si nosotros queremos crear un contexto
  //-----------------------------------------------
  //1-creariamos un state interno
  // const [gentlemanContextValue, setGentlemanContextValue] = useState('');
  

  return (
    // <div>
    //   <GentlemanContext.Provider value={{
    //     //Aqui vamos a mandar el valor que vamos a transmitir a traves de nuestro proveedor
    //     gentlemanContextValue,
    //     setGentlemanContextValue
    //   }}>
    //     {/*Los componentes que esten dentro del provedor van a acceder al value */}
    //     <ComponentContext1 />
    //     <ComponentContext2 />
    //   </GentlemanContext.Provider>
    // </div>
    //Un proveedor tiene que englobar aquellos elementos que van a acceder a la informacion
    //del contexto
    //Para context es buena practica tener 1 por page
    <div>
      <GentlemanProvider>
        <ComponentContext1 />
        <ComponentContext2 />
        <ComponentRedux2 />
      </GentlemanProvider>
    </div>
  )

  
}
export default Gentleman