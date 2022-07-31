import Layout from "../components/Layout";
import List from '../components/List';

const Tienda = ({guitars, result}) => {
  return (
    <Layout page='Tienda Virtual'>
      <main className='container'>
        <h1 className='heading'>Nuestra colección</h1>
        <List guitars={guitars}/>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitars?_sort=price:asc`
  const response = await fetch(url)
  const guitars = await response.json()
  return{
    props:{
      guitars : guitars
    }
  }

}

export default Tienda