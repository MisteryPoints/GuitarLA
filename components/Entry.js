import Link from 'next/link'
import Image from 'next/image'
import { dateFormat } from '../helpers'
import dynamic from 'next/dynamic'
import styles from '../styles/Entry.module.css'

const Entry = ({entry}) => {
    const { title, resume, image, published_at, id, content, url} = entry 
    
    return (
        <article>
            <Image layout='responsive' width={800} height={600} src={image.url} alt={`imagen blog ${title}`}/>

            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.date}>{dateFormat(published_at)}</p>
                <p className={styles.resume}>{resume}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.link}>
                        Ver Entrada
                    </a>
                </Link>
            </div>  
        </article>
    )
}

export default Entry