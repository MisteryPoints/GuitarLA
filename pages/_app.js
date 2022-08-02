import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css' 
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
 

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

  const updateCantidad = producto => {
    const carritoUpdated = carrito.map ( articulo => {
      if ( articulo.id === producto.id ) {
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })
    setCarrito(carritoUpdated)
  }

  return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito}/>
}

export default MyApp
