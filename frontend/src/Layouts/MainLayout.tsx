import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <>
      <Header />
        <main className="min-h-[90vh]">
            <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default MainLayout
