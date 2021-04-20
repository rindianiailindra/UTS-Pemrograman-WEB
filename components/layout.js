import Header from './header'
import Footer from './footer'

export default function Layout({children, layoutProps}){
    return (
        <>
        <Header menu = {layoutProps}/>
        <main className="container">
            {children}
        </main>
        <Footer />
        </>
    )
}