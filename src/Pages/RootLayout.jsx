import Footer from "../Components/Footer"
import MainNav from "../Components/MainNav"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
      <MainNav/>
      <main>

      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
