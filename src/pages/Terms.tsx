import SeoPageLayout from '@/components/SeoPageLayout';

const Terms = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Brandixo",
    "description": "Terms of Service for Brandixo digital agency services in Morocco.",
    "url": "https://brandixo.com/terms"
  };

  return (
    <SeoPageLayout
      title="Terms of Service — Brandixo"
      description="Brandixo Terms of Service. Read our terms and conditions for e-commerce store creation, Shopify setup, UI/UX design, and web development services in Morocco."
      structuredData={structuredData}
    >
      <section className="section-alt py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-3 block">Legal</span>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 12, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of Brandixo's website and services. By accessing our website, requesting our services, or entering into an agreement with us, you accept these Terms. Brandixo is a digital agency based in Morocco providing e-commerce solutions, web design, and branding services.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">2. Services Provided</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Brandixo offers the following digital services to businesses and entrepreneurs in Morocco:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>E-commerce Store Creation:</strong> Custom online stores for selling products and services</li>
                <li><strong>Shopify Store Setup:</strong> Professional Shopify store configuration and customization</li>
                <li><strong>Landing Page Design:</strong> High-converting landing pages for products and campaigns</li>
                <li><strong>Dropshipping Store Development:</strong> Automated dropshipping solutions</li>
                <li><strong>UI/UX Design:</strong> User interface and experience design services</li>
                <li><strong>Branding:</strong> Logo design and brand identity development</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Specific deliverables, timelines, and pricing will be detailed in individual service agreements or proposals.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">3. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                By engaging our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information about your business and requirements</li>
                <li>Supply necessary content, images, and materials in a timely manner</li>
                <li>Review and provide feedback on deliverables within agreed timeframes</li>
                <li>Make payments according to the agreed schedule</li>
                <li>Ensure you have rights to all materials you provide to us</li>
                <li>Obtain necessary licenses for any third-party software or plugins required</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">4. Payments</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Project quotes are valid for 30 days unless otherwise specified</li>
                <li>A deposit is typically required before work begins (amount varies by project)</li>
                <li>Remaining payments are due according to the agreed milestone schedule</li>
                <li>All prices are in Moroccan Dirhams (MAD) unless stated otherwise</li>
                <li>Late payments may incur additional fees and project delays</li>
                <li>Work may be suspended for overdue accounts</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Intellectual property rights are handled as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Upon full payment, you receive ownership rights to custom designs and code created specifically for your project</li>
                <li>We retain the right to use your project in our portfolio unless otherwise agreed</li>
                <li>Stock images, third-party plugins, and licensed software remain subject to their original licenses</li>
                <li>We may reuse general programming techniques and knowledge gained during your project</li>
                <li>You warrant that all materials you provide do not infringe on third-party rights</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Brandixo's liability is limited to the amount paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages, including lost profits, revenue, or business opportunities. We do not guarantee specific business results from our services. Our services are provided "as is" without warranties beyond those explicitly stated.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the revised Terms. For ongoing projects, the Terms in effect at project commencement will apply unless both parties agree otherwise.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="text-muted-foreground">
                <p className="mb-1"><strong>Brandixo</strong></p>
                <p className="mb-1">Email: <a href="mailto:contact@brandixo.com" className="text-gold hover:underline">contact@brandixo.com</a></p>
                <p className="mb-1">Phone: <a href="tel:+212691553120" className="text-gold hover:underline">+212 691 553 120</a></p>
                <p>Location: Morocco</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
};

export default Terms;