import style from './NewCompra.module.css'
import Input from './Input'
import Select from './Select'
import Button from './Button'
import Swal from 'sweetalert2/dist/sweetalert2.all'
import { useState,  useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Pagamento from './Pagamento'

export default function NewCompra({itemData,handleSubmit}){

   function AlertSuccess(){
    Swal.fire({
        icon: 'success',
        title:'Item adicionado ao carrinho!',
        showConfirmButton: false,
        timer: 2000
    })
         
   }

   const {id} = useParams()
   const [plataformas, setPlataformas] = useState([])
   const [select, setSelect] = useState([])
   const [item,setItem] = useState(itemData || {})


  useEffect(() =>{
    fetch("https://apirestshirtstore.herokuapp.com/Select",{
        method:"GET",
        headers:{
            "Content-type": "application/json"
        },
       })
       .then((resp) => resp.json())
       .then((data)=>{
        setSelect(data)
       })
       .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    fetch("https://apirestshirtstore.herokuapp.com/Plataformas",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setPlataformas(data)
    })
    .catch((err) => console.log(err))
  }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(item)
    }

    function handleChange(e){
        setItem({...item, [e.target.name]: e.target.value})
    }

    function handleOption(e){
        setItem({...item,
        selects:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })
    }

    function handleForm(e){
        setItem({...item,
        pagamentoForma:{
            id: e.target.value,
            form: e.target.options[e.target.selectedIndex].text,
        },
        nomeCamisa:{
            id:id
        }
        })
    }



    return(
    <>
    <form onSubmit={submit} >
        <div>
            <div className={style.container}>
                <p>Tamanho</p>

                <Select
                name='select_id'
                value={item.selects ? item.selects.id : ''}
                options={select}
                handleOnChange={handleOption}
                />

                <p>Forma de Pagamento</p>

                <Pagamento
                name='pagamento_id'
                value={item.pagamentoForma ? item.pagamentoForma.id : ''}
                handleOnChange={handleForm}
                forma_pagamento={plataformas}
                />

                <p>Nome personalizado</p>
               
                <Input
                name='name'
                handleOnChange={handleChange}
                value={item.name ? item.name : ''}
                />
                 <br />
                <small>Nome personalizado +R$20</small>
                
            </div>
            <Button msgtext='Comprar' mensage={AlertSuccess} />
        
        </div>
    </form>
    </>
    )
}