import style from './ItemsCard.module.css'
import {BsPencil,BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.all'

export default function ItemsCard({camisaNome,camisaImagem,forma,tamanho,id,name,handleremove}){

    const remove = (e) =>{
        e.preventDefault()
        handleremove(id)

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Item Excluído'
          })
    }
    // className={`${style[forma.toLowerCase()]}`}

    return(
        <div className={style.container}>
            <h3>{camisaNome}</h3>
            <img src={camisaImagem} alt="" />
            <h4>Forma de Pagamento</h4>
            
            <p className={style.category_text}>
            <span></span> 
                {forma}
            </p>

            <h4>nome personalizado</h4> 
            
            <p>{name}</p>
            
            <h4>Tamanho</h4>
            
            <p>{tamanho}</p>
            
            <div className={style.buttons}>
                <Link  to={`/Edit/${id}`}>
                    <button className={style.editbtn}>
                        <BsPencil/>Editar
                    </button>
                </Link>

                <button onClick={remove} className={style.excluirbtn}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
            
        </div>
    )
}