import style from './style.module.css'
import Loader from '../../components/Loader'
import Container from '../../layout/container/Container'
import { Link } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import brasilSlide from '../../img/Catálogo/camisa-do-brasil-2022.png'
import argentinaSlide from '../../img/Catálogo/camisa-da-argentina-2022.png'
import portgualSlide from '../../img/Catálogo/Camisas-de-Portugal-2022-2023-Nike-a-1.png'
import inglaterraSlide from '../../img/Catálogo/camisa-da-inglaterra-2022.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
function Home() {    
    const api = "https://apirest-shirt-store.vercel.app"

    const [camisa,setCamisa] = useState([])
    const [camisaPolo,setCamisaPolo] = useState([])
    const [cortaVento,setCortaVento] = useState([])
    const [removeloader,setRemoveLoader] = useState(false)

    useEffect(() =>{
        setTimeout(() => {
            fetch(api + '/Camisas',{
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
            fetch(api + '/Camisas_polo',{
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
            fetch(api + '/Corta_Vento',{
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
            <Swiper
            className={style.SlideControl}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={true}
            >
                <SwiperSlide className={style.slideItem}>
                    <img src={brasilSlide} alt="" />
                </SwiperSlide>
                <SwiperSlide className={style.slideItem}>
                    <img src={argentinaSlide} alt="" />
                </SwiperSlide>
                <SwiperSlide className={style.slideItem}>
                    <img src={portgualSlide} alt="" />
                </SwiperSlide>
                <SwiperSlide className={style.slideItem}>
                    <img src={inglaterraSlide} alt=""/>
                </SwiperSlide>
            </Swiper>

            <div className={style.catalogo}>
                <h2>Novidades</h2>
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
                        <div className={style.form_desconto}><p>40% OFF</p></div>
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