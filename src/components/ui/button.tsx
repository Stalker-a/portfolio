import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  trailingIcon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

type LinkButtonProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const buttonVariants = {
  primary:
    "border-[var(--accent)] bg-[var(--accent)] text-[var(--background)] hover:bg-transparent hover:text-[var(--accent)]",
  secondary:
    "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--muted-foreground)]",
  ghost:
    "border-transparent bg-transparent px-2 text-[var(--foreground)] hover:text-[var(--accent)]",
};

function buttonClassName(variant: ButtonBaseProps["variant"], className?: string) {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors duration-200",
    buttonVariants[variant ?? "primary"],
    className,
  );
}

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const {
      children,
      className,
      trailingIcon,
      variant = "primary",
      ...linkProps
    } = props;

    return (
      <a {...linkProps} className={buttonClassName(variant, className)}>
        {children}
        {trailingIcon ? <span aria-hidden="true">{trailingIcon}</span> : null}
      </a>
    );
  }

  const {
    children,
    className,
    trailingIcon,
    type,
    variant = "primary",
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      type={type ?? "button"}
      className={buttonClassName(variant, className)}
    >
      {children}
      {trailingIcon ? <span aria-hidden="true">{trailingIcon}</span> : null}
    </button>
  );
}
