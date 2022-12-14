import { useEffect, useState } from 'react'
import style from './Message.module.css'
export default function Message({type,msg}){

    const [visible,setVisible] = useState(false)

    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)
        const timer = setTimeout(()=>{
            setVisible(false)
        },10000)

        return ()=> clearTimeout(timer)

    },[msg])

    return(
    <>{visible &&
        (
        <div className={`${style.message} ${style[type]}`}>{msg}</div>
        )
        }
    </>
    )
}