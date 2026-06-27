import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g transform="translate(3 3)" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="7.8235" cy="7.8235" r="7.8235" />
        <path d="M13.9706 13.9706 18.4412 18.4412" />
      </g>
    </svg>
  );
}

export function AccountIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.43A3.57 3.57 0 1 0 12 10.57 3.57 3.57 0 0 0 12 3.43Z"
        fill="currentColor"
      />
      <path
        d="M3 18.25c0-2.49 4.54-4 9.03-4C16.51 14.25 21 15.76 21 18.25v3H3v-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.32 9.5V5.32a3.32 3.32 0 0 0-6.64 0V9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5.36 7.7h13.28l1.11 13.57H4.25L5.36 7.7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5 5 14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="9" cy="7" r="2.2" fill="var(--cream)" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15" cy="17" r="2.2" fill="var(--cream)" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
