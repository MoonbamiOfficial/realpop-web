import { useEffect, useState } from 'react'

export const useFetch = (api: string) => {
  const [ data, setData ] = useState([])
  const [ error, setError ] = useState({})

  const getData = async () => {
    let response = await fetch(api)
    let result = await response.json()
    return result
  }

  useEffect(() => {
    getData()
      .then(data => setData(data))
      .catch(error => setError(error))
  }, [api])

  return {
    data, error
  }
}