import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
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
              Terms of Service
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
                These Terms of Service ("Terms") govern your use of Brandixo's
                website and services. By accessing our website, requesting our
                services, or entering into an agreement with us, you accept
                these Terms.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                2. Services
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Brandixo provides digital services including e-commerce store
                creation, Shopify store setup, landing page design, and web
                design solutions for businesses in Morocco.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                3. User Responsibilities
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Users agree to provide accurate information when contacting us
                and must not use our website for unlawful activities or actions
                that may harm the website or other users.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                4. Payments and Agreements
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Any project or service may require a written agreement or
                payment terms agreed upon before the work begins.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                5. Limitation of Liability
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Brandixo is not responsible for any damages resulting from the
                misuse of the website or services provided.
              </p>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">
                6. Contact
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, you can
                contact us at:
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

export default Terms;