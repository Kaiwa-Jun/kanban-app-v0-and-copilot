import React from "react";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return (
    <textarea
      ref={ref}
      className="w-full rounded-md border px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
