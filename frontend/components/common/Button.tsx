import React from "react";

export type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`inline-flex items-center justify-center rounded-lg
      bg-blue-600 px-4 py-2 text-white font-medium
      hover:bg-blue-700 transition
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className}`}
    />
  );
});

Button.displayName = "Button";
