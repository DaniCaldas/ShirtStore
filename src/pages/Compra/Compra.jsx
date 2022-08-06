import { useParams } from 'react-router-dom'
import FormCompra from '../../components/ProjectForm/FormCompra'
import style from './Style.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Compra(){
   const {id} = useParams()

   const [camisa,setCamisa] = useState([])
   const [camisaPolo,setCamisaPolo] = useState([])
   const [cortaVento,setCortaVento] = useState([])

   useEffect(() => {
    fetch(`https://apirestshirtstore.herokuapp.com/Camisas/${id}`,{
        method:"GET",
        headers:{
            'Content-type':'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCamisa(data)
    })
    .catch((err) => console.log(err))
   },[id])

   useEffect(() => {
    fetch(`https://apirestshirtstore.herokuapp.com/Camisas_Polo/${id}`,{
        method:"GET",
        headers:{
            'Content-type':'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCamisaPolo(data)
    })
    .catch((err) => console.log(err))
   },[id])

   useEffect(() => {
    fetch(`https://apirestshirtstore.herokuapp.com/Corta_Vento/${id}`,{
        method:"GET",
        headers:{
            'Content-type':'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCortaVento(data)
    })
    .catch((err) => console.log(err))
   },[id])

    return(
        <div className={style.container}>
            <div className={style.info_Compra}>
                <img src={camisa.imagem || camisaPolo.imagem || cortaVento.imagem} alt="" /> 
                <h2>{id}</h2>
            </div>
            
            <FormCompra
            className={style.FormCompra}
            />

            <div className={style.descricao}>
                <h3>Descrição</h3>
                <small>
                 {id} Away 2021/22
                <ul>
                    <li>Gênero: Masculino</li>
                    <li>Material: 100% Poliéster</li>
                    <li>Tecnologia: Dri-fit</li>
                    <li>Time/seleção: {id}</li>
                </ul>
                    
                    Dimensões Aproximadas ( Altura x Largura ):
                <ul>
                    <li>P: 68 x 50 cm</li>
                    <li> M: 71 x 52 cm</li>
                    <li> G: 74 x 54 cm</li>
                    <li>GG: 77 x 56 cm</li>
                    <li>EGG: 80 x 58 cm</li>
                </ul>
                    
                ⚠️  As medidas acima são  dimensões aproximadas, apenas para servir de parâmetro para nossos clientes. As medidas podem variar por serem produzidas manualmente.
                </small>
           </div>
        </div>
    )
}