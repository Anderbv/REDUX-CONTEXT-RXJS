import { useState } from "react";
import { useEffect } from "react";
import { sharingInformationService } from "../../service/sharing-information.service";

function Component2() {
  const [count, setCount] = useState(0);
  const subscription$ = sharingInformationService.getSubject();
  useEffect(() => {
    //El Componente 2 es el que recibe informacion
    subscription$.subscribe((data) => {
      //Aca lo que estamos haciendo es justamente lo que hablamos del canal de comunicacion
      //las personas que ven a traves de los agujeros, estamos creando la persona, estamos
      //diciendo esta persona Component2 que escuche(se suscriba) a ver que es lo que pasa 
      //a traves de ese tubito
      //Que objeto pasa por ahi, ese objeto es la data
      if(!!data) {
        //cerra modal y viajar a otra page
        setCount(count + 1);
      } else {
        //cerra modal y seguir en la page actual
      }
    })
  }, [count])
  

  return (
    <div>{count}</div>
  )
}
export default Component2