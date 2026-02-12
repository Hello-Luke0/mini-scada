import { useState, useEffect } from 'react'
import axios from 'axios'
import { CardStatus } from '../components/CardStatus'

function App() {
  const [data, setData] = useState(null)
  const API = "http://localhost:3000/api"

  const fetchState = async () => {
    try {
      const response = await axios.get(`${API}/status`);
      setData(response.data);  
    } catch (error) {
      console.error({erro: error})
    }
    
  }

  useEffect( () => {
    fetchState();
    const interval = setInterval(fetchState, 1000);
    return () => clearInterval(interval)

  }, [])

  if(!data) return <h1>Carregando</h1>

  return (
    <>
      <CardStatus
        title="Temperatura (° C)"
        value={data.temperature}
      />

      <CardStatus
        title="RPM"
        value={data.rpm}
      />

      <CardStatus 
        title="Status"
        value={data.status.toString()}
      />

      <CardStatus 
        title="Nível do tank"
        value={data.levelTank}
      />
     
     <CardStatus 
        title="Alarme"
        value={data.alarm.toString()}
      />
        
    </>
  )
}

export default App
