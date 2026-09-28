"use client";

import { useEffect, useRef, useState } from "react";
import { dictionaries, type Lang } from "@/lib/i18n";
import { AppScreen, Phone, PhoneFrame } from "./Phone";

export function ProductStates({ lang }: { lang: Lang }) {
  const steps = dictionaries[lang].product.steps;
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
            <Phone lang={lang} state={s.state} className="product__inline-phone" />
          </li>
        ))}
      </ol>

      <div className="product__sticky" aria-hidden="true">
        <PhoneFrame>
          {steps.map((s, i) => (
            <AppScreen
              key={s.state}
              lang={lang}
              state={s.state}
              className={`app-screen--layer ${i === active ? "is-active" : ""}`}
            />
          ))}
        </PhoneFrame>
      </div>
    </div>
  );
}
