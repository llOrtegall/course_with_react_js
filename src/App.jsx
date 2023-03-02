import { useEffect, useState } from 'react'

// const CAT_ENDPOINT = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

const CAT_ENDPOINT_RAMDON = 'https://catfact.ninja/fact'

export const App = () => {
  const [fact, setFac] = useState('aqui el app de gatitos')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDON)
      .then(res => res.json())
      .then(data => setFac(data.fact))
  }, [])

  return (
    <main>
      <h1>App De Gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
