import { useRef, useState } from "react"
import Image from "next/image"
import Layout from "../../components/Layout"
import ArticleAdded from "../../components/ArticleAdded"
import styles from "../../styles/Guitars.module.css"


const Product = ({guitar, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(0)
    const [added, setAdded] = useState(false)
    const {description, name, url, price, image, id} = guitar[0]
 

    const handleSubmit = e => {
        e.preventDefault()
        if (cantidad < 1) {
            alert('Cantidad no valida')
            return
        }
        //Agregarlo al Carrito
        const guitarSelected = {
            id,
            image: image.url,
            name,
            price,
            cantidad
        }

        agregarCarrito(guitarSelected)
        setCantidad(0)
        setAdded(true)
        if (added === true){ 
            setTimeout(() => {
                setAdded(false)
            }, 5000);
        }
    }

    return (
        <Layout page={name}>
            <div className={styles.guitar}>
                <Image priority='true'  layout="responsive" width={180} height={350} src={image.url} alt={`Imagen Guitarra ${name}`}/>
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label>Cantidad:</label>
                        <select value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))}>
                            <option value='0'>-- Seleccione --</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                        </select>
                        <input type='submit' value='Agregar al Carrito'/>
                    </form> 
                        <ArticleAdded added={added} setAdded={setAdded}/> 
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({query: {url}}) {
    const urlGuitar = `${process.env.API_URL}/guitars?url=${url}`
    const response = await fetch(urlGuitar)
    const guitar = await response.json()

    return{
        props:{
            guitar
        }
    }
}

export default Product