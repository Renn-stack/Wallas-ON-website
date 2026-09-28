import type { Metadata } from "next";
import { verifiedDevices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compatibilidad",
  description: "Dispositivos auditivos verificados con Wallas ON.",
};

export default function Compatibilidad() {
  return (
    <section className="page" aria-labelledby="compat-page-title">
      <div className="container">
        <div className="page__head">
          <p className="eyebrow">Compatibilidad</p>
          <h1 id="compat-page-title" className="h1">
            Dispositivos
            <br />
            <span className="accent-muted">verificados.</span>
          </h1>
          <p className="body-lg">
            Wallas ON está pensado para dispositivos auditivos con streaming de audio compatible. Aquí solo
            aparecen los modelos que hemos probado.
          </p>
        </div>

        <div className="page__body">
          {verifiedDevices.length > 0 ? (
            <ul className="card" aria-label="Dispositivos verificados">
              {verifiedDevices.map((d) => (
                <li key={d.name} className="list-row">
                  <span>{d.name}</span>
                  <span className="list-row__meta status-label">
                    <span className="dot dot--ok" />
                    Verificado
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="card">
              <p className="status-label">
                <span className="dot dot--warn" />
                Verificación en curso
              </p>
              <p className="small" style={{ color: "var(--fg-2)", marginTop: 12 }}>
                Todavía estamos verificando dispositivos. Publicaremos la lista aquí en cuanto esté lista.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
