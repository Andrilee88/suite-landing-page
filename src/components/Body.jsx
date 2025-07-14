import circle from "../assets/pattern-curved-line-1.svg"
import imageHero from "../assets/image-hero-landscape.png"
import imageHero2 from "../assets/image-hero-portrait.png"

export default function Body() {
    return (
        <main className="lg:mx-[165px] lg:flex lg:flex-row lg:overflow-visible">
            <section className="mx-4 my-16 relative md:mx-8 md:grid md:grid-cols-2 md:items-center lg:mx-0">
                <img 
                    className="w-[127.56px] h-[16px] text-bold absolute -top-5 right-13 md:w-[287px] md:h-[36px] md:z-10 md:top-5 md:right-29 lg:right-102 lg:top-15" 
                    src={circle} 
                    alt="Pattern curved line 1" 
                    />
                <div className="mb-16 md:relative md:z-10 md:mt-18 lg:text-left">
                    <h1 className="tp-1-mobile md:text-56 md:w-[490px] lg:w-[635px] lg:h-[158px] lg:tp-1 lg:text-7xl">A <span className="tp-1-mobile-bold md:text-56 lg:tp-1 lg:text-7xl">super solution <br/></span> for your <span className="tp-1-mobile-bold md:text-56 lg:tp-1 lg:text-7xl">business.</span></h1>
                    <p className="tp-5 mt-6 mb-10 text-neutral-5500 md:w-[350px]">Our marketing and sales automations help your scale your outreach to get more leads for you company.</p>
                    <button 
                        className="px-8 pt-5 pb-4 border rounded-md bg-neutral-9900 tp-6 text-white hover:bg-gradient-to-br hover:from-Eupatorium-purple-200 hover:via-Eupatorium-purple-500 hover:to-orange-00 transition-colors duration-300 delay-150">
                            Request Beta Access
                    </button>
                </div>
                <img 
                    className="md:hidden lg:hidden" 
                    src={imageHero} 
                    alt="Image Hero Landscape" 
                    />
                <img 
                    className="hidden md:block md:relative md:z-0 md:w-[280px] md:ml-18 lg:w-[350px] lg:-ml-3" 
                    src={imageHero2} 
                    alt="Image Hero Portrait" 
                    />
            </section>
            <section className="md:flex md:justify-around md:mt-20 lg:flex lg:flex-col lg:justify-center-safe lg:items-start">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="tp-2-bold">2K+</h2>
                    <p className="tp-7 uppercase text-neutral-5500">companies</p>
                </div>
                <div className="flex flex-col items-center mb-10">
                    <h2 className="tp-2-bold">8</h2>
                    <p className="tp-7 uppercase text-neutral-5500">languages</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="tp-2-bold">1.2M</h2>
                    <p className="tp-7 uppercase text-neutral-5500">leads</p>
                </div>
            </section>
        </main>
    )
}