import { sharingInformationService } from "../../service/sharing-information.service"

function Component1() {
  //Ahora veremos como emitir informacion
  const handleClick = () => {
    sharingInformationService.setSubject(true)
  }
  const handleClickNo = () => {
    sharingInformationService.setSubject(false)
  }
  return (
    <div>
      <button onClick={handleClick}>Enviar information</button>
      <button onClick={handleClickNo}>No enviar information</button>
    </div>
  )
}
export default Component1