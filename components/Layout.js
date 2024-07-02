import Navbar from "./Navbar"
import Footerbar from "./Footerbar"
export default function Layout({children}){
    return(
        <div>
            <Navbar/>
                {children}
            <Footerbar/>
        </div>
    )
}