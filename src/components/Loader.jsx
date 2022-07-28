import style from './Loader.module.css'

export default function Loader(){
    return(
        <div className={style.spinner}>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
        </div>
    )
}