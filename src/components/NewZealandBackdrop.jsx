import { useId } from "react";

const fieldShape =
  "M-140-50H360C551-50 676 80 656 256L618 565C600 719 442 813 268 778L-140 696Z";
const starShape = "M0-24 7-8 25-8 11 3 16 21 0 11-16 21-11 3-25-8-7-8Z";

export default function NewZealandBackdrop() {
  const clipId = useId();
  const fadeX = `${clipId}-fade-x`;
  const fadeY = `${clipId}-fade-y`;
  const maskX = `${clipId}-mask-x`;
  const maskY = `${clipId}-mask-y`;

  return (
    <div className="about-backdrop" aria-hidden="true">
      <svg viewBox="0 0 700 760" fill="none" focusable="false">
        <defs>
          <clipPath id={clipId}>
            <path d={fieldShape} />
          </clipPath>
          <linearGradient
            id={fadeX}
            x1="0"
            y1="0"
            x2="60"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="black" />
            <stop offset="0.16" stopColor="white" />
            <stop offset="0.5" stopColor="white" />
            <stop offset="0.76" stopColor="#777" />
            <stop offset="0.94" stopColor="#111" />
            <stop offset="1" stopColor="black" />
          </linearGradient>
          <linearGradient
            id={fadeY}
            x1="0"
            y1="0"
            x2="0"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="black" />
            <stop offset="0.18" stopColor="white" />
            <stop offset="0.45" stopColor="white" />
            <stop offset="0.73" stopColor="#777" />
            <stop offset="0.94" stopColor="#111" />
            <stop offset="1" stopColor="black" />
          </linearGradient>
          <mask
            id={maskX}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="30"
            style={{ maskType: "luminance" }}
          >
            <rect width="60" height="30" fill={`url(#${fadeX})`} />
          </mask>
          <mask
            id={maskY}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="30"
            style={{ maskType: "luminance" }}
          >
            <rect width="60" height="30" fill={`url(#${fadeY})`} />
          </mask>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <path d={fieldShape} fill="var(--nz-field)" />
          <g transform="translate(-32 0) scale(7)" opacity="0.88">
            <g mask={`url(#${maskX})`}>
              <g mask={`url(#${maskY})`}>
                <path
                  d="M0 0 60 30M60 0 0 30"
                  stroke="var(--nz-outline)"
                  strokeWidth="6"
                />
                <path
                  d="M0 0 60 30M60 0 0 30"
                  stroke="var(--nz-star)"
                  strokeWidth="2"
                />
                <path
                  d="M30 0v30M0 15h60"
                  stroke="var(--nz-outline)"
                  strokeWidth="10"
                />
                <path
                  d="M30 0v30M0 15h60"
                  stroke="var(--nz-star)"
                  strokeWidth="6"
                />
              </g>
            </g>
          </g>
          <g
            fill="var(--nz-star)"
            stroke="var(--nz-outline)"
            strokeWidth="3.2"
            strokeLinejoin="round"
          >
            <path d={starShape} transform="translate(438 184)" />
            <path d={starShape} transform="translate(351 315) scale(0.78)" />
            <path d={starShape} transform="translate(530 294) scale(0.9)" />
            <path d={starShape} transform="translate(447 473) scale(1.08)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
