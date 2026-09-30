/**
 * Configuración central del sitio.
 * Cambia estos valores cuando la app esté publicada; el resto de la web se adapta sola.
 */
export const site = {
  name: "Wallas On",
  /** Enlace a la App Store. Mientras sea `null`, el CTA final se muestra como "Próximamente". */
  downloadUrl: null as string | null,
  /** Plataforma de lanzamiento. Se muestra bajo el CTA final. */
  platform: "iPhone",
  /** Correo de soporte. Si es `null`, la página de soporte no muestra contacto. */
  supportEmail: "wallasponce@gmail.com" as string | null,
};

/**
 * Dispositivos cuya compatibilidad ha sido verificada.
 * Añade aquí solo modelos probados. No listar fabricantes sin verificación.
 */
export const verifiedDevices: { name: string; note?: string }[] = [];
