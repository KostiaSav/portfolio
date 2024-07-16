import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout