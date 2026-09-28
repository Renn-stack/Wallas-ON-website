import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad de Wallas ON.",
};

export default function Privacidad() {
  return (
    <section className="page" aria-labelledby="priv-title">
      <div className="container">
        <div className="page__head">
          <p className="eyebrow">Privacidad</p>
          <h1 id="priv-title" className="h1">
            Tu privacidad,
            <br />
            <span className="accent-muted">con claridad.</span>
          </h1>
          <p className="body-lg">
            Estamos preparando la política de privacidad completa de Wallas ON. La publicaremos aquí antes
            del lanzamiento.
          </p>
        </div>
      </div>
    </section>
  );
}
