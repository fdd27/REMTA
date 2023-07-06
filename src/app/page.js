import Contact from "@/components/Contact"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import Services from "@/components/Services"

export default function Home() {
  return (
    <div className="w-screen lg:w-full bg-[url('../assets/desktop/bg.svg')] bg-top bg-no-repeat bg-cover">
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </div>
  )
}
