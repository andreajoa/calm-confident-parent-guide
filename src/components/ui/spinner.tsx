import { cn } from "@/lib/utils";
import React from "react";

export type SpinnerProps = {
  size?: number;
  className?: string;
  label?: string;
};

export function Spinner({ size = 20, className, label = "Carregando" }: SpinnerProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)} role="status" aria-live="polite" aria-label={label}>
      <span
        className="animate-spin rounded-full border-2 border-muted border-t-primary"
        style={{ width: size, height: size }}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default Spinner;
