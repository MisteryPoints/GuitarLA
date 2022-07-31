import Layout from "../components/Layout"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect } from "react" 
import styles from '../styles/NotFound.module.css'

const NotFound = () => {

    const router = useRouter()

    useEffect(() => { 
        setTimeout(() => {
            // router.go('/')
            router.push('/')
        }, 5000); 
    }, []) 

  return ( 
    <div className={styles.notFound}>
        <h1 className="heading">  Page Not Found  </h1>
        <Link href="/">Regresar al Inicio</Link>
    </div> 
  )
}

export default NotFound