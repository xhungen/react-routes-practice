import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

function App() {
  

  return (
   <>
   <Navbar />
   <div>
    <Outlet />
   </div>
   </>
  )
}

export default App
