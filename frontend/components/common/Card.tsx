import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
