import './App.css'
import Component1 from './components/Rxjs/Component1'
import Component2 from './components/Rxjs/Component2'
import Gentleman from './pages/Gentleman/Gentleman'
import { Provider } from 'react-redux'
import ComponentRedux1 from './components/Redux/ComponentRedux1'
import ComponentRedux2 from './pages/Gentleman/components/ComponentRedux2'
import GentlemanStore from './redux/store'

function App() {
  //Todo lo que se tenga que compartir en toda la aplicacion es una entidad
  //Una entidad hace representacion a lo que se utilizara en toda la App
  //Por ejemplo un usuario;
  //Si fueramos a Amazon siempre tuvieramos un carrito de compras entonces cuando
  //uno quiere comprar cosas, pone agregar al carrito, agregar al carrito, arriba
  //a la derecha el carrito sigue existiendo, no importa si nos vamos a diferentes
  //Lugares, si vamos a diferentes pantallas el carrito siempre esta.
  //Esa es una entidad muy buena para Redux 
  //Entonces nuevamente, tiene que estar en la aplicacion y tiene que compartir
  //la informacion de manera, veras y de la manera mas actualizada posible.
  
  //Cuando yo utilizo Context?
  //Context lo utilizamos para compartir informacion entre componentes, entre
  //componentes de la misma VISTA
  //Yo no comparto informacion entre toda la informacion, entre diferentes Pages
  //Yo comparto solamente para una misma Page

  //Y lo ultimo de todo para que vamos a utilizar RxJS, lo utilizaremos para la cosa
  //más simple de todas, va a ser para comunicar informacion entre componentes
  //pero para eventos como por ejemplo abrir un modal, que se toco un boton
  //es para informar que algo ha sucedido por que? porque ya es super simple


  return (
    <div className="App">
      <Provider store={GentlemanStore}>
        <h2>Rxjs</h2>
        <Component1 />
        <Component2 />
        <h2>Context</h2>
        <Gentleman />
        <h2>Redux</h2>
        <ComponentRedux1 />
      </Provider>
    </div>
  )
}

//La idea principal de Context es compartir informacion
//dentro de la App y generalmente y para combatir algo muy
//feo llamado prop drilling, que es el prop drilling
//es que un padre le pasa al hijo, ese hijo al hijo hasta
//uno llegar al hijo que quiere
//Eso es horrible porque lo que genera es una gran depedencia

//Rxjs es una libreria que se encarga de hacer manejo de observables
//un observable es un canal de comunicacion, es algo propio de JS
//Rxjs nos permite crear canales de informacion y todo esto se basa
//en la programacion Reactiva
//tenemos un tubo, con agujeros, en cada uno de estos agujeros
//habra una persona mirando a traves de ese agujerito
//y vamos a pasar un obj a traves de ese tubo
//como caada persona es un mundo, cada persona va a notar cosas
//diferentes del objeto que esta pasando
//por ejemplo una persona va a detectar que el objeto que pasa por ahi
//va pasando a 12kilemetros/h y depues tenemos otra persona que dice
//el objeto que esta pasando es de color rojo
//Cada uno ve cosas diferentes pero la informacion es exactamente la misma
//Es el mismo objeto y esa es la programacion reactiva, las cosas reaccionan
//ante la informacion que les llega

//El canal de informacion es nuestro observable, el tubo es un observable
//a traves de ese observable tenemos personas mirando lo que serian
//suscriptores(componentes) y luego el objeto que esta pasando es informacion
//que puede ser el user que en este momento esta logeado en la App
//puede ser directamente un evento, un true, un false
//esto es la programacion Reactiva, cada uno de esos componente que les llegara
//cierta informacion, digamos que informacion del usuario
//un componente utilizara para notificar la aplicacion, otro lo utilizara
//para mostrar en pantalla y otro solamente quiere saber el nombre para mandarle
//un email con un mensaje de bienvenida
//Cada componente va a utilizar la misma informacion pero van a reaccionar de manera
//diferente

//Que es rxjs es una libreria magica porque practicamente nos brindara de herramientas
//para poder manejar los observables

//Un observable dentro del dia a dia es lo que nosotros llamamos Unicast, solamente
//emite datos, no vamos a tener un componente que emite y otro compnente que lo reciba
//Rxjs crea otro tipo de observables que son super utiles
//subject y bigeiborsubject
//Tenemos un observable llamado subject y otro vigeiborSubject, principal diferencia
//Los dos van a pasar ahora a ser MultiCast eso quiere decir que tanto
//Un componente puede recibir como emitir informacion a traves de ese observable
//Si los dos hacen exactamente lo mismo por que hay dos?
//La principal diferencia entre estos dos es que si yo envio una informacion
//a traves de mi canal de informacion y yo llego tarde me lo pierdo
//No lo voy a poder recibir, no lo voy a poder entender porque no existe para mi
//Lo que si va a existir es el siguiente que llegue.
//Emitir es pasar un nuevo evento, nada más.
//Es como agarrar y pasar el objeto por el tubito que hablabamos.
//Ahora el bigeiborSubject lo interesante que tiene es que tiene lo que se llama
//un caché(un buffer)
//Va a guardar el ultimo elemento que se haya enviado y si yo llego tarde
//Es como que si tuviera una persona que me diga no pasa nada, lo que dijeron
//fue hola, perfecto muchas gracias.
//Esa es la idea, si yo llego tarde es decir si me suscribo tarde aun voy a recibir
//la informacion y en este caso la más actualizada, la ultima.
export default App
