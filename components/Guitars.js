import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Guitars.module.css"

const Guitars = ({guitar}) => {

    const {description, name, url, price, image} = guitar

    return (
        <div className={styles.guitar}>
            <Image layout="responsive" width={180} height={350} src={image.url} alt={`Imagen Guitarra ${name}`}/>
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>${price}</p> 
                <Link href={`/guitars/${url}`}>
                    <a className={styles.link}>Ver Producto</a>
                </Link> 
            </div>
        </div>
    )
}

export default Guitars