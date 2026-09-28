import { PowerIcon } from "./Icons";

export type ScreenState = "off" | "nodevice" | "active";

type ScreenContent = {
  title: string;
  accent: string;
  body: string;
  status?: string;
  button: string;
  buttonTone: "light" | "dark";
};

export const screens: Record<ScreenState, ScreenContent> = {
  off: {
    title: "Tu audio está",
    accent: "en pausa.",
    body: "Actívalo para que tu dispositivo auditivo no entre y salga del streaming en los silencios.",
    button: "Activar",
    buttonTone: "light",
  },
  nodevice: {
    title: "Dispositivo auditivo",
    accent: "no conectado.",
    body: "Conecta tu dispositivo auditivo desde los ajustes de Bluetooth del iPhone. Después, vuelve a Wallas ON.",
    button: "Abrir ajustes de Bluetooth",
    buttonTone: "light",
  },
  active: {
    title: "Tu audio está",
    accent: "activo.",
    body: "La sesión de audio se mantiene abierta hasta que la detengas, aunque no suene nada.",
    status: "Activo durante 1 h 43 min",
    button: "Detener",
    buttonTone: "dark",
  },
};

export function screenLabel(state: ScreenState) {
  const s = screens[state];
  return `Pantalla de Wallas ON: ${s.title} ${s.accent} ${s.status ? s.status + "." : ""}`.trim();
}

/** Contenido de una pantalla de la app (sin el marco del teléfono). */
export function AppScreen({ state, className }: { state: ScreenState; className?: string }) {
  const s = screens[state];
  return (
    <div className={`app-screen ${className ?? ""}`} data-state={state}>
      <div className="app-bar">
        <span className="app-bar__name">Wallas ON</span>
        <span className="app-bar__link">Ajustes</span>
      </div>
      <p className="app-title">
        {s.title}
        <br />
        <span className={`app-title__accent app-title__accent--${state}`}>{s.accent}</span>
      </p>
      <p className="app-body">{s.body}</p>
      {s.status && (
        <p className="app-status">
          <span className="dot dot--ok" />
          {s.status}
        </p>
      )}
      <span className={`app-button app-button--${s.buttonTone}`}>
        <PowerIcon size={14} />
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

export function Phone({ state, className }: { state: ScreenState; className?: string }) {
  return (
    <PhoneFrame label={screenLabel(state)} className={className}>
      <AppScreen state={state} />
    </PhoneFrame>
  );
}
