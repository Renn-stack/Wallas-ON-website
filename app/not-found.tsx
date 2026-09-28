import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page" aria-labelledby="nf-title">
      <div className="container page__head">
        <h1 id="nf-title" className="h1">
          Página
          <br />
          <span className="accent-warn">no encontrada.</span>
        </h1>
        <p className="body-lg">La página que buscas no existe o ha cambiado de lugar.</p>
        <div className="actions">
          <Link href="/" className="btn btn--outline">Volver al inicio</Link>
        </div>
      </div>
    </section>
  );
}
