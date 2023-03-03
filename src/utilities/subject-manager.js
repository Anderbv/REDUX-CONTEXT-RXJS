//dentro de utilites vamos a tener funcionalidades que utilicemos en toda nuestra aplicacion

import { Subject } from 'rxjs'

export class SubjectManager {
    subject$ = new Subject(); //creamos un canal de informacio
    //dentro de este canal de informacion vamos a pasar informacion
    //pero lo haremos bien

    getSubject() {
        return this.subject$.asObservable();
        //hay dos tipos de observables los subjects y los vigeiborsubjects
        //Son soluciones que brinda rxjs a un observable comun y corriente de js
        //por que era una solucion? porque el observable de js es Unicast, solamente
        //podemos enviar informacion si y los componentes solo pueden recibirla

        //Pero que pasa si un componente quiere emitir informacion?
        //Ahi es donde entra subject y ahi es donde mi observable se veulve
        //MultiCast lo que quiere decir que mi componente puede recibir y emitir
        //informacion

        //Si nosotros nos basamos en las buenas practicas dentro de mi clase SubjectManager
        //que nosotros devolvamos el subject rompe uno de los principios de la programacion orientada
        //a objetos que es el encasulapmiento, el encasulapmiento es que solamente podemos modificar
        //las cosas a traves de un metodo
        //SI NOSOTROS PASAMOS EL SUBJECT PODEMOS HACER ESTO
        //subject.next(information)
        //ven ese .next ese .next es para poder enviar informacion
        //y si nosotros devolvemos el subject
        //return this.subjecct
        //no estamos diciendo okey te doy el subject para que te suscribas, para que escuches informacion
        //Con esto (return this.subject) le estoy dando una puerta abierta
        //y no es lo que queremos, entonces vamos a transformarlo comun y corriente;
        //y ahora se hace uniCast

        //.asObersable() va a ser que ninguno pueda enviar infomacion a traves del subject cuando lo esten
        //obteniendo y que solamente se pueda enviar informacion a traves del settter
    }

    setSubject(value) {
        this.subject$.next(value);
        //De esta manera vanos enviar informacion a traves de este canal de comunicacion(subject)
        //Enviamos con .next la nueva informacion al que lo quiera escuchar
        //Y de esta manera vamos a poder controlar facilmente la cantidad de canales de informacion
        //que nosotros querramos.
    }
};

//Este es un observable totalmente asyncrono, este es un observable que puede obtener informacion
//Puede devovler informacion
