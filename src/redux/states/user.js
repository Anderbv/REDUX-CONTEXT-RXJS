//al state en redux toolkit se le conoce como un slice
//como un corte dentro del store

import { createSlice } from '@reduxjs/toolkit'

export const userEmptyState = {
    name: '',
    email: ''
}

export const userSlice = createSlice({
    name: "user",
    initialState: userEmptyState,
    reducers: {
        createUser: (state, action) => {
            return action.payload;
        },
        modifyUser: (state, action) => {
            return { ...state, ...action.payload}
            //retornamos un objeto nuevo que va a contener todo lo que ya tiene
            //en el state pero quiero que reemplace aquellas propiedades contenidas
            //dentro del payload
        },
        resetUser: () => {
            return userEmptyState;
        }
    }
})

//crear un slice tiene ciertas propiedades
//primero creas el nombre, despues cual es el valor
//inicial que va a tener el state
//luego de eso va a tener sus propios reducers
//que cosas podemos hacer dentro de los reducers?
//primero de todo crear un usuario, recibe un state y una
//accion, el state representa el valor actual que se encuentra
//en el slice, es el valor ahora mismo, la accion
//siempre va a estar acompañada de usar un payload, la accion
//ya sabemos cual es por ejemplo, crear un usuario nuevo, ahora
//tambien pueden haber otras acciones poder modificar el usuario,
//puede borrar el usuario, puede resetear el usuario de acuerdo
//si es una sola entidad, si son muchas entidades, etc.
//ademas de estoy la accion va a tener un paylod lo que es cual es
//el valor con el que yo quiero crear este usuario

//lo que nosotros retornemos en createuser, va a tomar el lugar
//que este en el state, entonces si nosotros queremos devolver
//el usuario nuevo, perfecto el ususario nuevo va a ser ahora
//el valor del state, si nosotros queremos modificar el usuario
//creamos un reducer

const persona = {
    name: "Alan",
    email: "miEmail@gmail.com"
}
const persona2 = {
    ...persona,
    name: 'Alan2'
}

//Como compartimos las acciones?
export const { createUser, modifyUser, resetUser } = userSlice.actions;
//exportamos todas las acciones que hemos creado