import React from 'react'

export const PanelControl = ({status, alarm, onStart, onStop, onAlarmReset}) => {
  return (
    <div
    style={{
        display: "flex",
        justifyContent: "center"
    }}
    >
        <div
        style={{
            marginTop: "20px",
            backgroundColor: "lightgray",
            padding: "30px",
            borderRadius: "30px",
            textAlign: "center"
        }}
        >
            <h2>Painel de controle</h2>

            <p>
                Status da máquina: {" "}
                <strong> {status } </strong>
            </p>

            <button onClick={onStart}
            style={{
                width: "80px",
                backgroundColor: "green",
                color: "white",
                marginRight: "10px"
            }}
            >
                Ativar
            </button>

            <button onClick={onStop}
            style={{
                width: "80px",
                backgroundColor: "red",
                color: "white"
            }}
            >
                Parar
            </button>

            {alarm && (
                <div style={{ marginTop: 20, color: "red" }}>
                <h3>⚠️ Alarme: Temperatura Alta!</h3>
                <button onClick={onAlarmReset}>Resetar Alarme</button>
                </div>
            )}
        </div>
    </div>
  )
}
