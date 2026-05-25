import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import MarqueeBar from '@/components/marquee-bar'
import SocialProof from '@/components/social-proof'
import ProblemSection from '@/components/problem-section'
import SolutionSection from '@/components/solution-section'
import ToolsSection from '@/components/tools-section'
import PortfolioSection from '@/components/portfolio-section'
import CurriculumSection from '@/components/curriculum-section'
import ForWhoSection from '@/components/for-who-section'
import TestimonialsSection from '@/components/testimonials-section'
import InstructorSection from '@/components/instructor-section'
import PricingSection from '@/components/pricing-section'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'
import StickyMobileBar from '@/components/sticky-mobile-bar'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <MarqueeBar />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <ToolsSection />
      <PortfolioSection />
      <CurriculumSection />
      <ForWhoSection />
      <TestimonialsSection />
      <InstructorSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <StickyMobileBar />
    </main>
  )
}
