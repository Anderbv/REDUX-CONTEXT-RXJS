import { useSelector } from 'react-redux'
function ComponentRedux2() {

    const userState = useSelector(store => store.user);
    //useSelector va a decir del store que es el que esta en redux
    //vamos a utilizar qué? el user, la informacion del user    
    //voy a seleccionar del store el usuario
    //y ese state va a estar guardadito aca

  return (
    <div>El state del user es: {JSON.stringify(userState)}</div>
  )
}
export default ComponentRedux2