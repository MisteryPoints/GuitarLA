import { useState } from "react"
import Layout from "../components/Layout"
import Image from "next/image"
import styles from "../styles/carrito.module.css" 

const Carrito = ({ carrito }) => {
    const [productos, setProductos] = useState([])
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
                                        Cantidad: {product.cantidad}
                                    </p>
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