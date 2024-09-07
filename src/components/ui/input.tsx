import React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      className="w-full rounded-md border px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
      {...props}
    />
  );
});

Input.displayName = "Input";
