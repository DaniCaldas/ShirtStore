import Message from "../../components/Message"
import {useLocation} from 'react-router-dom'
import style from './style.module.css'

export default function Notification(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return (
        <div className={style.container}>
            <h1>Notificações</h1> 
            <p>aqui você recebe notificações sobre suas compras</p>
            {message && <Message msg={message} type="success"/>}
        </div>
    )
}

