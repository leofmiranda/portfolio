import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioGrid />

      <section className="px-6 md:px-10 py-16 flex justify-center border-t border-ink/8">
        <Link 
          href="/all-projects"
          className="text-[13px] font-light text-ink/70 hover:text-ink transition-colors duration-200 tracking-wide"
        >
          View All Projects →
        </Link>
      </section>

      <footer
        id="contact"
        className="px-6 md:px-10 py-16 flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-ink/8"
      >
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
            Get in touch
          </p>
          <a
            href="mailto:hello@leonardomiranada.com"
            className="text-[13px] font-light text-ink hover:text-muted transition-colors duration-200"
          >
            hello@leonardomiranada.com
          </a>
        </div>

        <p className="text-[11px] text-muted font-light">
          © {new Date().getFullYear()} Leonardo Miranda
        </p>
      </footer>
    </main>
  );
}
