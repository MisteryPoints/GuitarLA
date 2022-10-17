import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

const ArticleBought = ({bought, setBought}) => { 
   
    const handleSubmit = e => { 
        setBought(false)
    }
    if (bought === true){ 
        setTimeout(() => {
            setBought(false)
        }, 5000);
    }

  return (
    <div className={`move move2 ${bought && 'active'}`}> 
        <div className='bought'>
            <FontAwesomeIcon icon={faCheck} className='check'/>
            <div className='alert'>
                <span className='text text-1'>Satisfactorio</span>
                <span className='text text-2'>Producto Comprado Correctamente</span>
            </div>
        </div> 
        <FontAwesomeIcon icon={faXmark} className='close' onClick={handleSubmit} />
        <div className={`progress progress2 ${bought && 'active'}`}></div>
    </div>
  )
}

export default ArticleBought