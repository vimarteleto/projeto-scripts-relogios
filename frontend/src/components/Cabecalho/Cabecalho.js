import React from "react";

const navStyle = {
  minHeight: '10vh',
  border: '1px ridge rgba(53,54,53,0.5)',
  color: 'white',
  textAlign: 'center',
  backgroundColor: 'rgba(151,148,148,0.5)',
  paddingTop: '2vh'
}

export default function Cabecalho() {

  return (
    <>
      <div
        style={navStyle}>
        <h1> Projeto Scripts </h1>
      </div>
    </>
  )
}