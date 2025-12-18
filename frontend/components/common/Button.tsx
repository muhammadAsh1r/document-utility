import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";

    const variants: Record<ButtonVariant, string> = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-white text-blue-600 hover:bg-blue-50",
      outline: "border border-slate-300 text-slate-700 hover:bg-slate-100",
    };

    return (
      <button
        ref={ref}
        {...props}
        className={`${base} ${variants[variant]} ${className}`}
      />
    );
  }
);

Button.displayName = "Button";
