import { useDispatch } from 'react-redux'
import { createUser, modifyUser, resetUser } from '../../redux/states/user';

function ComponentRedux1() {
  const dispatcher = useDispatch();
    //un dispatcher es el encargado de despechar las acciones
    //es la que va a recibir las acciones que queremos, la va 
    //a mandar al store, el store la recibe en el reducer
    //y dice okey es este
    // user: userSlice.reducer

  const handleClickCreate = () => {
    dispatcher(createUser({name: 'Lucho', email: 'lucho@gmail.com'}));
  };

  const handleClickModify = () => {
    dispatcher(modifyUser({email: 'Anderson@hotmail.com'}));
  };

  const handleClickReset = () => {
    dispatcher(resetUser());
  }

  return (
    <div>
      <button onClick={handleClickCreate}>Enviar informacion redux, createUser</button>
      <button onClick={handleClickModify}>Enviar informacion redux, modifyUser</button>
      <button onClick={handleClickReset}>Enviar informacion redux, resetUser</button>
    </div>
    
  )
}
export default ComponentRedux1