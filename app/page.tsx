import Link from "next/link";
import { DownloadButton } from "@/components/Chrome";
import { ArrowDownIcon, ChevronRightIcon } from "@/components/Icons";
import { LogoMark } from "@/components/Logo";
import { Phone } from "@/components/Phone";
import { ProductStates } from "@/components/ProductStates";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1 id="hero-title" className="display">
              Tu audio.
              <br />
              Siempre <span className="accent-ok">activo.</span>
            </h1>
            <p className="body-lg hero__sub">
              Wallas ON mantiene abierta la sesión de audio de tu dispositivo auditivo, incluso durante los
              silencios.
            </p>
            <div className="actions">
              <DownloadButton />
              <Link href="#como-funciona" className="btn btn--ghost">
                Cómo funciona
                <ArrowDownIcon />
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <Phone state="active" className="hero__phone" />
          </div>
        </div>
      </section>

      {/* El problema */}
      <section className="section" aria-labelledby="problema-title">
        <div className="container">
          <div className="split" data-reveal>
            <div>
              <p className="eyebrow">El problema</p>
              <h2 id="problema-title" className="h1">
                El silencio no debería
                <br />
                <span className="accent-muted">desconectarte.</span>
              </h2>
            </div>
            <div className="prose">
              <p className="body-lg">
                Algunos dispositivos auditivos pueden salir del streaming cuando el audio se detiene o hay
                momentos de silencio.
              </p>
              <p className="body-lg">
                Wallas ON mantiene la sesión abierta para que no tengas que pensar constantemente en volver a
                conectarla.
              </p>
            </div>
          </div>

          <figure className="flow" data-reveal>
            <figcaption className="sr-only">
              Sin Wallas ON: audio, silencio, interrupción y de nuevo audio. Con Wallas ON: el audio continúa
              sin cortes y la sesión sigue activa incluso durante el silencio.
            </figcaption>

            <div className="flow__row" aria-hidden="true">
              <p className="flow__label">Sin Wallas ON</p>
              <div className="flow__track">
                <span className="seg seg--audio" style={{ flex: 3 }} />
                <span className="seg seg--silence" style={{ flex: 2 }} />
                <span className="seg seg--break" style={{ flex: 2 }} />
                <span className="seg seg--audio" style={{ flex: 3 }} />
              </div>
              <ol className="flow__legend">
                <li style={{ flex: 3 }}>Audio</li>
                <li style={{ flex: 2 }}>silencio</li>
                <li style={{ flex: 2 }} className="flow__warn">interrupción</li>
                <li style={{ flex: 3 }}>audio</li>
              </ol>
            </div>

            <div className="flow__row" aria-hidden="true">
              <p className="flow__label flow__label--on">Con Wallas ON</p>
              <div className="flow__track">
                <span className="seg seg--on" style={{ flex: 1 }} />
              </div>
              <p className="status-label flow__status">
                <span className="dot dot--ok" />
                Sesión activa incluso durante el silencio.
              </p>
            </div>
          </figure>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="section" aria-labelledby="como-title">
        <div className="container">
          <div data-reveal>
            <p className="eyebrow">Cómo funciona</p>
            <h2 id="como-title" className="h1">
              Tres pasos.
              <br />
              <span className="accent-muted">Nada más.</span>
            </h2>
          </div>
          <ol className="steps" data-reveal>
            <li className="step">
              <span className="step__num">01</span>
              <h3 className="h3">Conecta tu dispositivo auditivo.</h3>
              <p className="step__text">Hazlo normalmente desde los ajustes de Bluetooth.</p>
            </li>
            <li className="step">
              <span className="step__num">02</span>
              <h3 className="h3">Activa Wallas ON.</h3>
              <p className="step__text">Un toque. Nada más.</p>
            </li>
            <li className="step">
              <span className="step__num">03</span>
              <h3 className="h3">Sigue con tu día.</h3>
              <p className="step__text">La sesión permanece activa hasta que tú decidas detenerla.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Producto */}
      <section className="section" aria-labelledby="producto-title">
        <div className="container">
          <div data-reveal>
            <p className="eyebrow">Producto</p>
            <h2 id="producto-title" className="h1">
              Una app que hace
              <br />
              una cosa. <span className="accent-muted">Y la hace bien.</span>
            </h2>
          </div>
          <ProductStates />
        </div>
      </section>

      {/* Compatibilidad */}
      <section id="compatibilidad" className="section" aria-labelledby="compat-title">
        <div className="container split" data-reveal>
          <div>
            <p className="eyebrow">Compatibilidad</p>
            <h2 id="compat-title" className="h1">
              Hecho para escuchar
              <br />
              <span className="accent-muted">a tu manera.</span>
            </h2>
          </div>
          <div className="prose">
            <p className="body-lg">
              Wallas ON está pensado para personas que utilizan dispositivos auditivos con streaming de audio
              compatible.
            </p>
            <p className="body-lg">Consulta los dispositivos que hemos verificado.</p>
            <div className="actions">
              <Link href="/compatibilidad" className="btn btn--outline">
                Ver compatibilidad
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
            <p className="eyebrow">Filosofía</p>
            <h2 id="filosofia-title" className="h1">
              La tecnología debería
              <br />
              <span className="accent-muted">adaptarse a ti.</span>
            </h2>
          </div>
          <div className="prose">
            <p className="body-lg">
              Wallas ON nació de una necesidad sencilla: mantener el audio disponible sin tener que pensar
              constantemente en la conexión.
            </p>
            <ul className="principles">
              <li>Menos interrupciones.</li>
              <li>Menos pasos.</li>
              <li>Más control.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="descargar" className="section final" aria-labelledby="final-title">
        <div className="container" data-reveal>
          <p className="eyebrow final__brand">
            <LogoMark size={28} />
            Wallas ON
          </p>
          <h2 id="final-title" className="display">
            Mantén tu audio
            <br />
            <span className="accent-ok">activo.</span>
          </h2>
          <div className="actions final__actions">
            <DownloadButton fallbackHref={null} />
          </div>
          <p className="small final__note">
            {site.downloadUrl ? `Disponible para ${site.platform}.` : `Próximamente para ${site.platform}.`}
          </p>
        </div>
      </section>
    </>
  );
}
