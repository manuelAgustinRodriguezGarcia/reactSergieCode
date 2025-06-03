//fetchData.js
export const fetchDatos = async(endpoint) => {
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      const datos = await response.json()
      return {
        datos,
        isLoading: false
      }
    }
    catch(error) {
      console.error("Error fetching users:", error)
    }
  }