import React from "react";
import ContainerSuperior from "../ContainerSuperior/ContainerSuperior";
import AreaDados from "../AreaDados/AreaDados";
import Rodape from "../Rodape/Rodape";
import MenuBotoes from "../MenuBotoes/MenuBotoes.js";

const divStyle = {
  height: '100%',
  border: '1px ridge gray',
  backgroundColor: 'darkred'
}
export default function ContainerGeral() {
  return (
    <>
      <div 
      style={divStyle}>
        <ContainerSuperior />
        <MenuBotoes />
        <AreaDados />
        <Rodape />
      </div>
    </>
  )
}