export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-5 py-10 md:px-10">
      
      <div className="flex min-h-[180px] flex-col justify-between gap-10 md:flex-row md:items-end">
        
        <div className="relative z-10">
          <div className="text-lg font-semibold tracking-[-0.03em]">
            DIV LABS
          </div>

          <p className="mt-3 max-w-xs text-sm text-white/30">
            Digital products, designed to move business forward.
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-2 text-left md:text-right">
          <a
            href="mailto:hello@divlabs.com"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            hello@divlabs.com
          </a>

          <span className="font-mono text-[9px] text-white/20">
            © 2026 DIV LABS
          </span>
        </div>

        {/* FOOTER IMAGE */}
        <div className="pointer-events-none absolute right-0 top-0 flex h-full items-center">
          <img
            src="/footer.png"
            alt=""
            aria-hidden="true"
            className="
              h-[125%]
              w-auto
              max-w-none
              translate-x-[12%]
              object-contain
              opacity-90
              md:h-[140%]
              md:translate-x-[8%]
            "
          />
        </div>

      </div>

    </footer>
  );
}