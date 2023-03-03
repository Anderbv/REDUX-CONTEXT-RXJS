import { SubjectManager } from "../utilities/subject-manager";

//Este es el servicio para pasar informacion
export const sharingInformationService = new SubjectManager();
//Ahora cualquiera que pueda obtener o utilizar este informationService
//va a acceder exactamente al mismo canal de comunicacion;

//Los componentes van a consumir informacion a traves de este archivo
//Es mala practica que cada componente consuma la informacion por si misma
//porque llegaria el momento donde el componente muera y el canal de comunicacion exitos


