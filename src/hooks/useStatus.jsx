import { useEffect, useState } from 'react'

const logResult = result => {
  const { status: fetchStatus, message: fetchMessage } = result
  const logStream = fetchStatus === 'Success' ? console.log : console.warn
  
  logStream(fetchMessage)
}

export const useStatus = statusUrl => {
  const [status, setStatus] = useState(null)


  useEffect(() => {
    let ignore = false

    const fetchStatus = async url => {
      const response = await fetch(url)
      const result = await response.json()

      if (!ignore) {
        logResult(result)
        !!result?.data && setStatus(result.data.status)
      }
    }

    fetchStatus(statusUrl)

    return () => { ignore = true }
  }, [statusUrl])

  return status
}
