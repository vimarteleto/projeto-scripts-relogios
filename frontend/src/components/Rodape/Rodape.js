import React from "react";

const divStyle = {
  height: '5vh',
  border: '1px ridge black',
  marginTop: '0.5vh',
  backgroundColor: 'rgba(151,148,148,0.5)',
  textAlign: 'center',
  paddingTop: '1.5vh',
  color: 'white'
}
export default function Rodape() {
  return (
    <>
      <div
        style={divStyle}>
        <h6>&copy; 2021 Desenvolvido por João Paulo Carrijo - 5º ADS</h6>
      </div>
    </>
  )
}