import image from "../assets/image-jeremy-small.png"
import image2 from "../assets/image-jeremy-large.png"
import circle2 from "../assets/pattern-curved-line-2.svg"
import glow from "../assets/pattern-blur.svg"

export default function Testimonial() {
    return (
        <section className="md:mx-8 lg:mx-[165px]">
            <div className="bg-neutral-9900 relative rounded-15 -mb-28 py-18 pb-10 px-6 mt-55 z-10 md:-mb-66 lg:py-[88px] lg:px-[125px] lg:flex lg:flex-row">
                <div className="relative">
                    <div className="lg:relative"></div>
                    <img 
                        className="absolute -top-60 right-10 z-10 md:-top-58 md:right-55 lg:hidden" 
                        src={image} 
                        alt="Image Jeremy Small"/>

                    <img
                        className="hidden lg:block lg:absolute lg:-bottom-22 lg:right-45 lg:z-10"
                        src={image2}
                        alt="Image Jeremy Large"
                    />
                    <img 
                        className="absolute -top-20 -right-1 md:w-2/3 md:right-30 md:-top-44 lg:static" 
                        src={glow} 
                        alt="pattern blur"
                    />
                    <img 
                        className="hidden lg:block lg:absolute lg:z-0 lg:w-7/8 lg:top-30 lg:right-32" 
                        src={glow} 
                        alt="pattern blur"
                    />

                    <img 
                        className="absolute top-46 right-35 md:right-78 md:top-46 lg:right-14 lg:top-16" 
                        src={circle2} 
                        alt="Pattern Curved Line 2"
                        />
                </div>
                <div className="mt-64 text-center lg:w-[350px] lg:text-left lg:mt-0">
                    <h2 className="tp-2 text-neutral-0 lg:mb-8">It just <span className="tp-2-bold">works.</span></h2>
                    <p className="tp-3 text-neutral-2200 text-center mb-6 lg:text-left">"I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. 
                        This thing is a miracle worker."</p>
                    <p className="tp-4 uppercase text-neutral-0">jeremy robinson</p>
                    <p className="tp-7 uppercase text-neutral-2200">cmo, fylo</p>
                </div>
            </div>
        </section>
    )
}