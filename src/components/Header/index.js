
import Logo from './Logo.js'
import Link from "next/link";


const Header = () => {
    return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
        <Logo />
        <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
         <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
            <button>Button</button>
        </nav>
        <div>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Github</a>
        </div>
        </header>
    )
};



export default Header;

