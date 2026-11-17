const paths = {
  plus: <path d="M12 5v14M5 12h14" />,
  tiktok: (
    <path
      d="M14 3h3a5 5 0 0 0 4 4v3a8.5 8.5 0 0 1-4-1v7a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 21l1.7-4.9a8.5 8.5 0 1 1 15.8-4.4Z" />
      <path
        d="m8.1 7.1 1.4-.1.9 2-1 .9c.8 1.6 2.1 2.8 3.7 3.5l.9-1 2 .9-.1 1.5c-.1.8-1 1.3-1.8 1.2-3.7-.4-6.9-3.5-7.3-7.2-.1-.8.4-1.6 1.3-1.7Z"
        strokeWidth="1.3"
      />
    </>
  ),
  moon: <path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </>
  ),
  arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
  diagonal: <path d="M6 18 18 6M6 6h12v12" />,
  chat: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z" />
      <path d="M8 11h8M8 15h5" />
    </>
  ),
  headphones: (
    <>
      <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
      <rect x="3" y="12" width="4" height="9" rx="2" />
      <rect x="17" y="12" width="4" height="9" rx="2" />
    </>
  ),
  book: (
    <>
      <path d="M12 5v16M3 3h5a4 4 0 0 1 4 3 4 4 0 0 1 4-3h5v16h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z" />
    </>
  ),
  pen: <path d="m16 3 5 5-12 12-6 1 1-6L16 3ZM13 6l5 5" />,
  video: (
    <>
      <rect x="3" y="5" width="12" height="14" rx="3" />
      <path d="m15 10 6-4v12l-6-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </>
  ),
  game: (
    <>
      <path d="M7 7h10a4 4 0 0 1 4 3l1 7a3 3 0 0 1-5 2l-2-2H9l-2 2a3 3 0 0 1-5-2l1-7a4 4 0 0 1 4-3Z" />
      <path d="M6 10v5M3.5 12.5h5M16 11h.01M19 14h.01" />
    </>
  ),
  spark: (
    <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
  ),
  check: <path d="m5 12 4 4L19 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
};

export default function Icon({ name, size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.spark}
    </svg>
  );
}
