import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css' 
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
 

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]) 
  const [invalid, setInvalid] = useState(false)
 
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

  const handleRes = () => {
      setCarrito(articulos =>
          articulos.map(carrito => { 
              if(carrito.cantidad > 1){
                  return {...carrito, cantidad: (carrito.cantidad - 1)}
              } 
              setTimeout(() => setInvalid(true)  , 0)       
              return carrito 
          })
      ) 
      
  }

  
  if(invalid === true){setTimeout(() =>  setInvalid(false) , 2000) }


  const handleSum = () => {
      setCarrito(articulos =>
          articulos.map(carrito => { 
              return {...carrito, cantidad: (carrito.cantidad + 1)}
          })
      )
  }

  const deleteProduct = id => {
    const carritoUpdated = carrito.filter( article => article.id !== id)
    setCarrito(carritoUpdated)
  }

  return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito} setCarrito={setCarrito} handleRes={handleRes} handleSum={handleSum} deleteProduct={deleteProduct} invalid={invalid}  />
}

export default MyApp
