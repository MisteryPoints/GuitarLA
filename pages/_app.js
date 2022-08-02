import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const carritoLS = JSON.parse( localStorage.getItem('carrito') ) ?? []
    setCarrito(carritoLS)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = producto => {
    if (carrito.some( articulo => articulo.id === producto.id)) {
      const carritoUpdated = carrito.map ( articulo => {
        if ( articulo.id === producto.id ) {
          articulo.cantidad = producto.cantidad + articulo.cantidad
        }
        return articulo
      })
      setCarrito(carritoUpdated)
    } else {
      setCarrito([...carrito, producto])
    } 
  }

  return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito} />
}

export default MyApp
