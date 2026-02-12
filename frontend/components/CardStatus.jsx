import React from 'react'

export const CardStatus = ({title, value}) => {
  return (
    <div
    style={{
        border: "1px solid #ccc",
        padding: 16,
        width: 180,
        borderRadius: 8,
        textAlign: "center",
        margin: 18
    }}
    >
        <h3>{title}</h3>
        <strong>{value}</strong>
    </div>
  )
}
