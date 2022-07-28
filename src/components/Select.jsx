import style from './Select.module.css'

export default function Select({options,handleOnChange,value,name}){
    return(
    <div>
        <div>
        <select
        name={name}
        value={value || ''}
        onChange={handleOnChange} 
        className={style.select}>
            <option>Selecione uma opção</option>
            {    
                options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))
            }
            
        </select>
        </div>
    </div>
    )
} 