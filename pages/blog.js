import Layout from "../components/Layout";
import ListBlog from "../components/ListBlog";

const Blog = ({entrys}) => {
  
  return (
    <Layout page='Blog'>
      <main className="container">
        <h2 className="heading">Blog</h2>
        <ListBlog entrys={entrys}/> 
      </main>
    </Layout>
  )
}

export async function getServerSideProps(){
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
  const response = await fetch(url)
  const entrys = await response.json() 
  return {
    props: {
      entrys
    }
  }
}
export default Blog