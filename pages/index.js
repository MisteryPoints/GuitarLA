import Link from 'next/link'
import Layout from "../components/Layout";
import List from "../components/List"
import Curso from '../components/Curso';

export default function Home({guitars, cursos}) {
  return (
    <Layout page="Inicio">
      <main className='container'>
        <h1>Nuestra colección</h1>
        <List   guitars={guitars}/>
      </main>
      <Curso cursos={cursos}/>
    </Layout>
  )
}


export async function getServerSideProps() {  
  const urlGuitars = `${process.env.API_URL}/guitars?_sort=price:asc`
  const urlCursos = `${process.env.API_URL}/cursos`
  //Para consultar ambos a la vez en paralelo.
  const [resGuitars, resCursos] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCursos)
  ])
  const [guitars, cursos] = await Promise.all([
    resGuitars.json(),
    resCursos.json()
  ])
  return{
    props:{
      guitars,
      cursos
    }
  }

}