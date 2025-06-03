//userFetchData.js
import { useState, useEffect } from 'react'
import { fetchDatos } from '../../helpers/fetchData';

export const useFetchData = (endpoint/*:string*/ ) => {

  const [datos, setDatos] = useState/*<TypeName[]>*/([]);
  const [isLoading, setIsLoading] = useState/*<boolean>*/(true);

  const traerDatos = async() => {//espera a que se resuelva la promesa y se hace por afuera del useEffect porque no se puede usar async dentro de useEffect
    const {datos, isLoading} = await fetchDatos(endpoint);
    setTimeout(() => {
      setDatos(datos);
      setIsLoading(false);
    }, 2000); // Simula un tiempo de carga de 1 segundo
  }

  useEffect( ()=> {
    traerDatos();//aca adentro no puede ir un async porque useEffect no acepta funciones async directamente
  },[endpoint])
  
  return {
    datos,//datos como name, id, etc.
    isLoading //isLoading es un booleano que indica si los datos se estan cargando o no, con ese dato se puede mostrar un spinner o un mensaje de carga
  }
}
//aca se guarda toda la logica de la llamada a la API y se retorna un objeto con los datos y el estado de carga