import logoMark from "../images/signature.svg";
import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun-a.svg";
import { resume } from "../content";

export default function Nav({
  dark,
  onToggleTheme,
}: {
  dark: boolean;
  onToggleTheme: () => void;
}) {
  const linkClass = dark
    ? "cursor-pointer text-white transition-colors hover:text-white/70"
    : "cursor-pointer text-[#181717] transition-colors hover:text-black/60";

  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-12 sm:px-10">
      <a href="#top" className="block h-14 w-14 cursor-pointer" aria-label="Home">
        <img
          src={logoMark}
          alt="Vinny Pham"
          className={`h-full w-full object-contain ${dark ? "invert" : ""}`}
        />
      </a>
      <div className="flex items-center gap-8 text-[17px]">
        <a href="#about" className={linkClass}>
          About
        </a>
        <a href="#work" className={linkClass}>
          Work
        </a>
        <a href="#contact" className={linkClass}>
          Contact
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className={`cursor-pointer rounded-full border px-4 py-1.5 transition-colors ${
            dark
              ? "border-white/25 text-white hover:bg-white/10"
              : "border-black/20 text-[#181717] hover:bg-black/5"
          }`}
        >
          Resume
        </a>
        <button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        >
          <img
            src={dark ? iconSun : iconMoon}
            alt=""
            className={`h-[21px] w-[21px] ${dark ? "invert" : ""}`}
          />
        </button>
      </div>
    </nav>
  );
}
