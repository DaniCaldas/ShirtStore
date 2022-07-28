import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../../components/Loader'
import ItemsCard from '../../components/ProjectForm/ItemsCard'
import style from './style.module.css'


function Carrinho(){
    const [carrinho,setCarrinho] = useState([])
    const [removeloader,setRemoveLoader] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://apirestshirtstore.herokuapp.com/Carrinho',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => 
        {
            setCarrinho(data)
            setRemoveLoader(true)
        })
        .catch((err) => console.log(err))
        },2000)
    },[])

    function removeItem(id){
        fetch(`https://apirestshirtstore.herokuapp.com/Carrinho/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCarrinho(carrinho.filter((carrinh) => carrinh.id !== id))
      
        })
        .catch((err)=>console.log(err))
    }

    return(
    <div className={style.container}>
        <h1>Carrinho de Compras</h1>
        <div className={style.Items}>

            <div>
               {carrinho.length &&
               carrinho.map((carrinh) =>
                <ItemsCard 
                key={carrinh.id}
                id={carrinh.id}
                camisaNome={carrinh?.nomeCamisa?.id}
                forma={carrinh?.pagamentoForma?.form}
                tamanho={carrinh?.selects?.name}
                name={carrinh.name ? carrinh.name : 'Sem nome personalizado!'}
                handleremove={removeItem}
                />
               )} 
               {!removeloader && <Loader/>}

               {removeloader && carrinho.length === 0 && (
                <p>Não há compras no carrinho</p>
               )}
            </div>
        </div>
    </div>
    ) 
}
export default Carrinho