import { useEffect } from "react";
import Layout from "../components/Layout";
import Entry from "../components/Entry";
import styles from '../styles/Blog.module.css'

const Blog = ({entrys}) => {
  
  return (
    <Layout page='Blog'>
      <main className="container">
        <h2 className="heading">Blog</h2>

        <div className={styles.blog}>
          {entrys.map(entry => (
            <Entry
              key={entry.id}
              entry={entry}
            />
          ))}
        </div>
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