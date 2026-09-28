import { dictionaries, type Lang, type ScreenState } from "@/lib/i18n";
import { AudioOutputIcon, EarIcon, PowerIcon } from "./Icons";

export function screenLabel(lang: Lang, state: ScreenState) {
  const { a11y, app } = dictionaries[lang];
  const s = app.screens[state];
  return [a11y.screenPrefix, s.title, s.accent, app.device + ".", s.status ? s.status + "." : ""].join(" ").trim();
}

/** Contenido de una pantalla de la app (sin el marco del teléfono). */
export function AppScreen({ lang, state, className }: { lang: Lang; state: ScreenState; className?: string }) {
  const { app } = dictionaries[lang];
  const s = app.screens[state];
  const Icon = s.icon === "airplay" ? AudioOutputIcon : PowerIcon;
  return (
    <div className={`app-screen ${className ?? ""}`} data-state={state}>
      <div className="app-bar">
        <span className="app-bar__name">{app.name}</span>
        <span className="app-bar__link">{app.settings}</span>
      </div>
      <p className="app-title">
        {s.title}
        <br />
        <span className={`app-title__accent app-title__accent--${state}`}>{s.accent}</span>
      </p>
      <p className="app-body">{s.body}</p>
      <p className="app-device">
        <EarIcon />
        {app.device}
      </p>
      {s.status && (
        <p className="app-status">
          <span className="dot dot--ok" />
          {s.status}
        </p>
      )}
      <span className={`app-button app-button--${s.tone}`}>
        <Icon />
        {s.button}
      </span>
    </div>
  );
}

/** Marco de iPhone construido en CSS. Escala con la variable --phone-w. */
export function PhoneFrame({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`phone ${className ?? ""}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <span className="phone__island" />
          <span className="phone__indicators">
            <svg viewBox="0 0 18 12" width="1.1em" height="0.75em" fill="currentColor">
              <rect x="0" y="8" width="3" height="4" rx="0.7" />
              <rect x="5" y="5.5" width="3" height="6.5" rx="0.7" />
              <rect x="10" y="3" width="3" height="9" rx="0.7" />
              <rect x="15" y="0" width="3" height="12" rx="0.7" />
            </svg>
            <svg viewBox="0 0 27 13" width="1.6em" height="0.78em">
              <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" fill="none" stroke="currentColor" opacity="0.4" />
              <rect x="2.5" y="2.5" width="19" height="8" rx="2" fill="currentColor" />
              <rect x="25" y="4.5" width="1.6" height="4" rx="0.8" fill="currentColor" opacity="0.4" />
            </svg>
          </span>
        </div>
        {children}
        <span className="phone__home" />
      </div>
    </div>
  );
}

export function Phone({ lang, state, className }: { lang: Lang; state: ScreenState; className?: string }) {
  return (
    <PhoneFrame label={screenLabel(lang, state)} className={className}>
      <AppScreen lang={lang} state={state} />
    </PhoneFrame>
  );
}
