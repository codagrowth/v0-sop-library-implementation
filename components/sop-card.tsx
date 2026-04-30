import Link from "next/link"
import { FileText, Eye } from "lucide-react"

interface SOPCardProps {
  letter: string
  tool: string
  title: string
  audience: string
  href: string
}

export function SOPCard({ letter, tool, title, audience, href }: SOPCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.14)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.01)] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(79,233,208,0.5)]">
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(79,233,208,0.15),transparent_70%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      
      <Link href={href} className="block">
        {/* SOP Letter */}
        <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.15em] text-[#4FE9D0]">
          SOP · {letter}
        </div>
        
        {/* Tool Name */}
        <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-[32px] font-bold leading-tight tracking-tight text-white">
          {tool}
        </h2>
        
        {/* Title */}
        <p className="mt-1.5 font-[family-name:var(--font-space-grotesk)] text-base font-medium leading-snug text-[#9AA6BF]">
          {title}
        </p>
      </Link>
      
      {/* Bottom Row: Audience + Actions */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-[rgba(255,255,255,0.08)] pt-5">
        <div className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#667192]">
          {audience}
        </div>
        
        <div className="flex shrink-0 gap-2">
          <Link
            href={href}
            className="group/btn inline-flex items-center gap-1.5 rounded-[9px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.04)] px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9AA6BF] transition-all hover:border-[rgba(255,255,255,0.25)] hover:text-white"
          >
            <Eye className="h-3.5 w-3.5" />
            View
          </Link>
          <Link
            href={`${href}/pdf`}
            className="inline-flex items-center gap-1.5 rounded-[9px] border border-[rgba(79,233,208,0.35)] bg-[rgba(79,233,208,0.1)] px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4FE9D0] transition-all hover:border-[rgba(79,233,208,0.6)] hover:bg-[rgba(79,233,208,0.18)]"
          >
            <FileText className="h-3.5 w-3.5" />
            PDF
          </Link>
        </div>
      </div>
    </div>
  )
}
