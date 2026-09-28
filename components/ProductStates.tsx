"use client";

import { useEffect, useRef, useState } from "react";
import { AppScreen, Phone, PhoneFrame, type ScreenState } from "./Phone";

const steps: { state: ScreenState; label: string; tone: "off" | "warn" | "ok"; text: string }[] = [
  {
    state: "off",
    label: "Apagado",
    tone: "off",
    text: "Cuando está en pausa, lo ves al instante. Un toque y vuelve a estar activo.",
  },
  {
    state: "nodevice",
    label: "Sin dispositivo",
    tone: "warn",
    text: "Si tu dispositivo auditivo no está conectado, te lo dice. Y te lleva directo a los ajustes de Bluetooth.",
  },
  {
    state: "active",
    label: "Activo",
    tone: "ok",
    text: "Mientras está activo, la sesión permanece abierta. Aunque no suene nada.",
  },
];

export function ProductStates() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="product">
      <ol className="product__steps">
        {steps.map((s, i) => (
          <li
            key={s.state}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className={`product__step ${i === active ? "is-active" : ""}`}
          >
            <div className="product__text">
              <h3 className="status-label">
                <span className={`dot dot--${s.tone}`} />
                {s.label}
              </h3>
              <p className="body-lg product__desc">{s.text}</p>
            </div>
            <Phone state={s.state} className="product__inline-phone" />
          </li>
        ))}
      </ol>

      <div className="product__sticky" aria-hidden="true">
        <PhoneFrame>
          {steps.map((s, i) => (
            <AppScreen
              key={s.state}
              state={s.state}
              className={`app-screen--layer ${i === active ? "is-active" : ""}`}
            />
          ))}
        </PhoneFrame>
      </div>
    </div>
  );
}
