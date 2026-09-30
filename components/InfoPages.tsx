import Link from "next/link";
import { dictionaries, routes, type Lang } from "@/lib/i18n";
import { site, verifiedDevices } from "@/lib/site";
import { ChevronRightIcon, MailIcon } from "./Icons";

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
          <p className="body-lg policy__lead">{t.intro}</p>
          <p className="label">{t.updated}</p>
        </div>

        <div className="page__body policy">
          {t.sections.map((sec) => (
            <section key={sec.title} className="policy__section">
              <h2 className="policy__title">{sec.title}</h2>
              <div className="policy__body">
                {sec.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
          {site.supportEmail && (
            <p className="policy__contact">
              {t.contactLabel}{" "}
              <a href={`mailto:${site.supportEmail}`} className="text-link">
                {site.supportEmail}
              </a>
            </p>
          )}
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
          {site.supportEmail && (
            <div className="card contact">
              <h2 className="h2">{t.contact}</h2>
              <p className="contact__text">{t.contactText}</p>
              <p className="contact__email">{site.supportEmail}</p>
              <div className="actions">
                <a href={`mailto:${site.supportEmail}`} className="btn btn--primary">
                  <MailIcon />
                  {t.contactCta}
                </a>
              </div>
            </div>
          )}

          <div>
            <h2 className="policy__title faq__title">{t.faqTitle}</h2>
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
          </div>
        </div>
      </div>
    </section>
  );
}
