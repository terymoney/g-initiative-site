import logoLight from "@/assets/ginitiative-logo-light.png";
import logoDark from "@/assets/ginitiative-logo-dark.png";

type BrandLogoProps = {
  tone?: "light" | "dark";
  size?: "nav" | "large";
  className?: string;
};

export function BrandLogo({ tone = "light", size = "nav", className = "" }: BrandLogoProps) {
  const logo = tone === "light" ? logoLight : logoDark;

  return (
    <span
      className={`brand-logo-image brand-logo-image--${tone} brand-logo-image--${size} ${className}`}
      aria-label="G Initiative"
    >
      <img src={logo} alt="G Initiative" />
    </span>
  );
}