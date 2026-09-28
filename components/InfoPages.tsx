import Link from "next/link";
import { dictionaries, routes, type Lang } from "@/lib/i18n";
import { site, verifiedDevices } from "@/lib/site";
import { ChevronRightIcon } from "./Icons";

export function CompatPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].compatPage;
  return (
    <section className="page" aria-labelledby="compat-page-title">
      <div className="container">
        <div className="page__head">
          <p className="eyebrow">{t.title}</p>
          <h1 id="compat-page-title" className="h1">
            {t.heading}
            <br />
            <span className="accent-muted">{t.accent}</span>
          </h1>
          <p className="body-lg">{t.intro}</p>
        </div>

        <div className="page__body">
          {verifiedDevices.length > 0 ? (
            <ul className="card" aria-label={t.listLabel}>
              {verifiedDevices.map((d) => (
                <li key={d.name} className="list-row">
                  <span>{d.name}</span>
                  <span className="list-row__meta status-label">
                    <span className="dot dot--ok" />
                    {t.verified}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="card">
              <p className="status-label">
                <span className="dot dot--warn" />
                {t.pending}
              </p>
              <p className="small card__text">{t.pendingText}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function PrivacyPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].privacyPage;
  return (
    <section className="page" aria-labelledby="priv-title">
      <div className="container">
        <div className="page__head">
          <p className="eyebrow">{t.title}</p>
          <h1 id="priv-title" className="h1">
            {t.heading}
            <br />
            <span className="accent-muted">{t.accent}</span>
          </h1>
          <p className="body-lg">{t.intro}</p>
        </div>
      </div>
    </section>
  );
}

export function SupportPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].supportPage;
  const cta = dictionaries[lang].cta;
  return (
    <section className="page" aria-labelledby="soporte-title">
      <div className="container">
        <div className="page__head">
          <p className="eyebrow">{t.title}</p>
          <h1 id="soporte-title" className="h1">
            {t.heading}
            <br />
            <span className="accent-muted">{t.accent}</span>
          </h1>
          <p className="body-lg">{t.intro}</p>
        </div>

        <div className="page__body">
          <div className="faq">
            {t.faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <ChevronRightIcon />
                </summary>
                <p>
                  {f.a}{" "}
                  {f.link && (
                    <Link href={routes[lang][f.link]} className="text-link">
                      {cta.compat}
                    </Link>
                  )}
                </p>
              </details>
            ))}
          </div>

          {site.supportEmail && (
            <div className="prose">
              <h2 className="h2">{t.contact}</h2>
              <p className="body-lg">
                <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
