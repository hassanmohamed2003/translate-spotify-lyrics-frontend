import style from "./NavBar.module.scss"
import Link from "next/link";

export default function NavBar(){
    return(
        <nav className={style.navbar}>
            <Link href="/">Home</Link>
            <Link href="">About</Link>
        </nav>
    )
}