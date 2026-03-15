import Navbar from "./components/navbar"
import Hero from "./components/hero"
import PricingSection from "./components/PricingSection"
import Footer from "./components/Footer"

function App(){
  return (
    <div className="bg-teal-100">
      <Navbar />
      <Hero />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default App