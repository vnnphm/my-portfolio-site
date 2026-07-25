import type { ReactNode } from "react";
import arrowUp from "../images/arrow-up.svg";

export default function ArrowLink({
  href,
  dark,
  newTab,
  children,
}: {
  href: string;
  dark?: boolean;
  newTab?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className={`group inline-flex cursor-pointer items-center gap-1.5 transition-colors ${
        dark ? "text-white hover:text-white/70" : "text-[#181717] hover:text-black/60"
      }`}
    >
      <span className="underline underline-offset-2">{children}</span>
      <img
        src={arrowUp}
        alt=""
        className={`h-2.5 w-2.5 rotate-45 opacity-70 group-hover:opacity-100 ${
          dark ? "invert" : ""
        }`}
      />
    </a>
  );
}
