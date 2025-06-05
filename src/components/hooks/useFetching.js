import { useEffect, useState } from "react"

export const useFetching = (url) => {
  const [datos, setDatos] = useState({
    data: null,
    errors: null,
    isLoading: true
  })

  const {data, errors, isLoading} = datos //desestructuro para poder uasrlo en el return

  const getFetch = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setDatos({
        data: data, //se puede dejar solo data
        isLoading: false, 
        errors: null
      })
      console.log(data)
    } catch(error) {
      setDatos({
        data: null, 
        isLoading: false, 
        errors: error
      })
    }
  }

  useEffect(()=> {
    if(!url) return
    setTimeout(() => {
      getFetch()
    }, 1500)
  }, [url])

  return {
    data, 
    isLoading,
    errors
  }
}
