/** Marca de Wallas On: la W en color de texto y el punto de estado en verde. */
export function LogoMark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="480 570 990 860"
      width={size * (990 / 860)}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M493 826H636L728 1077L872 697Q874 692 879 692H1005Q1011 692 1014 697L1158 1077L1251 826H1393L1167 1413Q1165 1418 1159 1418Q1152 1418 1150 1413L943 876L737 1413Q735 1418 728 1418Q721 1418 719 1413Z"
      />
      <circle cx="1367" cy="672" r="91" className="logo-dot" />
    </svg>
  );
}
