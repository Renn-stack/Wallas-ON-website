export type Lang = "es" | "en";
export const langs: Lang[] = ["es", "en"];

export type ScreenState = "off" | "bluetooth" | "output" | "active";

/** Rutas equivalentes en cada idioma. */
export const routes = {
  es: { home: "/", compat: "/compatibilidad", support: "/soporte", privacy: "/privacidad" },
  en: { home: "/en", compat: "/en/compatibility", support: "/en/support", privacy: "/en/privacy" },
} as const;

export type RouteKey = keyof (typeof routes)["es"];

/** Anclas de las secciones de la home en cada idioma. */
export const anchors = {
  es: { how: "como-funciona", compat: "compatibilidad", download: "descargar" },
  en: { how: "how-it-works", compat: "compatibility", download: "download" },
} as const;

export function anchorHref(lang: Lang, key: keyof (typeof anchors)["es"]) {
  const home = routes[lang].home;
  return `${home === "/" ? "/" : home}#${anchors[lang][key]}`;
}

/** Devuelve la ruta equivalente en el otro idioma (para el selector ES/EN). */
export function alternatePath(pathname: string, to: Lang): string {
  const from: Lang = to === "es" ? "en" : "es";
  const key = (Object.keys(routes[from]) as RouteKey[]).find((k) => routes[from][k] === pathname);
  return routes[to][key ?? "home"];
}

type Screen = {
  title: string;
  accent: string;
  body: string;
  button: string;
  icon: "power" | "airplay";
  tone: "light" | "dark";
  status?: string;
};

const es = {
  meta: {
    title: "Wallas ON - Tu audio. Siempre activo.",
    description:
      "Wallas ON mantiene abierta la sesión de audio de tu dispositivo auditivo, incluso durante los silencios.",
    locale: "es_ES",
  },
  a11y: {
    skip: "Saltar al contenido",
    home: "Wallas ON, inicio",
    nav: "Principal",
    footerNav: "Pie de página",
    screenPrefix: "Pantalla de Wallas ON:",
    switchTo: "Read in English",
  },
  nav: { how: "Cómo funciona", compat: "Compatibilidad", support: "Soporte", download: "Descargar" },
  cta: { download: "Descargar Wallas ON", how: "Cómo funciona", compat: "Ver compatibilidad" },
  hero: {
    line1: "Tu audio.",
    line2: "Siempre",
    accent: "activo.",
    sub: "Wallas ON mantiene abierta la sesión de audio de tu dispositivo auditivo, incluso durante los silencios.",
  },
  problem: {
    eyebrow: "El problema",
    title: "El silencio no debería",
    accent: "desconectarte.",
    p1: "Algunos dispositivos auditivos pueden salir del streaming cuando el audio se detiene o hay momentos de silencio.",
    p2: "Wallas ON mantiene la sesión abierta para que no tengas que pensar constantemente en volver a conectarla.",
    without: "Sin Wallas ON",
    with: "Con Wallas ON",
    legend: ["Audio", "silencio", "interrupción", "audio"],
    status: "Sesión activa incluso durante el silencio.",
    caption:
      "Sin Wallas ON: audio, silencio, interrupción y de nuevo audio. Con Wallas ON: el audio continúa sin cortes y la sesión sigue activa incluso durante el silencio.",
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos.",
    accent: "Nada más.",
    steps: [
      { title: "Conecta tu dispositivo auditivo.", text: "Hazlo normalmente desde los ajustes de Bluetooth." },
      { title: "Activa Wallas ON.", text: "Un toque. Nada más." },
      { title: "Sigue con tu día.", text: "La sesión permanece activa hasta que tú decidas detenerla." },
    ],
  },
  product: {
    eyebrow: "Producto",
    title1: "Una app que hace",
    title2: "una cosa.",
    accent: "Y la hace bien.",
    steps: [
      {
        state: "off",
        label: "Apagado",
        tone: "off",
        text: "Cuando está en pausa, lo ves al instante. Un toque y vuelve a estar activo.",
      },
      {
        state: "bluetooth",
        label: "Bluetooth apagado",
        tone: "warn",
        text: "Si el Bluetooth está apagado, te lo dice. Y te ofrece activarlo desde la misma pantalla.",
      },
      {
        state: "output",
        label: "Salida no seleccionada",
        tone: "warn",
        text: "Si el audio sale por la bocina del iPhone, te avisa. Y te deja elegir tu dispositivo auditivo como salida.",
      },
      {
        state: "active",
        label: "Activo",
        tone: "ok",
        text: "Mientras está activo, la sesión permanece abierta. Aunque no suene nada.",
      },
    ] as { state: ScreenState; label: string; tone: "off" | "warn" | "ok"; text: string }[],
  },
  compat: {
    eyebrow: "Compatibilidad",
    title: "Hecho para escuchar",
    accent: "a tu manera.",
    p1: "Wallas ON está pensado para personas que utilizan dispositivos auditivos con streaming de audio compatible.",
    p2: "Consulta los dispositivos que hemos verificado.",
  },
  philosophy: {
    eyebrow: "Filosofía",
    title: "La tecnología debería",
    accent: "adaptarse a ti.",
    p: "Wallas ON nació de una necesidad sencilla: mantener el audio disponible sin tener que pensar constantemente en la conexión.",
    principles: ["Menos interrupciones.", "Menos pasos.", "Más control."],
  },
  final: {
    title: "Mantén tu audio",
    accent: "activo.",
    available: (p: string) => `Disponible para ${p}.`,
    soon: (p: string) => `Próximamente para ${p}.`,
  },
  footer: { eco: "Parte del ecosistema Wallas.", compat: "Compatibilidad", privacy: "Privacidad", support: "Soporte" },
  app: {
    name: "Wallas On",
    settings: "Ajustes",
    device: "RP Hearing Device · Oído derecho",
    screens: {
      off: {
        title: "Tu audio está",
        accent: "en pausa.",
        body: "Actívalo para que tu dispositivo auditivo no entre y salga del streaming en los silencios.",
        button: "Activar",
        icon: "power",
        tone: "light",
      },
      bluetooth: {
        title: "Bluetooth",
        accent: "apagado.",
        body: "Tu implante o audífono necesita Bluetooth para recibir audio. Actívalo para continuar.",
        button: "Activar Bluetooth",
        icon: "power",
        tone: "light",
      },
      output: {
        title: "Dispositivo auditivo",
        accent: "no seleccionado.",
        body: "El audio está saliendo por la bocina del iPhone. Elige tu dispositivo auditivo como salida.",
        button: "Elegir salida de audio",
        icon: "airplay",
        tone: "light",
      },
      active: {
        title: "Tu audio está",
        accent: "activo.",
        body: "La sesión de audio se mantiene abierta hasta que la detengas, aunque no suene nada.",
        status: "Activo durante 1 h 43 min",
        button: "Detener",
        icon: "power",
        tone: "dark",
      },
    } as Record<ScreenState, Screen>,
  },
  compatPage: {
    title: "Compatibilidad",
    description: "Dispositivos auditivos verificados con Wallas ON.",
    heading: "Dispositivos",
    accent: "verificados.",
    intro:
      "Wallas ON está pensado para dispositivos auditivos con streaming de audio compatible. Aquí solo aparecen los modelos que hemos probado.",
    listLabel: "Dispositivos verificados",
    verified: "Verificado",
    pending: "Verificación en curso",
    pendingText: "Todavía estamos verificando dispositivos. Publicaremos la lista aquí en cuanto esté lista.",
  },
  privacyPage: {
    title: "Privacidad",
    description: "Política de privacidad de Wallas ON.",
    heading: "Tu privacidad,",
    accent: "con claridad.",
    intro:
      "Estamos preparando la política de privacidad completa de Wallas ON. La publicaremos aquí antes del lanzamiento.",
  },
  supportPage: {
    title: "Soporte",
    description: "Ayuda y preguntas frecuentes sobre Wallas ON.",
    heading: "¿Necesitas",
    accent: "ayuda?",
    intro: "Respuestas breves a las preguntas más comunes.",
    contact: "Escríbenos.",
    faqs: [
      {
        q: "¿Qué hace Wallas ON?",
        a: "Mantiene abierta la sesión de audio de tu dispositivo auditivo, incluso cuando no suena nada. Así se evitan interrupciones del streaming durante los silencios.",
      },
      {
        q: "¿Cómo lo activo?",
        a: "Conecta tu dispositivo auditivo desde los ajustes de Bluetooth, abre Wallas ON y toca Activar. Después puedes seguir con tu día.",
      },
      {
        q: "La app dice “Bluetooth apagado.”",
        a: "Tu implante o audífono necesita Bluetooth para recibir audio. Toca Activar Bluetooth en la app para continuar.",
      },
      {
        q: "La app dice “Dispositivo auditivo no seleccionado.”",
        a: "El audio está saliendo por la bocina del iPhone. Toca Elegir salida de audio y selecciona tu dispositivo auditivo.",
      },
      { q: "¿Cómo lo detengo?", a: "Abre Wallas ON y toca Detener. La sesión se cierra en ese momento." },
      {
        q: "¿Es compatible con mi dispositivo?",
        a: "Wallas ON está pensado para dispositivos auditivos con streaming de audio compatible. Consulta la lista de dispositivos verificados.",
        link: "compat" as RouteKey,
      },
    ] as { q: string; a: string; link?: RouteKey }[],
  },
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: "Wallas ON - Your audio. Always active.",
    description: "Wallas ON keeps your hearing device’s audio session open, even during silence.",
    locale: "en_US",
  },
  a11y: {
    skip: "Skip to content",
    home: "Wallas ON, home",
    nav: "Main",
    footerNav: "Footer",
    screenPrefix: "Wallas ON screen:",
    switchTo: "Leer en español",
  },
  nav: { how: "How it works", compat: "Compatibility", support: "Support", download: "Download" },
  cta: { download: "Download Wallas ON", how: "How it works", compat: "See compatibility" },
  hero: {
    line1: "Your audio.",
    line2: "Always",
    accent: "active.",
    sub: "Wallas ON keeps your hearing device’s audio session open, even during silence.",
  },
  problem: {
    eyebrow: "The problem",
    title: "Silence shouldn’t",
    accent: "disconnect you.",
    p1: "Some hearing devices can drop out of streaming when audio stops or during moments of silence.",
    p2: "Wallas ON keeps the session open, so you don’t have to keep thinking about reconnecting.",
    without: "Without Wallas ON",
    with: "With Wallas ON",
    legend: ["Audio", "silence", "dropout", "audio"],
    status: "Session stays active, even during silence.",
    caption:
      "Without Wallas ON: audio, silence, a dropout, then audio again. With Wallas ON: audio continues without cuts and the session stays active, even during silence.",
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps.",
    accent: "That’s it.",
    steps: [
      { title: "Connect your hearing device.", text: "Do it as usual from Bluetooth settings." },
      { title: "Turn on Wallas ON.", text: "One tap. That’s it." },
      { title: "Get on with your day.", text: "The session stays active until you decide to stop it." },
    ],
  },
  product: {
    eyebrow: "Product",
    title1: "An app that does",
    title2: "one thing.",
    accent: "And does it well.",
    steps: [
      { state: "off", label: "Paused", tone: "off", text: "When it’s paused, you see it right away. One tap and it’s active again." },
      {
        state: "bluetooth",
        label: "Bluetooth off",
        tone: "warn",
        text: "If Bluetooth is off, it tells you. And offers to turn it on from the same screen.",
      },
      {
        state: "output",
        label: "Output not selected",
        tone: "warn",
        text: "If audio is going to the iPhone speaker, it lets you know. And lets you choose your hearing device as the output.",
      },
      { state: "active", label: "Active", tone: "ok", text: "While it’s active, the session stays open. Even when nothing is playing." },
    ],
  },
  compat: {
    eyebrow: "Compatibility",
    title: "Made for listening",
    accent: "your way.",
    p1: "Wallas ON is designed for people who use hearing devices with compatible audio streaming.",
    p2: "See the devices we’ve verified.",
  },
  philosophy: {
    eyebrow: "Philosophy",
    title: "Technology should",
    accent: "adapt to you.",
    p: "Wallas ON was born from a simple need: keeping audio available without constantly thinking about the connection.",
    principles: ["Fewer interruptions.", "Fewer steps.", "More control."],
  },
  final: {
    title: "Keep your audio",
    accent: "active.",
    available: (p: string) => `Available for ${p}.`,
    soon: (p: string) => `Coming soon for ${p}.`,
  },
  footer: { eco: "Part of the Wallas ecosystem.", compat: "Compatibility", privacy: "Privacy", support: "Support" },
  app: {
    name: "Wallas On",
    settings: "Settings",
    device: "RP Hearing Device · Right ear",
    screens: {
      off: {
        title: "Your audio is",
        accent: "paused.",
        body: "Turn it on so your hearing device doesn’t drop in and out of streaming during silences.",
        button: "Activate",
        icon: "power",
        tone: "light",
      },
      bluetooth: {
        title: "Bluetooth",
        accent: "off.",
        body: "Your implant or hearing aid needs Bluetooth to receive audio. Turn it on to continue.",
        button: "Turn on Bluetooth",
        icon: "power",
        tone: "light",
      },
      output: {
        title: "Hearing device",
        accent: "not selected.",
        body: "Audio is going to the iPhone speaker. Choose your hearing device as the output.",
        button: "Choose audio output",
        icon: "airplay",
        tone: "light",
      },
      active: {
        title: "Your audio is",
        accent: "active.",
        body: "The audio session stays open until you stop it, even when nothing is playing.",
        status: "Active for 1 h 43 min",
        button: "Stop",
        icon: "power",
        tone: "dark",
      },
    },
  },
  compatPage: {
    title: "Compatibility",
    description: "Hearing devices verified with Wallas ON.",
    heading: "Verified",
    accent: "devices.",
    intro:
      "Wallas ON is designed for hearing devices with compatible audio streaming. Only models we’ve tested appear here.",
    listLabel: "Verified devices",
    verified: "Verified",
    pending: "Verification in progress",
    pendingText: "We’re still verifying devices. We’ll publish the list here as soon as it’s ready.",
  },
  privacyPage: {
    title: "Privacy",
    description: "Wallas ON privacy policy.",
    heading: "Your privacy,",
    accent: "made clear.",
    intro: "We’re preparing the full Wallas ON privacy policy. We’ll publish it here before launch.",
  },
  supportPage: {
    title: "Support",
    description: "Help and frequently asked questions about Wallas ON.",
    heading: "Need",
    accent: "help?",
    intro: "Short answers to the most common questions.",
    contact: "Write to us.",
    faqs: [
      {
        q: "What does Wallas ON do?",
        a: "It keeps your hearing device’s audio session open, even when nothing is playing. That helps avoid streaming dropouts during silence.",
      },
      {
        q: "How do I turn it on?",
        a: "Connect your hearing device from Bluetooth settings, open Wallas ON and tap Activate. Then get on with your day.",
      },
      {
        q: "The app says “Bluetooth off.”",
        a: "Your implant or hearing aid needs Bluetooth to receive audio. Tap Turn on Bluetooth in the app to continue.",
      },
      {
        q: "The app says “Hearing device not selected.”",
        a: "Audio is going to the iPhone speaker. Tap Choose audio output and select your hearing device.",
      },
      { q: "How do I stop it?", a: "Open Wallas ON and tap Stop. The session closes right away." },
      {
        q: "Does it work with my device?",
        a: "Wallas ON is designed for hearing devices with compatible audio streaming. Check the list of verified devices.",
        link: "compat",
      },
    ],
  },
};

export const dictionaries: Record<Lang, Dict> = { es, en };
