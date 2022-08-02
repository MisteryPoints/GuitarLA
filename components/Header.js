import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'   
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = ({guitar}) => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.bar}>
          <Link href='/' >
            <a>
              <Image className={styles.logo} width={400} height={100} src='/img/logo.svg' alt='Imagen Logo'/>
            </a>
          </Link>
          <nav className={styles.navegation}>
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/tienda'>Tienda</Link>
            <Link href='/carrito'>
              <a>
                <FontAwesomeIcon icon={faCartShopping}size='xl'/>
              </a>
            </Link>
          </nav>
        </div>
        {guitar && (
          <div className={styles.model}>
            <h2>{guitar.name}</h2>
            <p>{guitar.description}</p>
            <p className={styles.price}>${guitar.price}</p>
            <Link href={`/guitars/${guitar.url}`} >
              <a className={styles.link}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === '/' && (
        <div className={`guitar ${styles.guitar}`}> 
          <Image   layout='fixed' height={600} /*width={400} remove in big screen*/width={350} src='/img/header_guitarra.png' alt='imagen header guitarra'/> 
          <style jsx>{`
            .header{ 
              height: 600px;
            }
          `}</style>
        </div>
       
      )}   
    </header>
  )
}

export default Header