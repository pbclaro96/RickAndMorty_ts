import Styles from '../styles/Nav.module.css'
import Image from 'next/image'
import { Contexto } from '../context/Context'
import { useContext } from 'react'
import Link from 'next/link'
const Nav = () => {

    const { resetPage } = useContext(Contexto)

    const inicio = () =>{
        const pages=0
        resetPage(pages)
    }

    return (
        <div className={Styles.contenedor}>
            <Image className={Styles.Image} width={36} height={36} alt="icono" src='/morty.png'/>
            <Link className={Styles.Link} href="/" onClick={inicio}>INICIO</Link>
            <Image className={Styles.Image} width={36} height={36} alt="icono" src='/rick.png'/>
            <Link className={Styles.Link} href="https://rickandmortyapi.com/"  target="_blank" >API</Link>
        </div>
    )
}


export default Nav