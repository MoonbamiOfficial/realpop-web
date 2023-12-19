import { useCallback, useEffect, useState } from 'react'

export const useFetch = (url: string) => {
  const [ data, setData ] = useState([])
  const [ error, setError ] = useState({})

  const getData = useCallback(async () => {
    let response = await fetch(url)
    let result = await response.json()
    return result
  }, [])

  useEffect(() => {
    getData()
      .then(data => setData(data))
      .catch(error => setError(error))
  }, [url])

  return {
    data, error
  }
}