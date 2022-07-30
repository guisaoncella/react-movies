import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Navbar(){
    return(
        <nav className="flex items-center justify-between border border-white">
            <Logo/>
            <form>
                <input type="text" placeholder="Busque um filme" />
                <button type="submit">
                    <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    )
}