import axios from "axios"
import { useEffect, useState } from "react"

export const useAPiData = (API_URL, initialValue = null) => {
const [dataFromAPi, setDataFromAPi] = useState(initialValue)
const [apiError, setApiError] = useState({})

useEffect(() => {
  axios.get(API_URL).then((res)=> {
       setDataFromAPi(res.data)
  }).catch((err)=> {
    console.log('error from API: ', err);
    setApiError(err)
  })
}, [])

  return [dataFromAPi, setDataFromAPi, apiError]
}