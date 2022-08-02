import { useState } from "react"
import Layout from "../components/Layout"
import Image from "next/image"
import styles from "../styles/carrito.module.css" 

const Carrito = ({ carrito, agregarCarrito }) => {
    const [productos, setProductos] = useState([])
    const {id, image, name, price, cantidad} = carrito

    const addCanti = e => {
        const guitarSelected = {
            id,
            image,
            name,
            price,
            cantidad: cantidad+1
        }

        agregarCarrito(guitarSelected)
    }

    const remCanti = e => {
        const guitarSelected = {
            id,
            image,
            name,
            price,
            cantidad: cantidad-1
        }

        agregarCarrito(guitarSelected)
    }

    return (
        <Layout page={'Carrito de compras'}>
            <h1 className="heading">Carrito</h1>
            <main className={`${styles.content} container`}>
                <div className={styles.carrito}>
                    {carrito.length === 0 ? 'Carito Vacío' : (
                        carrito.map( product => (
                            <div key={product.id} className={styles.product}>
                                <div>
                                    <Image layout="responsive" width={250} height={480} src={product.image} alt={product.name}></Image>
                                </div>
                                <div>
                                    <p className={styles.name}>{product.name}</p>
                                    <div>
                                        
                                    </div>
                                    <p className={styles.cantidad}>
                                        Cantidad: 
                                    </p>
                                    <div>
                                        <p className={styles.alt} onClick={addCanti}>-</p>
                                        <p className={styles.cantidad}>{product.cantidad}</p>
                                        <p className={styles.alt} onClick={remCanti}>+</p>
                                    </div>
                                    <p className={styles.price}>$<span>{product.price}</span></p>
                                    <p className={styles.subtotal}>
                                        Subtotal: $<span>{product.price * product.cantidad}</span>
                                    </p>
                                </div>
                                <div>

                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div>

                </div>

            </main>
        </Layout>
    )
}

export default Carrito