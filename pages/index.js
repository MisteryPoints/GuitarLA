import Layout from "../components/Layout"
import ListGuitar from "../components/ListGuitar"
import Curso from '../components/Curso'
import ListBlog from '../components/ListBlog'

export default function Home({guitars, cursos, entrys}) {
  return (
    <Layout page="Inicio" guitar={guitars[2]}>
      <header></header>
      <main className='container'>
        <h1>Nuestra colección</h1>
        <ListGuitar guitars={guitars}/>
      </main>
      <Curso cursos={cursos}/>
      <section className="container"> 
        <h2 className="heading">Blog</h2> 
        <ListBlog entrys={entrys}/>
      </section>
    </Layout>
  )
}


export async function getServerSideProps() {  
  const urlGuitars = `${process.env.API_URL}/guitars?_sort=price:asc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3`
  //Para consultar ambos a la vez en paralelo.
  const [resGuitars, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCursos),
    fetch(urlBlog),
  ])
  const [guitars, cursos, entrys] = await Promise.all([
    resGuitars.json(),
    resCursos.json(),
    resBlog.json()
  ])
  return{
    props:{
      guitars,
      cursos,
      entrys
    }
  }

}