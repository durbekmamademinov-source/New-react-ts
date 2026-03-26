import { Link } from "react-router-dom"


function Header() {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                <Link to={"/"} className="text-2xl font-bold">MySite</Link>

                <nav className="hidden md:flex gap-6">
                    <Link to={"/"} className="hover:text-yellow-400 transition">Home</Link>
                    <a href="#" className="hover:text-yellow-400 transition">About</a>
                    <a href="#" className="hover:text-yellow-400 transition">Services</a>
                    <a href="#" className="hover:text-yellow-400 transition">Contact</a>
                </nav>

                <Link to="/login">
                    <button className="bg-yellow-400 px-4 py-2 rounded-lg">
                        Login
                    </button>
                </Link>

            </div>
        </header>
    )
}

export default Header
