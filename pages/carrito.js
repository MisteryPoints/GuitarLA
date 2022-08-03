import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Image from "next/image"
import InvalidC from "../components/InvalidC"
import styles from "../styles/carrito.module.css" 

const Carrito = ({ carrito, handleSum, handleRes, deleteProduct, invalid }) => {   

    const [total, setTotal] = useState(0)

    useEffect(() => { 
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.price), 0)

        setTotal(calculoTotal)
     }, [carrito])
    

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
                                    <InvalidC invalid={invalid}/> 
                                    <p className={styles.name}>{product.name}</p>
                                    <p className={styles.cantidad}>
                                        Cantidad: 
                                    </p>
                                    <div>
                                        <p className={styles.alt} onClick={() => handleRes()}>-</p>
                                        <p className={styles.cantidad}>{product.cantidad}</p>
                                        <p className={styles.alt} onClick={() => handleSum()}>+</p>
                                    </div>
                                    <p className={styles.price}>$<span>{product.price}</span></p>
                                    <p className={styles.subtotal}>
                                        Subtotal: $<span>{product.price * product.cantidad}</span>
                                    </p>
                                </div>
                                <button type="button" className={styles.delete} onClick={() => deleteProduct(product.id)}>x</button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.resumen}>
                    {total > 0 ? (
                        <>
                            <h3>Resumen del Pedido</h3>
                            <p>Total a Pagar: ${total}</p>
                        </>
                    ): (
                        <h3>No hay Productos</h3>
                    )}
                </div> 
            </main>
        </Layout>
    )
}

export default Carrito