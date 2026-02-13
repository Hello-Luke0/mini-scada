import React from 'react'

export const PanelControl = ({status, alarm, onStart, onStop, onAlarmReset}) => {
  return (
    <div>
        <h2>Painel de controle</h2>

        <p>
            Status da máquina: {" "}
            <strong> {status } </strong>
        </p>

        <button onClick={onStart}>
            Ligar
        </button>

        <button onClick={onStop}>
            Desligar
        </button>

        {alarm && (
        <div style={{ marginTop: 20, color: "red" }}>
          <h3>⚠️ Alarme: Temperatura Alta!</h3>
          <button onClick={onAlarmReset}>Resetar Alarme</button>
        </div>
      )}
      
    </div>
  )
}
