import style from './style.module.css'
import Loader from '../../components/Loader'
import Container from '../../layout/container/Container'
import { Link } from 'react-router-dom' 
import Portugal from '../../img/Catálogo/Portugal.jpg'
import Argentina from '../../img/Catálogo/Argentina.jpg'
import brasil from '../../img/Catálogo/Brasil.webp'
import { useEffect, useState } from 'react'

function Home() {    

    const [camisa,setCamisa] = useState([])
    const [camisaPolo,setCamisaPolo] = useState([])
    const [cortaVento,setCortaVento] = useState([])
    const [removeloader,setRemoveLoader] = useState(false)

    useEffect(() =>{
        setTimeout(() => {
            fetch("https://apirestshirtstore.herokuapp.com/Camisas",{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((resp) => resp.json())
            .then((data) =>{
                setCamisa(data)
                setRemoveLoader(true)
            })
            .catch((err) => console.log(err))
        },200)
    },[])    

    useEffect(() => {
        setTimeout(() => {
            fetch("https://apirestshirtstore.herokuapp.com/Camisas_polo",{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((resp) => resp.json())
            .then((data) =>{
                setCamisaPolo(data)
                setRemoveLoader(true)
            })
            .catch((err) => console.log(err))
        },200)
    },[])
    
    useEffect(() => {
        setTimeout(() => {
            fetch("https://apirestshirtstore.herokuapp.com/Corta_Vento",{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((resp) => resp.json())
            .then((data) =>{
                setCortaVento(data)
                setRemoveLoader(true)
            })
            .catch((err) => console.log(err))
        },200)
    },[])

    return (
        
        <article className={style.container}>
        <Container>
            <div className={style.catalogo}>
                <h2>Novidades</h2>
                <ul>
                    <li>
                        <img src={Portugal} alt="portugal" />
                    </li>
                    <li>    
                        <img src={brasil} alt="brasil" /> 
                    </li>
                    <li>
                        <img src={Argentina} alt="argentina" /> 
                    </li>
                </ul>
                <h3>Camisas de seleções com <strong>40% de desconto </strong> e frete gratís em todos os items</h3>
            </div>
            <h1>Camisas Populares</h1>
            <div className={style.carrosel}>
            {camisa.length > 0 &&
                camisa.map((camis) =>(
               
                <ul className={style.items}>
                     
                    <div className={style.image}>
                    <Link to={`/Compra/${camis.id}`}>
                        <img  src={camis.imagem} alt=""/> 
                    </Link>

                    <li  className={style.over_image}>
                        <img src={camis.imagem_costas} alt="" />

                        <div className={style.image_costas}>
                            <img src={camis.imagem_costas} alt="" />
                        </div>
                    </li>
                    </div>
                </ul>
                ))
            }
            {!removeloader && <Loader/>}
            </div>
            
            <h1>Camisas Polo</h1>

            <div className={style.carrosel}>
            {camisaPolo.length > 0 &&
                camisaPolo.map((camisaPol) =>(
                <ul className={style.items}>
                    <div className={style.image}>
                    <Link to={`/Compra/${camisaPol.id}`}>
                        <img  src={camisaPol.imagem} alt=""/> 
                    </Link>

                    <li  className={style.over_image}>
                        <img src={camisaPol.imagem_costas} alt="" />

                        <div className={style.image_costas}>
                            <img src={camisaPol.imagem_costas} alt="" />
                        </div>
                    </li>
                    </div>
                </ul>
                ))
            }
            {!removeloader && <Loader/>}
            </div>

            <h1>Corta Vento</h1>
            <div className={style.carrosel}>
            {cortaVento.length > 0 &&
                cortaVento.map((cortaVent) =>(
                <ul className={style.items}>
                    <div className={style.image}>
                    <Link to={`/Compra/${cortaVent.id}`}>
                        <img  src={cortaVent.imagem} alt=""/> 
                    </Link>

                    <li  className={style.over_image}>
                        <img src={cortaVent.imagem_costas} alt="" />

                        <div className={style.image_costas}>
                            <img src={cortaVent.imagem_costas} alt="" />
                        </div>
                    </li>
                    </div>
                </ul>
                ))
            }
            {!removeloader && <Loader/>}
            </div>
        </Container>

        </article>
        
    )
}
export default Home