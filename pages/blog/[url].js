import Layout from "../../components/Layout"
import Image from "next/image"
import { dateFormat } from "../../helpers"
import styles from '../../styles/Entry.module.css'

const EntryBlog = ({entrys}) => { 
    
    const { title, image, published_at, content, url } = entrys[0] 

    return (
        <Layout page={title}> 
            <main className='container'>
                <h1 className='heading'>{title}</h1>
                <article className={styles.entry}>
                    <Image priority='true' layout='responsive' width={800} height={600} src={image.url} alt={`imagen entrada ${title}`}></Image>
                    <div className={styles.content}>
                        <p className={styles.date}>{dateFormat(published_at)}</p>
                        <p className={styles.text}>{content}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}


export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url)
    const entrys = await response.json()
    const paths = entrys.map( entry => ({
        params:{url: entry.url}
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const response = await fetch(urlBlog)
    const entrys = await response.json()

    return{
        props:{
            entrys
        }
    }
}

// export async function getServerSideProps({query: {url}}) {
//     const url = `${process.env.API_URL}/blogs/${url}`
//     const response = await fetch(url)
//     const entrys = await response.json()

//     return{
//         props:{
//             entrys
//         }
//     }
// }

export default EntryBlog