import Head from 'next/head'
import Header from './Header'
import Footer from './Footer' 
 
 const Layout = ({children, page, guitar}) => {
    return (
        <div>
            <Head>
                <title>GuitarLA - {page} | DevPoint</title>
                <meta name="description" content="Sitio Web de ventas de Guitarras" />
                <link rel="icon" href="/favicon.ico" /> 
            </Head>
            <Header guitar={guitar}/>
            {children}

            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    guitar : null
}

export default Layout