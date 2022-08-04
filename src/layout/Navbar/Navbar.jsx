import {AiOutlineSearch,AiOutlineBell,AiOutlineShoppingCart,AiOutlineHome } from 'react-icons/ai'
import style from './Style.module.css'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'

function Navbar(){
    const [search, setSearch]  = useState("")
    const [camisa,setCamisa] = useState([])
    const [camisaPolo,setCamisaPolo] = useState([])
    const [cortaVento,setCortaVento] = useState([])

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
            })
            .catch((err) => console.log(err))
        },200)
    },[])

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
            })
            .catch((err) => console.log(err))
        },200)
    },[])  

        function navSlide(){
            const nav = document.getElementById('List')
            const burguerBar = document.getElementById('burgerBar')

                nav.classList.toggle(style.List_active)
                burguerBar.classList.toggle(style.toggle)
        }
        function searchbarOut(){
            var template_items = document.getElementById('template_items')
                template_items.classList.add(style.template_items_over)
                template_items.classList.toggle(style.template_items)
        }
        function searchbarOver(){
            var template_items = document.getElementById('template_items')
                template_items.classList.remove(style.template_items_over)
                template_items.classList.add(style.template_items)
        }

        function navbarOver(){
            const nav = document.getElementById('List')
            const burguerBar = document.getElementById('burgerBar')

            nav.classList.toggle(style.List_active)
            burguerBar.classList.toggle(style.toggle)
        }
       

    return(
        <header className={style.navbar}>
            
           <Link to="/"><h1>ShirtShop</h1></Link>

           <div className={style.searchbox}>
                   <AiOutlineSearch className={style.searchIcon}/>
                    <input 
                     onClick={searchbarOver}
                     type="text"
                     placeholder='Digite algo...'
                     className={style.searchtxt} 
                     onChange={(event)=>{
                        setSearch(event.target.value)
                     }}
                     /> 
            </div>
                    <div id="template_items" onClick={searchbarOut} className={style.template_items}>
                    
                        {cortaVento.filter((cortaVent) =>{
                            if(search ==""){
                                return;
                            }
                            else if(cortaVent.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                                return cortaVent;
                            }
                        })
                        .map((cortaVent) => {
                            return(
                                <div className={style.searchContainer}>
                                <div className={style.items_search} key={cortaVent.id}>
                                    <Link to={`/Compra/${cortaVent.id}`}>
                                    <img src={cortaVent.imagem} alt="" />
                                    <p>{cortaVent.nome}</p>
                                    </Link>
                                </div>
                                </div>
                            )
                        }
                        )}
                        {camisa.filter((camis) => {
                            if(search == ""){
                                return;
                            }
                            else if(camis.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                                return camis;
                            }
                        }).map((camis) => {
                            return(
                                <div className={style.searchItems}>
                                <div className={style.items_search} key={camis.id}>
                                    <Link to={`/Compra/${camis.id}`}>
                                    <img src={camis.imagem} alt="" />
                                    <p>{camis.nome}</p>
                                    </Link>
                                </div>
                                </div>
                            )
                        })
                        }

                        {camisaPolo.filter((camisaPol) => {
                            if(search == ""){
                                return;
                            }
                            else if(camisaPol.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                                return camisaPol;
                            }
                        }).map((camisaPol) => {
                            return(
                                <div className={style.searchItems}>
                                <div className={style.items_search} key={camisaPol.id}>
                                    <Link to={`/Compra/${camisaPol.id}`}>
                                    <img src={camisaPol.imagem} alt="" />
                                    <p>{camisaPol.nome}</p>
                                    </Link>
                                </div>
                                </div>
                            )
                        })
                        }
                    </div>

            <div onClick={navSlide} id='burgerBar' className={style.mobile_menu}>
                <div className={style.line1}></div>
                <div className={style.line2}></div>
                <div className={style.line3}></div>
            </div>

            <ul id='List' className={style.List}>

                <div className={style.navItems}>
                    <li onClick={navbarOver}>
                        <Link to="/"><AiOutlineHome className={style.icon}/></Link>
                    </li>
                    <li onClick={navbarOver}>
                        <Link to='/Notification'> <AiOutlineBell className={style.icon}/></Link>
                    </li>
                    <li onClick={navbarOver}>
                        <Link to='/Carrinho'> <AiOutlineShoppingCart  className={style.icon}/> </Link>
                    </li> 
                </div>
                
            </ul>
        </header>
    )
}
export default Navbar
