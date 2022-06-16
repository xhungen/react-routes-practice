import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
    
        setLoading(true)

        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
        


    }, [url]);

  return {data,error,loading}
  
}
