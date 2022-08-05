import Entry from "../components/Entry";
import styles from '../styles/Blog.module.css'

const ListBlog = ({entrys}) => {
  
    return ( 
        <div className={styles.blog}>
            {entrys.map(entry => (
                <Entry
                key={entry._id}
                entry={entry}
                />
            ))}
        </div>
    )
  }

  export default ListBlog