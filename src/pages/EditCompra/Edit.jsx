import style from './Edit.module.css'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Loader from '../../components/Loader'
import NewCompra from '../../components/NewCompra'
import {Link} from 'react-router-dom'
import {BsArrowLeftCircle} from 'react-icons/bs'

export default function Edit(){
    const api = "https://apirest-shirt-store.vercel.app"

    const {id} = useParams()
    const [Item,setItem ] = useState([])
    const [showItemForm, setShowItemForm] = useState(false)
    const [removeloader,setremoveloader] = useState(false)

    useEffect(() =>{
        setTimeout(() => {
            fetch( api + `/Carrinho/${id}`,{
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setItem(data)
            setremoveloader(true)
        })
        .catch((err) => console.log(err))

        },3000)
    },[id])

    function toggleItem(){
        setShowItemForm(!showItemForm)
    }

    function editItem(Item){

        fetch(api + `/Carrinho/${Item.id}`,{
            method:'PATCH',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(Item)
        })
        .then(resp => resp.json())
        .then((data) =>{
            setItem(data)
            setShowItemForm(false)

        })
        .catch((err) => console.log(err))
    }

    return (
        <>{
            Item ? (
                
            <div className={style.container}>
   
                <div className={style.formdados}>
                <Link to={'/Carrinho'}><BsArrowLeftCircle className={style.buttonreturn}/></Link>
                    <div className={style.loader}>
                        {!removeloader && <Loader/>} 
                    </div>
                
                    {!showItemForm ? (
                    <div className={style.dados}>
                    
                        <h2>Edição da Compra</h2>

                        <h2>{Item.nomeCamisa?.id}</h2>
                        <h3>Nome Personalizado</h3>
                        <p>{Item.name ? Item.name : 'Sem nome personalizado'}</p> 
                        <h3>Tamanho</h3>
                         <p>{Item?.selects?.name}</p>
                        <h3>Forma de pagamento</h3>
                         <p>{Item?.pagamentoForma?.form}</p>
                         
                         <button className={style.button} onClick={toggleItem}>
                        {!showItemForm ? 'Editar' : 'Fechar'}
                        </button>
                    </div>

                   ) 
                    : (
                        <>
                        <div className={style.editdados}>
                            <h2>Edição da Compra</h2>
                            <h3>{Item.nomeCamisa?.id}</h3>
                            
                            <NewCompra
                            handleSubmit={editItem} 
                            itemData={Item}
                            />
                            <button className={style.button} onClick={toggleItem}>
                            {!showItemForm ? 'Editar' : 'Fechar'}
                            </button>
                        </div>

                        
                        </>
                    )
                    }

                </div>
            </div>
            ) :
            (
                <Loader/>
            )
        }
        </>
    )
}