import Contact from "@/components/Contact"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import Technologies from "@/components/Technologies"
import Services from "@/components/Services"

export default function Home() {
  return (
    // removed snap-y snap-mandatory overflow-y-scroll h-screen
    <div className="w-full bg-[url('../assets/bg.svg')] bg-top bg-no-repeat bg-cover">
      <Hero />
      <Services />
      <Technologies />
      <Gallery />
      <Contact />
    </div>
  )
}
