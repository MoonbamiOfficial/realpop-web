import { useEffect, useState } from 'react'

export const useFetch = (api: string) => {
  const [ datas, setDatas ] = useState([])
  const [ error, setError ] = useState({})

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setDatas(data))
      .catch(error => setError(error))
  }, [api])

  return {
    datas, error
  }
}