import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">

            <p className="text-gold text-sm tracking-widest mb-3">
              LEGAL
            </p>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Privacy Policy
            </h1>

            <p className="text-muted-foreground text-sm">
              Last updated: March 12, 2026
            </p>

          </div>

          {/* Content */}
          <div className="space-y-8">

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                1. Introduction
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Brandixo ("we", "our", or "us") respects your privacy and is committed
                to protecting your personal information. This Privacy Policy explains
                how we collect, use, and safeguard your information when you visit
                our website and use our services including e-commerce store creation,
                Shopify setup, UI/UX design, and landing page development in Morocco.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                2. Information We Collect
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We may collect personal information such as your name, email address,
                phone number, and any details you provide when contacting us through
                our website forms or email.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                3. How We Use Your Information
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Your information is used to respond to inquiries, provide services,
                improve our website experience, and communicate important updates
                regarding your requests or projects.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                4. Data Protection
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                5. Third-Party Services
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Our website may use third-party tools and services such as analytics
                or hosting platforms to improve performance and functionality.
                These providers may process limited data in accordance with their
                own privacy policies.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                6. Contact Us
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle
                your data, please contact us at:
              </p>

              <div className="mt-4 text-sm">
                <p>📧 contact@brandixo.com</p>
                <p>📞 +212 691 553 120</p>
              </div>

            </section>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;