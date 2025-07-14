import logo from "../assets/logo.svg"
import facebookIcon from "../assets/icon-facebook.svg"
import twitterIcon from "../assets/icon-twitter.svg"
import instagramIcon from "../assets/icon-instagram.svg"

export default function Footer() {
    return (
        <footer className="pt-36 pb-10 bg-neutral-2200 relative z-0 md:pt-72">
            <div>
                <div className="flex flex-col items-center md:flex-row md:justify-between md:mx-8 pt-10">
                    <img 
                        className="mb-8 md:mb-0" 
                        src={logo} 
                        alt="Logo" 
                        />
                        
                    <p className="mb-8 tp-8 text-neutral-5500 md:mb-0">Copyright - Suite</p>
                    <div className="flex flex-row justify-between">
                        <img 
                            src={facebookIcon} 
                            alt="Facebook Icon"
                            />
                            
                        <img 
                            className="mx-8" 
                            src={twitterIcon} 
                            alt="Twitter Icon"/>

                        <img 
                            src={instagramIcon} 
                            alt="Instagram Icon"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}