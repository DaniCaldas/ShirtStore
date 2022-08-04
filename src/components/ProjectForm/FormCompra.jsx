import NewCompra from '../NewCompra'
import { useNavigate } from 'react-router-dom'

export default function FormCompra({className,idcamisa}){

    const navigate = useNavigate()

    function createPost(Carrinho){
        
        fetch('https://apirestshirtstore.herokuapp.com/Carrinho',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify(Carrinho)
        })
        .then((resp) => resp.json())
        .then((data)=>{
            navigate('/Notification',{state:{message:'Item adicionado ao carrinho com sucesso!, clique no icone do Carrinho para visualizar suas compras.'}})
        })
        .catch((err) => console.log(err))
     }

    return(
        <div  className={className}>
            <NewCompra idcamisa={idcamisa} handleSubmit={createPost}/>
        </div>
    )
}