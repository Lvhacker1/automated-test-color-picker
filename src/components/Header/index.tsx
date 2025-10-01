'use client'
import { appTitle, navLinks } from "@/data/data"
import { HeaderProps, NavLink } from "@/types/types"


const Header = ({setCurrentPage}: HeaderProps) => {
    return (
        <header>
            <h1>{appTitle.title}</h1>
            <nav>
                {navLinks.map((link: NavLink) => (
                    <button key={link.page} onClick={() => setCurrentPage(link.page)}>
                        {link.name}
                    </button>
                ))}
            </nav>
        </header>
    )
}

export default Header