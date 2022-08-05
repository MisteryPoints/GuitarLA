import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css' 
import Cookie from 'js-cookie' 
import { parseCookies } from '../helpers/parseCookies'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
 

function MyApp({ Component, pageProps, initialCarritoValue }) { 
  const [carrito, setCarrito] = useState( () => 
    (initialCarritoValue === undefined) ? [] :
    JSON.parse(initialCarritoValue )
  ) 
  const [invalid, setInvalid] = useState(false)
 
  useEffect(() => { 
    Cookie.set('carrito', JSON.stringify(carrito))
  }, [carrito]) 

  const agregarCarrito = producto => {
    if (carrito.some( articulo => articulo._id === producto._id)) {
      const carritoUpdated = carrito.map ( articulo => {
        if ( articulo._id === producto._id ) {
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
    const carritoUpdated = carrito.filter( article => article._id !== id)
    setCarrito(carritoUpdated)
  }

  return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito} setCarrito={setCarrito} handleRes={handleRes} handleSum={handleSum} deleteProduct={deleteProduct} invalid={invalid}  />
}

MyApp.getInitialProps = async (appContext) => {
  const req = appContext.ctx.req
  const cookies = parseCookies(req)  
  return {
    initialCarritoValue: cookies.carrito
  }
}

export default MyApp
