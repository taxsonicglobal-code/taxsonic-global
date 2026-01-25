import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Home"
        description="TaxSonic Global provides premium regulatory risk, tax intelligence, and governance advisory for businesses navigating complexity with confidence."
      />
      <HeroSection />
      <ValueProposition />
      <ServicesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
