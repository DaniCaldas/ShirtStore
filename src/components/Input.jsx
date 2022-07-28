import style from './Input.module.css'
export default function Input({handleOnChange,value,name}){


    return(
        <div className={style.inputGroup}>
            <input 
            value={value}
            type="text"
            name={name}
            className={style.input}
            onChange={handleOnChange}
             />
        </div>
    )
}