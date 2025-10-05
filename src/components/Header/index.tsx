'use client'
import { appTitle, navLinks } from "@/data/data"
import { HeaderProps, NavLink } from "@/types/types"


const Header = ({currentPage, setCurrentPage}: HeaderProps) => {
    return (
        <header className="flex justify-between items-baseline p-4 bg-[whitesmoke] text-black sm:px-20 lg:max-w-[1000px] lg:mx-auto">
            <div>
            <h1 className="text-2xl md:text-2xl">{appTitle.title}</h1>
            </div>
            <nav className="space-x-4">
                {navLinks.map((link: NavLink) => (
                    <button key={link.page} onClick={() => setCurrentPage(link.page)}  className={`
                            transition-colors duration-200
                            hover:font-semibold
                            cursor-pointer 
                            ${currentPage === link.page ? 'font-semibold' : ''}
                        `}>
                        {link.name}
                    </button>
                ))}
            </nav>
        </header>
    )
}

export default Header