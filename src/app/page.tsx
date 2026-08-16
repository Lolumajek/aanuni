import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const categories = [
  {
    number: "01",
    title: "Power, refined.",
    label: "Portable power",
    description:
      "High-density energy, sculpted into objects you will want to carry.",
    className: "product-card--power",
  },
  {
    number: "02",
    title: "Fast feels effortless.",
    label: "GaN charging",
    description:
      "Smaller architecture. Cooler performance. More power for every port.",
    className: "product-card--charge",
  },
  {
    number: "03",
    title: "Built to stay close.",
    label: "Everyday essentials",
    description:
      "Quietly capable cables and accessories, considered down to the detail.",
    className: "product-card--connect",
  },
];

const principles = [
  ["Less, but better", "Every line, material and interaction earns its place."],
  ["Power without pause", "Dependable performance for life in motion."],
  ["Made for every day", "Durable by design, intuitive from the first touch."],
];

const accessories = [
  {
    title: "Magnetic power",
    category: "Phone accessories",
    image: "/products/magnetic-power-bank.webp",
  },
  {
    title: "GaN charging",
    category: "Phone accessories",
    image: "/products/gan-charger-cables.webp",
  },
  {
    title: "Connected workspace",
    category: "Computer accessories",
    image: "/products/laptop-dock.webp",
  },
  {
    title: "Wireless control",
    category: "Computer accessories",
    image: "/products/wireless-keyboard-mouse.webp",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 fill-none">
      <path
        d="M4 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function EnergyMark({ className = "" }: { className?: string }) {
  return (
    <span className={`energy-mark ${className}`} aria-hidden="true">
      <span className="energy-mark__core" />
      <span className="energy-mark__orbit energy-mark__orbit--one" />
      <span className="energy-mark__orbit energy-mark__orbit--two" />
    </span>
  );
}

export default function Home() {
  return (
    <main id="main-content" className="overflow-hidden">
      <section className="hero-stage bg-midnight-900 relative isolate min-h-[calc(100svh-7rem)] overflow-hidden text-white">
        <div
          className="hero-grid absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <Container className="relative flex min-h-[calc(100svh-7rem)] flex-col justify-between pt-16 pb-8 sm:pt-24 sm:pb-10 lg:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-white/60 uppercase sm:text-sm">
                <span className="bg-energy-500 size-1.5 rounded-full shadow-[0_0_18px_var(--color-energy)]" />
                Technology, made graceful
              </p>
              <h1 className="text-[clamp(3.75rem,9vw,8.5rem)] leading-[0.84] font-semibold tracking-[-0.075em]">
                Power.
                <br />
                <span className="text-energy-500">Beautifully</span>
                <br />
                simple.
              </h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-white/64 sm:text-lg sm:leading-8">
                Thoughtful technology for the moments that matter. Designed to
                perform. Made to belong.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#collection" size="lg">
                  Explore the collection <ArrowIcon />
                </Button>
                <Button
                  href="#philosophy"
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  Our philosophy
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[36rem] lg:max-w-none">
              <div className="hero-product absolute inset-[11%] rounded-[30%] border border-white/10 bg-white/[0.045] shadow-[0_50px_120px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                <div className="absolute inset-[9%] rounded-[26%] border border-white/5" />
                <div className="absolute top-[17%] left-1/2 h-[65%] w-[42%] -translate-x-1/2 rotate-[9deg] rounded-[2.4rem] border border-white/20 bg-gradient-to-br from-white/20 via-white/6 to-transparent shadow-[inset_-12px_-12px_25px_rgba(0,0,0,0.22),0_35px_50px_rgba(0,0,0,0.38)]">
                  <div className="absolute top-7 left-1/2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/35" />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <span className="bg-energy-500 mx-auto block size-2 rounded-full shadow-[0_0_16px_var(--color-energy)]" />
                    <span className="mt-3 block text-[0.55rem] tracking-[0.32em] text-white/50 uppercase">
                      aanuni
                    </span>
                  </div>
                </div>
              </div>
              <EnergyMark className="absolute top-[3%] right-[3%] scale-75 sm:scale-100" />
              <p className="absolute bottom-[4%] left-[3%] max-w-36 text-xs leading-5 text-white/45">
                A new language for everyday power.
              </p>
            </div>
          </div>
          <div className="mt-16 flex items-end justify-between border-t border-white/10 pt-6 text-[0.68rem] font-medium tracking-[0.18em] text-white/40 uppercase">
            <span>Designed for movement</span>
            <span className="hidden sm:block">Scroll to discover</span>
            <span>Est. 2026</span>
          </div>
        </Container>
      </section>

      <section id="collection" className="bg-surface-0 py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <p className="text-energy-600 text-xs font-semibold tracking-[0.2em] uppercase">
              The collection
            </p>
            <div>
              <h2 className="text-midnight-900 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Everyday technology should feel anything but ordinary.
              </h2>
              <p className="text-midnight-500 mt-8 max-w-2xl text-lg leading-8">
                We bring clarity to the objects that keep life moving—uniting
                advanced performance with a quieter, more human kind of design.
              </p>
            </div>
          </div>
          <div className="mt-20 grid gap-5 lg:mt-28 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category.title}
                href="mailto:info@aanuni.com?subject=AANUNI%20product%20interest"
                className={`product-card group rounded-brand-xl relative isolate min-h-[31rem] overflow-hidden p-7 text-white sm:p-9 ${category.className}`}
              >
                <div
                  className="product-card__visual absolute inset-0"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex h-full min-h-[27rem] flex-col justify-between">
                  <div className="flex items-center justify-between text-[0.68rem] font-semibold tracking-[0.18em] text-white/55 uppercase">
                    <span>{category.number}</span>
                    <span>{category.label}</span>
                  </div>
                  <div>
                    <h3 className="max-w-xs text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl">
                      {category.title}
                    </h3>
                    <div className="mt-5 flex items-end justify-between gap-6">
                      <p className="max-w-xs text-sm leading-6 text-white/62">
                        {category.description}
                      </p>
                      <span className="duration-slow group-hover:text-midnight-900 flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition-transform group-hover:translate-x-1 group-hover:bg-white">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="accessories-heading"
        className="bg-midnight-900 overflow-hidden py-24 text-white sm:py-32"
      >
        <Container>
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-energy-500 text-xs font-semibold tracking-[0.2em] uppercase">
                Phone &amp; computer accessories
              </p>
              <h2
                id="accessories-heading"
                className="mt-6 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-6xl"
              >
                Made to move with every part of your day.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55 sm:text-right">
              Thoughtful essentials for your phone, computer and everything in
              between.
            </p>
          </div>
        </Container>

        <div className="accessory-marquee mt-14 sm:mt-20">
          <div className="accessory-marquee__track">
            {[...accessories, ...accessories].map((accessory, index) => (
              <article
                key={`${accessory.title}-${index}`}
                aria-hidden={index >= accessories.length}
                className="accessory-card overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={accessory.image}
                    alt={index < accessories.length ? accessory.title : ""}
                    fill
                    sizes="(max-width: 640px) 82vw, 34rem"
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
                <div className="flex items-end justify-between gap-5 p-6 sm:p-7">
                  <div>
                    <p className="text-energy-500 text-[0.65rem] font-semibold tracking-[0.18em] uppercase">
                      {accessory.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                      {accessory.title}
                    </h3>
                  </div>
                  <span className="bg-energy-500 size-2 shrink-0 rounded-full shadow-[0_0_18px_var(--color-energy)]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="philosophy"
        className="bg-midnight-50 relative py-24 sm:py-32 lg:py-40"
      >
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="rounded-brand-xl bg-midnight-900 relative aspect-[4/5] overflow-hidden">
              <div
                className="philosophy-orbit absolute inset-0"
                aria-hidden="true"
              />
              <EnergyMark className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.55]" />
              <p className="absolute bottom-8 left-8 max-w-[12rem] text-xs leading-5 text-white/45 sm:bottom-10 sm:left-10">
                The energy dot—our promise that considered power lives inside.
              </p>
            </div>
            <div className="lg:pt-10">
              <p className="text-energy-600 text-xs font-semibold tracking-[0.2em] uppercase">
                Our point of view
              </p>
              <h2 className="text-midnight-900 mt-7 text-4xl leading-[1.03] font-semibold tracking-[-0.045em] sm:text-6xl">
                Designed around life, not the other way around.
              </h2>
              <p className="text-midnight-500 mt-8 max-w-xl text-lg leading-8">
                Technology is at its best when it disappears into the rhythm of
                your day. AANUNI pairs purposeful engineering with an instinct
                for simplicity, creating tools that feel natural from the moment
                you pick them up.
              </p>
              <div className="divide-midnight-200 border-midnight-200 mt-12 divide-y border-y">
                {principles.map(([title, description], index) => (
                  <div
                    key={title}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 py-6 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="text-energy-600 pt-1 text-xs font-semibold">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-midnight-900 text-lg font-semibold">
                        {title}
                      </h3>
                      <p className="text-midnight-500 mt-1 text-sm leading-6">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                href="mailto:info@aanuni.com?subject=Hello%20AANUNI"
                variant="outline"
                size="lg"
                className="mt-10"
              >
                Start a conversation <ArrowIcon />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-energy-500 text-midnight-900 relative overflow-hidden py-24 sm:py-32">
        <div className="cta-rings absolute inset-0" aria-hidden="true" />
        <Container className="relative text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase">
            Stay powered
          </p>
          <h2 className="mx-auto mt-7 max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Make room for better technology.
          </h2>
          <p className="text-midnight-800/70 mx-auto mt-7 max-w-xl text-base leading-7 sm:text-lg">
            Meet a more considered collection of power and everyday essentials.
          </p>
          <Button
            href="mailto:info@aanuni.com?subject=Hello%20AANUNI"
            variant="secondary"
            size="lg"
            className="mt-9"
          >
            Contact AANUNI <ArrowIcon />
          </Button>
        </Container>
      </section>
    </main>
  );
}
