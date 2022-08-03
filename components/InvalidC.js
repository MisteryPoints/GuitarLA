
const InvalidC = ({invalid}) => {
  return (
    <div  className={`invalidC ${invalid && 'invalidCactive'}`}> 
        <p className='invalid'>No puedes disminuir a 0</p>
    </div>
  )
}

export default InvalidC