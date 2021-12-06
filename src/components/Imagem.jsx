import React from 'react'
import {Image} from 'react-bootstrap'

const Imagem = () => {
    return (
        <div>
            <Image src="./imagens/perfil.png" fluid style={{position: "static", width: "100vw", height:"90vh", backgroundSize: "cover", border:"none" , backgroundColor:"black" , overflow: "hidden"}}/>                  
        </div>
    )
}

export default Imagem
