import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const GentlemanContext = createContext();

export const GentlemanProvider = ({ children }) => {
  const [gentlemanContextValue, setGentlemanContextValue] = useState('');
  return (
    <GentlemanContext.Provider value={{gentlemanContextValue, setGentlemanContextValue}}>
      {children}
    </GentlemanContext.Provider>
  )
};
//GentlemanProvider es un componente, el children es lo que estará adentro de nuestro componente

export const useGentlemanContext = () => {
  //el useContext es la forma para acceder a un contexto y obtener informacion
  const context = useContext(GentlemanContext);

  //Cuando queramos utilizar el contexto y ese contexto no existe tiramos un error
  if(context === undefined) {
    throw new Error('GentlemanContext must be used within a GentlemanProvider')
  } else {
    return context;
  }
}