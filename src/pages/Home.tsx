import Decor from "../components/Decor";
import ArrowLink from "../components/ArrowLink";
import { projects, stack, email, socials, resume } from "../content";

export default function Home({ dark }: { dark: boolean }) {
  const github = socials.find((s) => s.k === "GitHub");
  const linkedin = socials.find((s) => s.k === "LinkedIn");
  const border = dark ? "border-white/10" : "border-black/10";
  const muted = dark ? "text-white/60" : "text-black/60";

  return (
    <main id="top" className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-10">
      {/* Hero */}
      <section className="relative pt-20">
        <Decor />
        <h1 className="max-w-2xl text-4xl font-medium leading-tight sm:text-6xl">
          Hey there
          <br />
          Welcome to my world
          <br />
          I'm Vinny Pham
        </h1>

        <p id="about" className="mt-16 max-w-md scroll-mt-24 text-2xl font-medium sm:mt-24 sm:text-3xl">
          Full Stack Software Developer, Tea Enjoyer
        </p>
        <div className="mt-14 flex flex-col gap-5">
          {stack.map((group) => (
            <div key={group.label} className="grid grid-cols-[8.5rem_1fr] items-start gap-4">
              <span className={dark ? "text-white/50" : "text-black/50"}>{group.label}</span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                      dark
                        ? "border-white/15 bg-white/5 hover:bg-white/10"
                        : "border-black/10 bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-10 h-80 w-full overflow-hidden rounded-2xl sm:h-110">
          <img
            src={greenFern}
            alt="A close up photo of ferns, a small reminder to slow down"
            className="h-full w-full object-cover"
          />
        </div>
      */}
      </section> 

    

      {/* Work */}
      <section id="work" className="mt-28 scroll-mt-24">
        <h2 className="mb-8 text-2xl font-medium sm:text-3xl">Work</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const link: React.ComponentProps<"a"> = p.repo
              ? { href: p.repo, target: "_blank", rel: "noreferrer" }
              : {};

            return (
              <div key={p.slug} className="text-left">
                <a
                  {...link}
                  aria-label={p.repo ? `${p.name} on GitHub` : undefined}
                  className="block aspect-352/204 w-full overflow-hidden rounded-t-lg"
                >
                  <img
                    src={p.thumb}
                    alt={p.name}
                    className={`h-full w-full object-cover transition-transform duration-300 ${
                      p.repo ? "hover:scale-105" : ""
                    }`}
                  />
                </a>
                <div className={`flex items-center justify-between border-t px-1 py-2.5 text-[15px] ${border}`}>
                  <a {...link} className={`font-medium ${p.repo ? "hover:underline" : ""}`}>
                    {p.name}
                  </a>
                  <div className={`flex items-center gap-3 ${dark ? "text-white/50" : "text-black/50"}`}>
                    {p.devpost && (
                      <a
                        href={p.devpost}
                        target="_blank"
                        rel="noreferrer"
                        className={`underline-offset-2 hover:underline ${dark ? "hover:text-white" : "hover:text-black"}`}
                      >
                        Devpost ↗
                      </a>
                    )}
                    <span>{p.year}</span>
                  </div>
                </div>
                {p.award && (
                  <div className="mt-1 px-1">
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                        dark
                          ? "border-amber-300/30 bg-amber-300/10 text-amber-200"
                          : "border-amber-600/30 bg-amber-100 text-amber-800"
                      }`}
                    >
                      🏆 {p.award}
                    </span>
                  </div>
                )}
                <p className={`mt-1 px-1 text-sm ${muted}`}>{p.note}</p>
                <div className="mt-2 flex flex-wrap gap-1.5 px-1">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2 py-0.5 text-xs ${
                        dark ? "border-white/15 text-white/60" : "border-black/15 text-black/60"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-28 scroll-mt-24">
        <h2 className="mb-8 text-2xl font-medium sm:text-3xl">Contact</h2>

        <div className="flex flex-col gap-4 text-lg sm:text-xl">
          <div className="flex flex-wrap items-baseline gap-2">
            <ArrowLink href={`mailto:${email}`} dark={dark}>
              Email me
            </ArrowLink>
            <span className={dark ? "text-white/70" : "text-black/70"}>{email}</span>
          </div>
          {github && (
            <div className="flex flex-wrap items-baseline gap-2">
              <ArrowLink href={github.href} dark={dark}>
                Find me on {github.k}
              </ArrowLink>
              <span className={dark ? "text-white/70" : "text-black/70"}>{github.v}</span>
            </div>
          )}
          {linkedin && (
            <div className="flex flex-wrap items-baseline gap-2">
              <ArrowLink href={linkedin.href} dark={dark}>
                Connect on {linkedin.k}
              </ArrowLink>
              <span className={dark ? "text-white/70" : "text-black/70"}>{linkedin.v}</span>
            </div>
          )}
          <div className="flex flex-wrap items-baseline gap-2">
            <ArrowLink href={resume} dark={dark} newTab>
              View my resume
            </ArrowLink>
            <span className={dark ? "text-white/70" : "text-black/70"}>PDF</span>
          </div>
        </div>

        <p className={`mt-8 max-w-md ${dark ? "text-white/50" : "text-black/50"}`}>
          I will get to replying as soon as possible!
        </p>
      </section>
    </main>
  );
}
