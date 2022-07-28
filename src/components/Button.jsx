import style from './Button.module.css'
import {BsCartPlus} from 'react-icons/bs'

export default function Button({msgtext,mensage}){
    return(
    
        <button className={style.button} onClick={mensage}>
           
                <div>
                    <BsCartPlus className={style.icon}/>
                </div>
            
            <span>{msgtext}</span>
        </button>
    
    )
}