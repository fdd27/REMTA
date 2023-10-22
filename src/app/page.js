import Contact from "@/components/Contact"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Kitchens from "@/components/Kitchens"
// import ButtonToTop from "@/components/ButtonToTop"

export default function Home() {
  return (
    // removed snap-y snap-mandatory overflow-y-scroll h-screen
    <div className="w-full bg-[url('../assets/bg.svg')] bg-top bg-no-repeat bg-cover">
      <Hero />
      <Kitchens />
      <Services />
      <Gallery />
      <Contact />
      {/* <ButtonToTop /> */}
    </div>
  )
}
