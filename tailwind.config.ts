@tailwind base;
@tailwind components;
@tailwind utilities;
/* ============================================================
   GOOGLE FONTS — Playfair Display + Tajawal
   ============================================================ */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Tajawal:wght@300;400;500;700&display=swap');

/* ============================================================
   BASE — CSS Variables + Dark Theme
   ============================================================ */
@layer base {
  :root {
    --background: 0 0% 6%;
    --foreground: 0 0% 98%;

    --card: 0 0% 9%;
    --card-foreground: 0 0% 98%;

    --popover: 0 0% 9%;
    --popover-foreground: 0 0% 98%;

    --primary: 42 80% 48%;
    --primary-foreground: 0 0% 6%;

    --secondary: 0 0% 12%;
    --secondary-foreground: 0 0% 98%;

    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 55%;

    --accent: 42 80% 48%;
    --accent-foreground: 0 0% 6%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 42 80% 48%;

    --radius: 0.5rem;

    /* === GOLD === */
    --gold: 42 80% 48%;
    --gold-light: 42 85% 62%;
    --gold-dark: 42 75% 34%;

    /* === DARK === */
    --dark: 0 0% 6%;
    --dark-soft: 0 0% 10%;

    /* === GRADIENTS === */
    --gradient-gold: linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%));
    --gradient-gold-sharp: linear-gradient(90deg, hsl(42 75% 34%), hsl(42 85% 62%), hsl(42 75% 34%));
    --gradient-dark: linear-gradient(180deg, hsl(0 0% 6%), hsl(0 0% 10%));
    --gradient-dark-rich: linear-gradient(145deg, hsl(0 0% 6%) 0%, hsl(0 0% 9%) 50%, hsl(0 0% 6%) 100%);

    /* === SHADOWS === */
    --shadow-gold: 0 8px 40px -8px hsl(42 80% 48% / 0.35);
    --shadow-gold-sm: 0 4px 20px -4px hsl(42 80% 48% / 0.25);
    --shadow-card: 0 2px 20px -4px hsl(0 0% 0% / 0.06);
    --shadow-card-hover: 0 8px 40px -8px hsl(0 0% 0% / 0.12);
    --shadow-dark: 0 24px 60px -12px hsl(0 0% 0% / 0.4);

    /* === SIDEBAR === */
    --sidebar-background: 0 0% 8%;
    --sidebar-foreground: 0 0% 90%;
    --sidebar-primary: 42 80% 48%;
    --sidebar-primary-foreground: 0 0% 6%;
    --sidebar-accent: 0 0% 12%;
    --sidebar-accent-foreground: 0 0% 90%;
    --sidebar-border: 0 0% 15%;
    --sidebar-ring: 42 80% 48%;
  }

  * {
    @apply border-border;
    box-sizing: border-box;
  }

  html {
    background: hsl(0 0% 6%);
  }

  body {
    background: hsl(0 0% 6%);
    color: hsl(0 0% 98%);
    font-family: 'Tajawal', sans-serif;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    background: hsl(0 0% 6%);
    min-height: 100vh;
  }

  .font-display {
    font-family: 'Playfair Display', serif !important;
  }

  .font-body {
    font-family: 'Tajawal', sans-serif !important;
  }
}

/* ============================================================
   HERO ANIMATIONS
   ============================================================ */
@keyframes hero-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes hero-slide {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes hero-scale {
  from { opacity: 0; transform: scaleX(0); }
  to   { opacity: 1; transform: scaleX(1); }
}

.hero-fade-in {
  opacity: 0;
  animation: hero-fade 0.6s ease forwards;
}

.hero-slide-up {
  opacity: 0;
  animation: hero-slide 0.7s ease forwards;
}

.hero-scale-in {
  opacity: 0;
  animation: hero-scale 0.6s ease forwards;
}

@media (prefers-reduced-motion: reduce) {
  .hero-fade-in,
  .hero-slide-up,
  .hero-scale-in {
    opacity: 1;
    animation: none;
  }
}

/* ============================================================
   COMPONENTS
   ============================================================ */
@layer components {

  /* === LAYOUT === */
  .section-padding {
    @apply py-14 md:py-28 px-4 md:px-8;
  }

  /* === GOLD === */
  .gold-gradient {
    background: var(--gradient-gold);
  }

  .gold-text {
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gold-border {
    border: 1px solid hsl(42 80% 48% / 0.3);
  }

  .gold-line {
    width: 3rem;
    height: 2px;
    background: var(--gradient-gold);
    border-radius: 2px;
  }

  /* === DARK SECTIONS === */
  .dark-section {
    background: var(--gradient-dark-rich);
    color: hsl(0 0% 98%);
  }

  .dark-section-alt {
    background: hsl(0 0% 8%);
    color: hsl(0 0% 98%);
  }

  /* === CARDS === */
  .card-shadow {
    box-shadow: var(--shadow-card);
  }

  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-hover:hover {
    box-shadow: var(--shadow-card-hover);
    transform: translateY(-2px);
  }

  /* === GOLD SHADOWS === */
  .gold-shadow {
    box-shadow: var(--shadow-gold);
  }

  .gold-shadow-sm {
    box-shadow: var(--shadow-gold-sm);
  }

  /* === BUTTONS === */
  .btn-gold {
    background: var(--gradient-gold);
    color: hsl(0 0% 6%);
    font-weight: 700;
    box-shadow: var(--shadow-gold-sm);
    transition: all 0.25s ease;
    border-radius: var(--radius);
    padding: 0.875rem 2rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-gold:hover {
    box-shadow: var(--shadow-gold);
    transform: translateY(-1px) scale(1.02);
  }

  .btn-outline-white {
    border: 1px solid hsl(0 0% 100% / 0.2);
    color: hsl(0 0% 100% / 0.85);
    transition: all 0.25s ease;
    border-radius: var(--radius);
    padding: 0.875rem 2rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-outline-white:hover {
    background: hsl(0 0% 100% / 0.07);
    border-color: hsl(42 80% 48% / 0.5);
    color: hsl(42 80% 62%);
  }

  .btn-outline-dark {
    border: 1.5px solid hsl(0 0% 6%);
    color: hsl(0 0% 6%);
    transition: all 0.25s ease;
    border-radius: var(--radius);
    padding: 0.875rem 2rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-outline-dark:hover {
    background: hsl(0 0% 6%);
    color: hsl(0 0% 99%);
  }

  /* === SECTION HEADERS === */
  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 1rem;
    border-radius: 999px;
    border: 1px solid hsl(42 80% 48% / 0.25);
    background: hsl(42 80% 48% / 0.06);
    font-size: 0.8rem;
    font-weight: 600;
    color: hsl(42 70% 42%);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .section-tag-dark {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 1rem;
    border-radius: 999px;
    border: 1px solid hsl(42 80% 48% / 0.3);
    background: hsl(42 80% 48% / 0.08);
    font-size: 0.8rem;
    font-weight: 600;
    color: hsl(42 85% 62%);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  /* === DIVIDER === */
  .gold-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, hsl(42 80% 48% / 0.4), transparent);
    margin: 0;
  }

  /* === NOISE TEXTURE === */
  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.4;
    mix-blend-mode: overlay;
  }
}

/* ============================================================
   MOBILE-SPECIFIC FIXES
   ============================================================ */
@media (max-width: 767px) {

  .section-padding {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .md\:scale-105 {
    transform: none !important;
  }

  button, a {
    min-height: 44px;
  }

  h1 { font-size: clamp(1.75rem, 6vw, 2.5rem); }
  h2 { font-size: clamp(1.4rem, 5vw, 2rem); }
  h3 { font-size: clamp(1.1rem, 4vw, 1.5rem); }
}
