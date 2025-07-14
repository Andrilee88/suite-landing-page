import logo from "../assets/logo.svg"

export default function Header() {
    return (
        <header className="flex justify-between items-center mx-4 mt-6 md:mx-8 lg:mx-[165px]">
            <img 
                className="w-[78.41px] h-[24.8px]" 
                src={logo} 
                alt="Logo" 
                />
            <button 
            className="border pt-4 pb-3 px-5 rounded-md tp-6 text-neutral-9900 hover:bg-neutral-9900 hover:text-neutral-0 transition-colors duration-300 delay-150">
                Request Beta Access
                </button>
        </header>
    )
}