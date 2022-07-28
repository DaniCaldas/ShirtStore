import style from './Pagamento.module.css'

export default function Pagamento({forma_pagamento,handleOnChange,value,name}){
    return(
        <div>
            <select
            name={name}
            value={value || ''}
            onChange={handleOnChange} 
            className={style.select}>
            {
            forma_pagamento.map((forma_pagament) =>(
                <option value={forma_pagament.id} key={forma_pagament.id}>
                    {forma_pagament.forma}
                    </option>
            ))
            }
            </select>
        </div>
    )
}