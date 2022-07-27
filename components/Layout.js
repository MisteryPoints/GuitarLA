import Head from 'next/head'
import Header from './Header'
 
 const Layout = ({children, page}) => {
    return (
        <div>
            <Head>
                <title>GuitarLA - {page} | DevPoint</title>
                <meta name="description" content="Sitio Web de ventas de Guitarras" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            {children}
        </div>
    )
}

export default Layout