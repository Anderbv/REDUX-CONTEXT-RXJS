//Redux es lo siguiente:
//Redux trabaja exactamente como un armario
//que tiene nuestro armario en su interior?
//cajones, cada cajon tiene en su interior prendas
//pero si somos ordenados cada uno de estos cajones
//tiene prendas similares, no es que un cajon
//tengamos medias y pantalonesxd, en un cajon
//tenemos medias en otro pantalones, en otro
//calzoncillos
//El armario es el store, es el unico lugar de la verdad
//Cada cajon representa lo quue se llama un state
//y en su interior contiene a una o a varias entidades, en este
//caso puede tener una media o una cantidad de medias pero si
//sabemos que ese state, ese cajon son medias

import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './states/user'

export const GentlemanStore = configureStore({
    reducer: {
        //el useReducer es una coleccion de todos los reducers de los states
        user: userSlice.reducer
    }
})


export default GentlemanStore;
//Pensemos en las maquinas expendedoras donde uno puede agarrar y dice
//bueno que quiero? quiero una fanta, voy pongo la monedita elijo
//la fanta y eso me devuelve una lata de fanta, eso tambien se puede
//pensar como un state mananger
//Cada state es una marca diferente de lata y cada vez que yo toco
//estoy emitiendo una accion en verdad, yo no puedo meter la mano
//dentro de la maquina y agarra la lata, yo digo hola maquina como andas
//toco el boton y estoy diciendo dame una lata de fanta, entonces estoy
//emitiendo una accion, la maquina cuando recibe esta accion
//dice que estoy haciendo aca? me esta pidiendo una lata..

//otro ejemplo un state que es latas y dentro de esas latas hay
//muchas marcas, el store solamente tiene un state latas, agarro
//emito la accion quiero una lata pero una lata fanta, recibe
//la accion osea la accion le llega a la maquina y lee que el
//usuario quiere una lata fanta, la busca, pum! me filtra cual es
//la lata que quiero y me la devuelva

//Redux se basa en acciones para justamente accionar sobre la accion
//contenida en el state

//recordemos que habiamos creado un subject y creamos metodos
//para poder acceder a la informacion dentro de la clase, clasico
//de encasulpmiento

//entonces pensemos de esta manera, vamos a tener redux dentro de este
//redux vamos a crear el store y vamos a emitir acciones que estan
//controladas, cada accion representa un metodo dentro de nuestro
//maquina expendedora de latas

//quien recibe esas acciones y quien decide para donde van cada una de esas acciones?
//esto viene por lo que se llama un reducer, reducer es un concepto de js
//una de las cosas que podemos hacer adentro es
//1-vamos a recibir una cierta accion, el reducer va a encaminar a donde va a ir
//esa accion y va a accionar el metodo que este asociado a la misma aciion
//el reducer se basa en que queremos compartir en nuestro store