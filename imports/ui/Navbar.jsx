import React,{useState} from "react";

export const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggleNav = () =>{
        setIsOpen(!isOpen)
    }
  return (
     <header className="w-full bg-black/90 h-[70px] flex items-center px-8 text-zinc-100">
        <nav className="flex items-center justify-between w-full">
            <div className="text-xl font-bold">LOGO</div>
            <ul className="flex hidden sm:flex">
                <li className="pc-links">One</li>
                <li className="pc-links">Two</li>
                <li className="pc-links">Three</li>
            </ul>
            <ul className="flex hidden sm:flex">
                <li className="pc-links-right">LOGIN</li>
                <li className="pc-links-right">SIGNUP</li>
            </ul>
        </nav>

        <div className="relative w-[24px] sm:hidden leading-[px]" onClick={toggleNav}>
            <div className={`absolute w-full h-[2px] bg-red-100 -top-2 ${isOpen? 'rotate-45 top-[1px]' : ''} ease-in duration-150`}></div>
            <div className={`absolute w-full h-[2px] bg-red-100 ${isOpen? 'transform translate-x-[400%]' : ''} ease-in duration-150`}></div>
            <div className={`absolute w-full h-[2px] bg-red-100 top-2 ${isOpen? 'rotate-[-45deg] top-[-0px]' : ''} ease-in duration-150`}></div>
        </div>

    </header>
  )
};
