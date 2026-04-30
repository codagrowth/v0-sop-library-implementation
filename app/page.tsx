import { SOPCard } from "@/components/sop-card"
import Image from "next/image"

const sopData = [
  {
    letter: "A",
    tool: "AdCreative",
    title: "The High-Velocity Ad Ops SOP",
    audience: "Performance Marketers & Agency Owners",
    href: "/sop/ad-creative",
  },
  {
    letter: "B",
    tool: "GoHighLevel",
    title: "The CRM & Funnel Consolidation SOP",
    audience: "B2B Founders & Agency Operators",
    href: "/sop/go-high-level",
  },
  {
    letter: "C",
    tool: "Beehiiv",
    title: "The High-Ticket Newsletter Infrastructure",
    audience: "B2B Content Operators & Consultants",
    href: "/sop/beehiiv",
  },
  {
    letter: "D",
    tool: "Kit",
    title: "Creator-to-Consultant Automation",
    audience: "Independent Consultants & Course Creators",
    href: "/sop/kit",
  },
  {
    letter: "E",
    tool: "Gamma",
    title: "AI-Powered Pitch Deck & Sales Asset SOP",
    audience: "Senior PMs, Consultants & Agency Principals",
    href: "/sop/gamma",
  },
  {
    letter: "F",
    tool: "Reply.io",
    title: "The Cold Outreach Autopilot SOP",
    audience: "B2B Sales Teams & Outbound Operators",
    href: "/sop/reply-io",
  },
]

export default function SOPLibraryPage() {
  return (
    <main className="min-h-screen bg-[#000]">
      <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20">
        {/* Hero Section */}
        <header className="mb-12 text-center md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Image
              src="/images/codagrowth-logo.png"
              alt="CodaGrowth"
              width={140}
              height={38}
              className="h-auto w-[120px] md:w-[140px]"
              priority
            />
          </div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[#4FE9D0]">
            CodaGrowth · Revenue Ops Library
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-white md:text-[52px] md:leading-[1.02]">
            The 2026 SOP Stack
          </h1>
          <p className="mx-auto mt-5 max-w-[60ch] text-sm leading-relaxed text-[#9AA6BF] md:text-base">
            Six tool-specific Standard Operating Procedures that operationalise
            the Autonomous Revenue Engine. Each document is a standalone,
            print-ready deliverable.
          </p>
        </header>

        {/* SOP Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {sopData.map((sop) => (
            <SOPCard key={sop.letter} {...sop} />
          ))}
        </div>
      </div>
    </main>
  )
}
