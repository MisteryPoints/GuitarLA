import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

const ArticleAdded = ({added, setAdded}) => { 
   
    const handleSubmit = e => { 
        setAdded(false)
    }
    if (added === true){ 
        setTimeout(() => {
            setAdded(false)
        }, 5000);
    }

  return (
    <div className={`move ${added && 'active'}`}> 
        <div className='added'>
            <FontAwesomeIcon icon={faCheck} className='check'/>
            <div className='alert'>
                <span className='text text-1'>Satisfactorio</span>
                <span className='text text-2'>Producto Agregado al Carrito</span>
            </div>
        </div> 
        <FontAwesomeIcon icon={faXmark} className='close' onClick={handleSubmit} />
        <div className={`progress ${added && 'active'}`}></div>
    </div>
  )
}

export default ArticleAdded