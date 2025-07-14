import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"

export default function App() {

  return (
    <div className="mx-auto w-[375px] relative md:w-3xl lg:w-[1440px]">
        <Header />
        <Body />
        <Testimonial />
        <Footer />
    </div>

)}

