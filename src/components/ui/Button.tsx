import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "outlineLight" | "white" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-red-uhub text-white hover:bg-red-uhub-hover active:bg-red-uhub-active",
  outline:
    "border-2 border-gray-dark text-gray-dark bg-transparent hover:bg-gray-dark hover:text-white",
  outlineLight:
    "border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-dark",
  white: "bg-white text-red-uhub hover:bg-gray-light",
  ghost: "bg-transparent text-red-uhub hover:underline underline-offset-4",
};

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-6 py-3 text-center font-display text-[0.95rem] font-bold tracking-tight transition-colors duration-200 no-underline";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
