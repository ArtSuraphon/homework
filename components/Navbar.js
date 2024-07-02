import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="/img/logo.png" width={100} height={100} ale="logo"/>
                </Link>
                
            </div>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">about</Link>
            </ul>
        </nav>
    )
}
