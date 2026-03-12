import SeoPageLayout from '@/components/SeoPageLayout';

const Privacy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Brandixo",
    "description": "Privacy Policy for Brandixo digital agency services in Morocco.",
    "url": "https://brandixo.com/privacy"
  };

  return (
    <SeoPageLayout
      title="Privacy Policy — Brandixo"
      description="Brandixo Privacy Policy. Learn how we collect, use, and protect your personal information when using our e-commerce and web design services in Morocco."
      structuredData={structuredData}
    >
      <section className="section-alt py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-3 block">Legal</span>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 12, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Brandixo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our digital services including e-commerce store creation, Shopify setup, UI/UX design, and landing page design services in Morocco.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company details when you contact us or request our services.</li>
                <li><strong>Business Information:</strong> Details about your business, products, and requirements for your e-commerce store or website project.</li>
                <li><strong>Payment Information:</strong> Billing address and payment details processed securely through our payment partners.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage patterns when you visit our website.</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">3. How We Use Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Providing and managing our e-commerce and web design services</li>
                <li>Communicating with you about your project and responding to inquiries</li>
                <li>Processing payments and maintaining financial records</li>
                <li>Improving our website, services, and customer experience</li>
                <li>Sending promotional materials and service updates (with your consent)</li>
                <li>Complying with legal obligations and protecting our rights</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">4. Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">5. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user interactions. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">6. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party service providers (such as hosting services, payment processors, and analytics tools) that may collect and process your information. These providers have their own privacy policies, and we encourage you to review them. We only share information necessary to provide our services.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">7. User Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information below. We will respond to your request within the timeframes required by applicable law.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default Privacy;