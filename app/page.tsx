import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#132A4A]">
      <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-24">
        {/* Header */}
        <header className="mb-16 flex items-center justify-between">
          <Image
            src="/images/codagrowth-logo.png"
            alt="CodaGrowth"
            width={140}
            height={38}
            className="h-auto w-[120px] md:w-[140px]"
            priority
          />
          <nav className="flex items-center gap-6">
            <Link
              href="/sop-library"
              className="text-sm font-medium text-[#BFE2DC] transition-colors hover:text-[#F5F7FA]"
            >
              SOP Library
            </Link>
            <Link
              href="https://codagrowth.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#F5734A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#e5633a]"
            >
              Get Started
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mb-20 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5734A]">
            AI & Automation Consultancy
          </p>
          <h1 className="text-4xl font-black tracking-[-0.025em] text-[#F5F7FA] md:text-[56px] md:leading-[1.08]">
            Scale Your Revenue Systems
            <br />
            <span className="text-[#F5734A]">with AI and Automation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[55ch] font-[family-name:var(--font-roboto)] text-base leading-relaxed text-[#BFE2DC] md:text-lg">
            We help B2B founders and agency operators build autonomous revenue
            engines that scale without adding headcount.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sop-library"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F5734A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e5633a]"
            >
              Explore SOP Library
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://codagrowth.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(245,115,74,0.35)] px-6 py-3 text-sm font-semibold text-[#F5734A] transition-colors hover:bg-[rgba(245,115,74,0.1)]"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[rgba(245,115,74,0.15)] bg-[#1E3F62] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(245,115,74,0.1)]">
              <Zap className="h-6 w-6 text-[#F5734A]" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#F5F7FA]">
              AI-Powered Workflows
            </h3>
            <p className="font-[family-name:var(--font-roboto)] text-sm leading-relaxed text-[#BFE2DC]">
              Automate repetitive tasks with intelligent workflows that learn
              and adapt to your business processes.
            </p>
          </div>
          <div className="rounded-xl border border-[rgba(245,115,74,0.15)] bg-[#1E3F62] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(245,115,74,0.1)]">
              <Target className="h-6 w-6 text-[#F5734A]" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#F5F7FA]">
              Revenue Operations
            </h3>
            <p className="font-[family-name:var(--font-roboto)] text-sm leading-relaxed text-[#BFE2DC]">
              Streamline your sales, marketing, and customer success operations
              into a unified revenue engine.
            </p>
          </div>
          <div className="rounded-xl border border-[rgba(245,115,74,0.15)] bg-[#1E3F62] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(245,115,74,0.1)]">
              <TrendingUp className="h-6 w-6 text-[#F5734A]" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#F5F7FA]">
              Scalable Systems
            </h3>
            <p className="font-[family-name:var(--font-roboto)] text-sm leading-relaxed text-[#BFE2DC]">
              Build infrastructure that grows with you, without proportionally
              increasing operational costs.
            </p>
          </div>
        </section>

        {/* SOP Library CTA */}
        <section className="rounded-2xl border border-[rgba(245,115,74,0.2)] bg-[#1A3D6E] p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-black text-[#F5F7FA] md:text-3xl">
            The 2026 SOP Stack
          </h2>
          <p className="mx-auto mb-6 max-w-[50ch] font-[family-name:var(--font-roboto)] text-sm leading-relaxed text-[#BFE2DC] md:text-base">
            Six tool-specific Standard Operating Procedures that operationalise
            the Autonomous Revenue Engine.
          </p>
          <Link
            href="/sop-library"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F5734A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e5633a]"
          >
            View SOP Library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-[rgba(255,255,255,0.1)] pt-8 text-center">
          <p className="font-[family-name:var(--font-roboto)] text-xs text-[#6B8A9E]">
            © 2026 CodaGrowth. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}
