import { BiSearchAlt2 } from "react-icons/bi";
import { Logo } from "./Logo";

export function Navbar(){
    return(
        <nav className="flex items-center justify-between px-10 py-4">
            <Logo/>
            <form className="flex gap-2">
                <input type="text" placeholder="Busque um filme" className="p-1 rounded-md" />
                <button type="submit">
                    <BiSearchAlt2 size={24} className="text-white" />
                </button>
            </form>
        </nav>
    )
}