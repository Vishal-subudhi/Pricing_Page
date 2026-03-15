function Navbar(){
    return (
        <nav className= "flex item center justify-between px-8 py-4 bg-white shadow-sm">
            <span className="text-xl font-bold text-purple-600">Flow AI</span>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">
                Get Started
            </button>
        </nav>
    )
}

export default Navbar;