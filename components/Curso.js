import styles from '../styles/Cursos.module.css'

const Curso = ({cursos}) => {
    const {title, content, image} = cursos

    return (
        <section>
            <div className={`container ${styles.grid}`}> 
                <div className={styles.content} >
                    <h2 className='heading'>{title}</h2>
                    <p>{content}</p>

                    <a href=''>Más Información</a>
                </div>
            </div>

            <style jsx>{`
                section{
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0/ .65), rgb( 0 0 0/ .7)), url(${image.url});
                    background-size: cover;
                    background-position: 50%;
                }
                
            `}</style>
        </section>
    )
}

export default Curso