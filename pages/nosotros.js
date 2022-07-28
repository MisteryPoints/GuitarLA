import Link from 'next/link'
import Image from 'next/image' 
import Layout from '../components/Layout'
import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout page="Nosotros">
         <main className='container'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.content}>
              <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre Nosotros'/>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est dui. Sed feugiat, mauris tempus mattis rhoncus, nisl ipsum malesuada justo, sit amet aliquet justo augue nec lorem. Sed hendrerit imperdiet nulla at pellentesque. Quisque tincidunt augue dui, a dignissim justo sollicitudin sit amet. Morbi nec mollis ex, a pulvinar sapien. Donec ultricies lorem eu magna cursus faucibus.</p>
                <p>Suspendisse vestibulum ex mauris, eu placerat elit convallis quis. Praesent ornare ante vel risus condimentum, sed porta mi posuere. Nunc eu mattis ante. Nunc sodales dui vitae enim vehicula congue. Curabitur convallis imperdiet gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt augue dui, a dignissim justo sollicitudin sit amet. Morbi nec mollis ex, a pulvinar sapien. Donec ultricies lorem eu magna cursus faucibus.</p>
              </div>  
            </div>
         </main>
    </Layout>
  )
}

export default Nosotros