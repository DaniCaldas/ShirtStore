import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

import  {IoLogoWhatsapp} from 'react-icons/io'

import style from './style.module.css'

function Footer(){
    return(
        <footer className={style.footer}>
            
            <ul className={style.social_list}>
                <li><h4>Made by Daniel</h4></li>
                <li><a href="https://www.linkedin.com/in/daniel-caldas-95654b213/">
                    <AiFillLinkedin className={style.icon}/>
                </a></li>
                <li><IoLogoWhatsapp  className={style.icon}/></li>
                <li><a href="https://github.com/DaniCaldas">
                    <AiFillGithub  className={style.icon}/>
                </a></li>
            </ul>
        </footer>
    )
}
export default Footer