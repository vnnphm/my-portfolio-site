import { socials } from "../content";

export default function Footer({ dark }: { dark: boolean }) {
  return (
    <footer
      className={`mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-10 ${
        dark ? "text-white/60" : "text-[#181717]/70"
      }`}
    >
      <span>Vinny Pham, 2026</span>
      <div className="flex gap-6">
        {socials.map((s) => (
          <a
            key={s.k}
            href={s.href}
            className={`transition-colors ${
              dark ? "hover:text-white" : "hover:text-black"
            }`}
          >
            {s.k}
          </a>
        ))}
      </div>
    </footer>
  );
}
