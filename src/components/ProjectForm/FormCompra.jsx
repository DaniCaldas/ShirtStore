import NewCompra from '../NewCompra'
import { useNavigate } from 'react-router-dom'

export default function FormCompra({className,image}){
    const api = "https://apirest-shirt-store.vercel.app"

    const navigate = useNavigate()

    function createPost(Carrinho){
        
        fetch(api + '/Carrinho',{
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
            <NewCompra image={image}  handleSubmit={createPost}/>
        </div>
    )
}