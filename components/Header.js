import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = () => {
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
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header