import Link from "next/link";
import { anchors, anchorHref, dictionaries, routes, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { DownloadButton } from "./Chrome";
import { ArrowDownIcon, ChevronRightIcon } from "./Icons";
import { LogoMark } from "./Logo";
import { Phone } from "./Phone";
import { ProductStates } from "./ProductStates";

/** Tramos del esquema "Sin Wallas On": entorno interrumpido por streaming breve. */
const withoutBlocks: ["ambient" | "brief", number][] = [
  ["ambient", 7],
  ["brief", 3],
  ["ambient", 7],
  ["brief", 2.8],
  ["ambient", 6],
  ["brief", 4],
  ["ambient", 7],
];

export function HomePage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const a = anchors[lang];

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1 id="hero-title" className="display">
              {t.hero.line1}
              <br />
              {t.hero.line2} <span className="accent-ok">{t.hero.accent}</span>
            </h1>
            <p className="body-lg hero__sub">{t.hero.sub}</p>
            <div className="actions">
              <DownloadButton lang={lang} fallbackHref={anchorHref(lang, "download")} />
              <Link href={`#${a.how}`} className="btn btn--ghost">
                {t.cta.how}
                <ArrowDownIcon />
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <Phone lang={lang} state="active" className="hero__phone" />
          </div>
        </div>
      </section>

      {/* El problema */}
      <section className="section" aria-labelledby="problema-title">
        <div className="container">
          <div className="split" data-reveal>
            <div>
              <p className="eyebrow">{t.problem.eyebrow}</p>
              <h2 id="problema-title" className="h1">
                {t.problem.title}
                <br />
                <span className="accent-muted">{t.problem.accent}</span>
              </h2>
            </div>
            <div className="prose">
              <p className="body-lg">{t.problem.intro}</p>
              <ol className="cycle">
                {t.problem.steps.map((step, i) => (
                  <li key={i}>
                    <span className="cycle__num">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="body-lg problem__repeat">{t.problem.repeat}</p>
              <p className="body-lg">{t.problem.solution}</p>
            </div>
          </div>

          <figure className="flow" data-reveal>
            <figcaption className="sr-only">{t.problem.caption}</figcaption>

            <div className="flow__row" aria-hidden="true">
              <p className="flow__label">{t.problem.without}</p>
              <div className="flow__bar">
                {withoutBlocks.map(([kind, grow], i) => (
                  <span key={i} className={`block block--${kind}`} style={{ flexGrow: grow }} />
                ))}
              </div>
            </div>

            <div className="flow__row" aria-hidden="true">
              <p className="flow__label">{t.problem.with}</p>
              <div className="flow__bar">
                <span className="block block--continuous" style={{ flexGrow: 1 }} />
              </div>
            </div>

            <ul className="flow__legend" aria-hidden="true">
              <li><span className="block block--ambient" />{t.problem.legend.ambient}</li>
              <li><span className="block block--brief" />{t.problem.legend.brief}</li>
              <li><span className="block block--continuous" />{t.problem.legend.continuous}</li>
            </ul>
          </figure>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id={a.how} className="section" aria-labelledby="como-title">
        <div className="container">
          <div data-reveal>
            <p className="eyebrow">{t.how.eyebrow}</p>
            <h2 id="como-title" className="h1">
              {t.how.title}
              <br />
              <span className="accent-muted">{t.how.accent}</span>
            </h2>
          </div>
          <ol className="steps" data-reveal>
            {t.how.steps.map((s, i) => (
              <li key={i} className="step">
                <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Producto */}
      <section className="section" aria-labelledby="producto-title">
        <div className="container">
          <div data-reveal>
            <p className="eyebrow">{t.product.eyebrow}</p>
            <h2 id="producto-title" className="h1">
              {t.product.title1}
              <br />
              {t.product.title2}
              <br />
              <span className="accent-muted">{t.product.accent}</span>
            </h2>
          </div>
          <ProductStates lang={lang} />
        </div>
      </section>

      {/* Compatibilidad */}
      <section id={a.compat} className="section" aria-labelledby="compat-title">
        <div className="container split" data-reveal>
          <div>
            <p className="eyebrow">{t.compat.eyebrow}</p>
            <h2 id="compat-title" className="h1">
              {t.compat.title}
              <br />
              <span className="accent-muted">{t.compat.accent}</span>
            </h2>
          </div>
          <div className="prose">
            <p className="body-lg">{t.compat.p1}</p>
            <p className="body-lg">{t.compat.p2}</p>
            <div className="actions">
              <Link href={routes[lang].compat} className="btn btn--outline">
                {t.cta.compat}
                <ChevronRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="section" aria-labelledby="filosofia-title">
        <div className="container split" data-reveal>
          <div>
            <p className="eyebrow">{t.philosophy.eyebrow}</p>
            <h2 id="filosofia-title" className="h1">
              {t.philosophy.title}
              <br />
              <span className="accent-muted">{t.philosophy.accent}</span>
            </h2>
          </div>
          <div className="prose">
            <p className="body-lg">{t.philosophy.p}</p>
            <ul className="principles">
              {t.philosophy.principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id={a.download} className="section final" aria-labelledby="final-title">
        <div className="container" data-reveal>
          <p className="eyebrow final__brand">
            <LogoMark size={28} />
            Wallas On
          </p>
          <h2 id="final-title" className="display">
            {t.final.title}
            <br />
            <span className="accent-ok">{t.final.accent}</span>
          </h2>
          <div className="actions final__actions">
            <DownloadButton lang={lang} fallbackHref={null} />
          </div>
          <p className="small final__note">
            {site.downloadUrl ? t.final.available(site.platform) : t.final.soon(site.platform)}
          </p>
        </div>
      </section>
    </>
  );
}
