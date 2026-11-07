export type Lang = "es" | "en";
export const langs: Lang[] = ["es", "en"];

export type ScreenState = "off" | "bluetooth" | "output" | "active";

/** Rutas equivalentes en cada idioma. */
export const routes = {
  es: { home: "/", compat: "/compatibilidad", support: "/soporte", privacy: "/privacidad", terms: "/terminos" },
  en: { home: "/en", compat: "/en/compatibility", support: "/en/support", privacy: "/en/privacy", terms: "/en/terms" },
} as const;

export type RouteKey = keyof (typeof routes)["es"];

/** Anclas de las secciones de la home en cada idioma. */
export const anchors = {
  es: { how: "como-funciona", download: "descargar" },
  en: { how: "how-it-works", download: "download" },
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
    title: "Wallas On - Tu audio. Siempre activo.",
    description:
      "Wallas On mantiene abierta la sesión de audio de tu dispositivo auditivo, incluso durante los silencios.",
    locale: "es_ES",
  },
  a11y: {
    skip: "Saltar al contenido",
    home: "Wallas On, inicio",
    nav: "Principal",
    footerNav: "Pie de página",
    screenPrefix: "Pantalla de Wallas On:",
    switchTo: "Read in English",
  },
  nav: { how: "Cómo funciona", compat: "Compatibilidad", support: "Soporte", download: "Descargar" },
  cta: { download: "Descargar Wallas On", how: "Cómo funciona", compat: "Ver compatibilidad" },
  hero: {
    line1: "Tu audio.",
    line2: "Siempre",
    accent: "activo.",
    sub: "Wallas On mantiene abierta la sesión de audio de tu dispositivo auditivo, incluso durante los silencios.",
  },
  problem: {
    eyebrow: "El problema",
    title: "Cada sonido corto,",
    accent: "una interrupción.",
    intro:
      "Cada vez que una app reproduce un sonido corto, como una pronunciación del traductor, una indicación del mapa, un aviso de mensaje o un video breve, tu procesador de sonido:",
    steps: [
      "Abre el stream y suena un tono de activación.",
      "Baja el sonido del entorno.",
      "Reproduce el audio.",
      "Cierra el stream y el entorno vuelve a su volumen.",
    ],
    repeat: "Eso se repite decenas de veces por hora. Y cada vez son uno o dos segundos de confusión.",
    solution:
      "Wallas On mantiene abierta una sola transmisión de audio. El stream no se cierra entre un sonido y otro, así que desaparecen los tonos y los cambios de volumen.",
    without: "Sin Wallas On",
    with: "Con Wallas On",
    legend: { ambient: "Entorno", brief: "Streaming breve", continuous: "Continuo" },
    caption:
      "Sin Wallas On: el sonido del entorno se interrumpe una y otra vez con tramos breves de streaming. Con Wallas On: el streaming es continuo.",
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos.",
    accent: "Nada más.",
    steps: [
      { title: "Conecta tu dispositivo auditivo.", text: "Hazlo normalmente desde los ajustes de Bluetooth." },
      { title: "Activa Wallas On.", text: "Un toque. Nada más." },
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
  philosophy: {
    eyebrow: "Filosofía",
    title: "La tecnología debería",
    accent: "adaptarse a ti.",
    p: "Wallas On nació de una necesidad sencilla: mantener el audio disponible sin tener que pensar constantemente en la conexión.",
    principles: ["Menos interrupciones.", "Menos pasos.", "Más control."],
  },
  final: {
    title: "Mantén tu audio",
    accent: "activo.",
    available: (p: string) => `Gratis. Disponible para ${p}.`,
    soon: (p: string) => `Gratis. Próximamente para ${p}.`,
  },
  footer: { eco: "Parte del ecosistema Wallas.", compat: "Compatibilidad", privacy: "Privacidad", terms: "Términos de uso", support: "Soporte" },
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
    description: "Dispositivos auditivos verificados con Wallas On.",
    heading: "Dispositivos",
    accent: "verificados.",
    intro:
      "Wallas On está pensado para dispositivos auditivos con streaming de audio compatible. Aquí solo aparecen los modelos que hemos probado.",
    listLabel: "Dispositivos verificados",
    verified: "Verificado",
    pending: "Verificación en curso",
    pendingText: "Todavía estamos verificando dispositivos. Publicaremos la lista aquí en cuanto esté lista.",
  },
  privacyPage: {
    title: "Privacidad",
    description: "Política de privacidad de Wallas On. La app no recopila datos personales.",
    heading: "Tu privacidad,",
    accent: "con claridad.",
    intro: "Wallas On no recopila, guarda ni comparte datos personales.",
    updated: "Última actualización: 29 de septiembre de 2026",
    contactLabel: "Preguntas sobre privacidad:",
    sections: [
      {
        title: "Qué datos recopilamos",
        body: ["Ninguno. Wallas On no pide registro, no usa cuentas y no recopila información personal."],
      },
      {
        title: "Audio",
        body: [
          "La app mantiene abierta una transmisión de audio Bluetooth hacia tu dispositivo auditivo. No usa el micrófono y no graba, guarda ni envía audio.",
        ],
      },
      {
        title: "Lo que se queda en tu iPhone",
        body: [
          "Para mostrarte su estado, la app consulta en tu iPhone si el Bluetooth está encendido y por dónde sale el audio, por ejemplo el nombre de tu dispositivo auditivo. Esa información se usa en el momento y no sale de tu iPhone.",
          "Tus ajustes, como el idioma o el aviso de inactividad, se guardan solo en tu iPhone.",
        ],
      },
      {
        title: "Analítica, publicidad y terceros",
        body: [
          "Wallas On es gratuita y no tiene publicidad. No usa herramientas de analítica, informes de errores ni seguimiento, y no comparte información con terceros.",
        ],
      },
      {
        title: "Este sitio web",
        body: ["Este sitio no usa cookies ni herramientas de analítica."],
      },
      {
        title: "Cambios",
        body: ["Si esta política cambia, publicaremos la nueva versión en esta página con su fecha de actualización."],
      },
    ] as { title: string; body: string[] }[],
  },
  termsPage: {
    title: "Términos de uso",
    description: "Términos de uso de Wallas On. Wallas On es una utilidad de audio, no un dispositivo médico.",
    heading: "Términos",
    accent: "de uso.",
    intro: "Al descargar o usar Wallas On aceptas estos términos. Si no estás de acuerdo, no uses la app.",
    updated: "Última actualización: 7 de noviembre de 2026",
    contactLabel: "Preguntas sobre estos términos:",
    sections: [
      {
        title: "Qué es Wallas On",
        body: [
          "Wallas On es una utilidad de audio que mantiene abierta la transmisión de audio Bluetooth de tu iPhone mientras usas otras apps, para que tu dispositivo no entre y salga del modo streaming entre un sonido y otro.",
          "La conexión con tu dispositivo la maneja iOS. Wallas On no se comunica con tu dispositivo auditivo, no lo configura y no cambia ninguno de sus ajustes.",
        ],
      },
      {
        title: "Aviso médico",
        body: [
          "Wallas On no es un dispositivo médico. No diagnostica, no trata, no mide ni ajusta la audición, y no sustituye las indicaciones de tu médico o audiólogo.",
          "Consulta siempre a tu médico o audiólogo además de usar esta app y antes de tomar cualquier decisión médica.",
        ],
      },
      {
        title: "Uso bajo tu responsabilidad",
        body: [
          "Usas Wallas On bajo tu propia responsabilidad. No dependas de la app en situaciones en las que no escuchar un sonido pueda ponerte en riesgo, por ejemplo al manejar o al cruzar la calle.",
          "La forma en que cada dispositivo maneja el sonido depende de su fabricante y de su firmware, así que el resultado puede variar.",
        ],
      },
      {
        title: "Dispositivos y países",
        body: [
          "Wallas On se ha probado con el procesador de sonido Cochlear Nucleus 7 (CP1000) y está disponible únicamente en Estados Unidos, Canadá, México, Brasil, Japón y Australia, donde ese dispositivo cuenta con autorización regulatoria.",
          "Usa Wallas On solo con dispositivos auditivos aprobados para su uso en tu país. Wallas On no está afiliada, patrocinada ni respaldada por Cochlear ni por ningún otro fabricante de dispositivos auditivos. Las marcas mencionadas pertenecen a sus respectivos dueños.",
        ],
      },
      {
        title: "Sin garantías",
        body: [
          "Wallas On se ofrece “tal cual” y “según disponibilidad”. En la medida en que la ley lo permita, no garantizamos que la app funcione sin interrupciones, sin errores o con todos los dispositivos.",
        ],
      },
      {
        title: "Limitación de responsabilidad",
        body: [
          "En la medida en que la ley lo permita, Wallas no será responsable de daños directos o indirectos que resulten del uso o de la imposibilidad de usar la app. Nada en estos términos limita los derechos que la ley de tu país te reconoce como consumidor.",
        ],
      },
      {
        title: "Licencia",
        body: [
          "Además de estos términos, tu uso de Wallas On se rige por el Contrato de Licencia de Usuario Final estándar de Apple para apps de la App Store.",
        ],
      },
      {
        title: "Cambios",
        body: ["Si estos términos cambian, publicaremos la nueva versión en esta página con su fecha de actualización."],
      },
    ] as { title: string; body: string[] }[],
  },
  supportPage: {
    title: "Soporte",
    description: "Ayuda y preguntas frecuentes sobre Wallas On.",
    heading: "¿Necesitas",
    accent: "ayuda?",
    intro: "Escríbenos o revisa las respuestas a las preguntas más comunes.",
    contact: "Escríbenos.",
    contactText: "Respondemos personalmente. Cuéntanos qué pasa y, si puedes, qué dispositivo auditivo usas.",
    contactCta: "Escribir a soporte",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Qué hace Wallas On?",
        a: "Mantiene abierta una sola transmisión de audio Bluetooth de forma continua. Así tu procesador de sonido no entra y sale del modo streaming a cada rato.",
      },
      {
        q: "¿Qué problema resuelve?",
        a: "Cada vez que una app reproduce un sonido corto, como una pronunciación del traductor, una indicación del mapa o un aviso de mensaje, el procesador abre el stream con un tono, baja el sonido del entorno, reproduce el audio y vuelve a cerrarlo. Eso puede pasar decenas de veces por hora. Con Wallas On la transmisión se queda abierta y esos cortes desaparecen.",
      },
      {
        q: "¿Cómo lo activo?",
        a: "Conecta tu dispositivo auditivo desde los ajustes de Bluetooth, abre Wallas On y toca Activar. Después puedes seguir con tu día.",
      },
      {
        q: "La app dice “Bluetooth apagado.”",
        a: "Tu implante o audífono necesita Bluetooth para recibir audio. Toca Activar Bluetooth en la app para continuar.",
      },
      {
        q: "La app dice “Dispositivo auditivo no seleccionado.”",
        a: "El audio está saliendo por la bocina del iPhone. Toca Elegir salida de audio y selecciona tu dispositivo auditivo.",
      },
      { q: "¿Cómo lo detengo?", a: "Abre Wallas On y toca Detener. La sesión se cierra en ese momento." },
      {
        q: "¿Es compatible con mi dispositivo?",
        a: "Wallas On está pensado para dispositivos auditivos con streaming de audio compatible.",
      },
    ] as { q: string; a: string; link?: RouteKey }[],
  },
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: "Wallas On - Your audio. Always active.",
    description: "Wallas On keeps your hearing device’s audio session open, even during silence.",
    locale: "en_US",
  },
  a11y: {
    skip: "Skip to content",
    home: "Wallas On, home",
    nav: "Main",
    footerNav: "Footer",
    screenPrefix: "Wallas On screen:",
    switchTo: "Leer en español",
  },
  nav: { how: "How it works", compat: "Compatibility", support: "Support", download: "Download" },
  cta: { download: "Download Wallas On", how: "How it works", compat: "See compatibility" },
  hero: {
    line1: "Your audio.",
    line2: "Always",
    accent: "active.",
    sub: "Wallas On keeps your hearing device’s audio session open, even during silence.",
  },
  problem: {
    eyebrow: "The problem",
    title: "Every short sound,",
    accent: "an interruption.",
    intro:
      "Every time an app plays a short sound, like a translation, a map direction, a message alert or a short video, your sound processor:",
    steps: [
      "Opens the stream and plays an activation tone.",
      "Lowers the surrounding sound.",
      "Plays the audio.",
      "Closes the stream and the surrounding sound comes back.",
    ],
    repeat: "That happens dozens of times an hour. And every time, it’s a second or two of confusion.",
    solution:
      "Wallas On keeps a single audio stream open. The stream doesn’t close between sounds, so the tones and volume changes go away.",
    without: "Without Wallas On",
    with: "With Wallas On",
    legend: { ambient: "Surroundings", brief: "Brief streaming", continuous: "Continuous" },
    caption:
      "Without Wallas On: the surrounding sound is interrupted again and again by brief streaming. With Wallas On: streaming is continuous.",
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps.",
    accent: "That’s it.",
    steps: [
      { title: "Connect your hearing device.", text: "Do it as usual from Bluetooth settings." },
      { title: "Turn on Wallas On.", text: "One tap. That’s it." },
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
  philosophy: {
    eyebrow: "Philosophy",
    title: "Technology should",
    accent: "adapt to you.",
    p: "Wallas On was born from a simple need: keeping audio available without constantly thinking about the connection.",
    principles: ["Fewer interruptions.", "Fewer steps.", "More control."],
  },
  final: {
    title: "Keep your audio",
    accent: "active.",
    available: (p: string) => `Free. Available for ${p}.`,
    soon: (p: string) => `Free. Coming soon for ${p}.`,
  },
  footer: { eco: "Part of the Wallas ecosystem.", compat: "Compatibility", privacy: "Privacy", terms: "Terms of Use", support: "Support" },
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
    description: "Hearing devices verified with Wallas On.",
    heading: "Verified",
    accent: "devices.",
    intro:
      "Wallas On is designed for hearing devices with compatible audio streaming. Only models we’ve tested appear here.",
    listLabel: "Verified devices",
    verified: "Verified",
    pending: "Verification in progress",
    pendingText: "We’re still verifying devices. We’ll publish the list here as soon as it’s ready.",
  },
  privacyPage: {
    title: "Privacy",
    description: "Wallas On privacy policy. The app doesn’t collect personal data.",
    heading: "Your privacy,",
    accent: "made clear.",
    intro: "Wallas On doesn’t collect, store or share personal data.",
    updated: "Last updated: September 29, 2026",
    contactLabel: "Privacy questions:",
    sections: [
      {
        title: "What data we collect",
        body: ["None. Wallas On doesn’t ask you to sign up, doesn’t use accounts and doesn’t collect personal information."],
      },
      {
        title: "Audio",
        body: [
          "The app keeps a Bluetooth audio stream open to your hearing device. It doesn’t use the microphone and doesn’t record, store or send audio.",
        ],
      },
      {
        title: "What stays on your iPhone",
        body: [
          "To show you its status, the app checks on your iPhone whether Bluetooth is on and where audio is going, for example your hearing device’s name. That information is used in the moment and never leaves your iPhone.",
          "Your settings, such as language or the inactivity notice, are stored only on your iPhone.",
        ],
      },
      {
        title: "Analytics, advertising and third parties",
        body: [
          "Wallas On is free and has no ads. It doesn’t use analytics, crash reporting or tracking tools, and doesn’t share information with third parties.",
        ],
      },
      {
        title: "This website",
        body: ["This site doesn’t use cookies or analytics tools."],
      },
      {
        title: "Changes",
        body: ["If this policy changes, we’ll publish the new version on this page with its update date."],
      },
    ],
  },
  termsPage: {
    title: "Terms of Use",
    description: "Wallas On Terms of Use. Wallas On is an audio utility, not a medical device.",
    heading: "Terms",
    accent: "of Use.",
    intro: "By downloading or using Wallas On you agree to these terms. If you don’t agree, don’t use the app.",
    updated: "Last updated: November 7, 2026",
    contactLabel: "Questions about these terms:",
    sections: [
      {
        title: "What Wallas On is",
        body: [
          "Wallas On is an audio utility that keeps your iPhone’s Bluetooth audio stream open while you use other apps, so your device doesn’t switch in and out of streaming mode between one sound and the next.",
          "iOS handles the connection to your device. Wallas On doesn’t communicate with your hearing device, doesn’t configure it and doesn’t change any of its settings.",
        ],
      },
      {
        title: "Medical disclaimer",
        body: [
          "Wallas On is not a medical device. It doesn’t diagnose, treat, measure or adjust hearing, and it doesn’t replace the advice of your doctor or audiologist.",
          "Always seek the advice of your doctor or audiologist in addition to using this app and before making any medical decisions.",
        ],
      },
      {
        title: "Use at your own risk",
        body: [
          "You use Wallas On at your own risk. Don’t rely on the app in situations where missing a sound could put you at risk, such as driving or crossing the street.",
          "How each device handles sound depends on its manufacturer and firmware, so results may vary.",
        ],
      },
      {
        title: "Devices and countries",
        body: [
          "Wallas On has been tested with the Cochlear Nucleus 7 sound processor (CP1000) and is available only in the United States, Canada, Mexico, Brazil, Japan and Australia, where that device has regulatory clearance.",
          "Use Wallas On only with hearing devices that are approved for use in your country. Wallas On is not affiliated with, sponsored or endorsed by Cochlear or any other hearing device manufacturer. Trademarks mentioned belong to their respective owners.",
        ],
      },
      {
        title: "No warranties",
        body: [
          "Wallas On is provided “as is” and “as available”. To the extent permitted by law, we don’t guarantee that the app will work without interruptions, without errors or with every device.",
        ],
      },
      {
        title: "Limitation of liability",
        body: [
          "To the extent permitted by law, Wallas will not be liable for any direct or indirect damages resulting from the use of, or inability to use, the app. Nothing in these terms limits the rights you have as a consumer under the laws of your country.",
        ],
      },
      {
        title: "License",
        body: [
          "In addition to these terms, your use of Wallas On is governed by Apple’s standard Licensed Application End User License Agreement for App Store apps.",
        ],
      },
      {
        title: "Changes",
        body: ["If these terms change, we’ll publish the new version on this page with its update date."],
      },
    ],
  },
  supportPage: {
    title: "Support",
    description: "Help and frequently asked questions about Wallas On.",
    heading: "Need",
    accent: "help?",
    intro: "Write to us or check the answers to the most common questions.",
    contact: "Write to us.",
    contactText: "We reply personally. Tell us what’s happening and, if you can, which hearing device you use.",
    contactCta: "Email support",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "What does Wallas On do?",
        a: "It keeps a single Bluetooth audio stream open continuously, so your sound processor doesn’t keep switching in and out of streaming mode.",
      },
      {
        q: "What problem does it solve?",
        a: "Every time an app plays a short sound, like a translation, a map direction or a message alert, the processor opens the stream with a tone, lowers the surrounding sound, plays the audio and closes it again. That can happen dozens of times an hour. With Wallas On the stream stays open and those interruptions go away.",
      },
      {
        q: "How do I turn it on?",
        a: "Connect your hearing device from Bluetooth settings, open Wallas On and tap Activate. Then get on with your day.",
      },
      {
        q: "The app says “Bluetooth off.”",
        a: "Your implant or hearing aid needs Bluetooth to receive audio. Tap Turn on Bluetooth in the app to continue.",
      },
      {
        q: "The app says “Hearing device not selected.”",
        a: "Audio is going to the iPhone speaker. Tap Choose audio output and select your hearing device.",
      },
      { q: "How do I stop it?", a: "Open Wallas On and tap Stop. The session closes right away." },
      {
        q: "Does it work with my device?",
        a: "Wallas On is designed for hearing devices with compatible audio streaming.",
      },
    ],
  },
};

export const dictionaries: Record<Lang, Dict> = { es, en };
