import { useState, useEffect } from 'react'
import axios from 'axios'
import { CardStatus } from '../components/CardStatus'
import { PanelControl } from '../components/PanelControl'

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
    <div>
      <CardStatus
        title="Temperatura (° C)"
        value={data.temperature.toFixed(2)}
      />

      <CardStatus
        title="RPM"
        value={data.rpm.toFixed(2)}
      />


      <CardStatus 
        title="Nível do tank"
        value={data.levelTank.toFixed(2)}
      />
    </div>
      
    <div>
      <PanelControl
          status={data.status}
          alarm={data.alarm.toString()}
          onStart={ () => {
            axios.post(`${API}/start`).then(fetchState)
          }}
          onStop={() => {
            axios.post(`${API}/stop`).then(fetchState)
          }}
          onAlarmReset={() => {
            axios.post(`${API}/alarm-reset`).then(fetchState)
          }}
      />
    </div>
           
    </>
  )
}

export default App
