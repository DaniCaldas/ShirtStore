import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../../components/Loader'
import ItemsCard from '../../components/ProjectForm/ItemsCard'
import style from './style.module.css'


function Carrinho(){
    const api = "https://apirest-shirt-store.vercel.app"

    const [carrinho,setCarrinho] = useState([])
    const [removeloader,setRemoveLoader] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(api + '/Carrinho',{
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
        fetch(api + `/Carrinho/${id}`,{
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
    <h2>Seu Carrinho</h2> 
    
    {!removeloader && <Loader/>}
        { carrinho.length  > 0 ?(
        <div className={style.Items}>
            <div>
               {carrinho.length > 0 &&
               carrinho.map((carrinh) =>
                <ItemsCard 
                key={carrinh.id}
                id={carrinh.id}
                camisaImagem={carrinh?.nomeCamisa?.imageProduto}
                camisaNome={carrinh?.nomeCamisa?.id}
                forma={carrinh?.pagamentoForma?.form}
                tamanho={carrinh?.selects?.name}
                name={carrinh.name ? carrinh.name : 'Sem nome personalizado!'}
                handleremove={removeItem}
                />
               )}    
               
            </div>
        </div>
        ): <p>Seu carrinho está vazio</p>
        }
        
    </div>
    ) 
}
export default Carrinho