import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soporte",
  description: "Ayuda y preguntas frecuentes sobre Wallas ON.",
};

const faqs = [
  {
    q: "¿Qué hace Wallas ON?",
    a: "Mantiene abierta la sesión de audio de tu dispositivo auditivo, incluso cuando no suena nada. Así se evitan interrupciones del streaming durante los silencios.",
  },
  {
    q: "¿Cómo lo activo?",
    a: "Conecta tu dispositivo auditivo desde los ajustes de Bluetooth, abre Wallas ON y toca Activar. Después puedes seguir con tu día.",
  },
  {
    q: "La app dice “Dispositivo auditivo no conectado.”",
    a: "Wallas ON no detecta tu dispositivo. Conéctalo desde los ajustes de Bluetooth del iPhone y vuelve a la app.",
  },
  {
    q: "¿Cómo lo detengo?",
    a: "Abre Wallas ON y toca Detener. La sesión se cierra en ese momento.",
  },
  {
    q: "¿Es compatible con mi dispositivo?",
    a: "Wallas ON está pensado para dispositivos auditivos con streaming de audio compatible. Consulta la lista de dispositivos verificados.",
    link: { href: "/compatibilidad", label: "Ver compatibilidad" },
  },
];

export default function Soporte() {
  return (
    <section className="page" aria-labelledby="soporte-title">
      <div className="container">
        <div className="page__head">
          <p className="eyebrow">Soporte</p>
          <h1 id="soporte-title" className="h1">
            ¿Necesitas
            <br />
            <span className="accent-muted">ayuda?</span>
          </h1>
          <p className="body-lg">Respuestas breves a las preguntas más comunes.</p>
        </div>

        <div className="page__body">
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <ChevronRightIcon />
                </summary>
                <p>
                  {f.a}{" "}
                  {f.link && (
                    <Link href={f.link.href} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
                      {f.link.label}
                    </Link>
                  )}
                </p>
              </details>
            ))}
          </div>

          {site.supportEmail && (
            <div className="prose">
              <h2 className="h2">Escríbenos.</h2>
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
