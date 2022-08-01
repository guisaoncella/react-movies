import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export function Navbar(){
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return(
        <nav className="flex items-center justify-between px-5 lg:px-10 py-4">
            <Logo/>
            <form className="flex gap-2" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Busque um filme" className="p-1 rounded-md"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search} />
                <button type="submit">
                    <BiSearchAlt2 size={24} className="text-white" />
                </button>
            </form>
        </nav>
    )
}