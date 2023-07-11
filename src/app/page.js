import Contact from "@/components/Contact"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import Services from "@/components/Services"

export default function Home() {
  return (
    <div className="w-full h-screen bg-[url('../assets/desktop/bg.svg')] bg-top bg-no-repeat bg-cover snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </div>
  )
}
