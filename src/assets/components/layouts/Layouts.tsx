import { ReactNode } from "react"
import Navigation from "../navigation/Navigation"
import Footer from "../footer/Footer"

interface LayoutProps{
    children: ReactNode
}
const Layouts = ({children}:LayoutProps) => {
    
  return (
    <>
    <div>
        <Navigation/>
        {children}
        <Footer/>
    </div>
    </>
  )
}

export default Layouts
