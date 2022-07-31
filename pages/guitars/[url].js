import Image from "next/image" 
import Layout from "../../components/Layout"
import styles from "../../styles/Guitars.module.css" 

const Product = ({guitar}) => { 
    
    const {description, name, url, price, image} = guitar[0]  

    return (
        <Layout page={name}> 
            <div className={styles.guitar}>
                <Image priority='true'  layout="responsive" width={180} height={350} src={image.url} alt={`Imagen Guitarra ${name}`}/>
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                    <form>
                        <label>Cantidad:</label>    
                    </form>  
                </div>
            </div>
        </Layout>
    )
} 

export async function getServerSideProps({query: {url}}) {
    const urlGuitar = `${process.env.API_URL}/guitars?url=${url}`
    const response = await fetch(urlGuitar)
    const guitar = await response.json()

    return{
        props:{
            guitar
        }
    }
}

export default Product