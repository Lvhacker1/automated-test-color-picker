import Link from "next/link"


const Header = () => {
    return (
        <header>
            <h1></h1>
            <nav>
                <Link href="/"></Link>
                <Link href="/rgb"></Link>
                <Link href="/hex"></Link>
            </nav>
        </header>
    )
}

export default Header