import { Badge } from "@/components/ui/badge";
import { useApiHealth } from "@/hooks/useApi";
import { cn } from "@/lib/utils";
import { Cloud, CloudOff } from "lucide-react";

export default function ConnectionStatus({ className }: { className?: string }) {
  const { data } = useApiHealth();
  const online = !!data?.online;

  return (
    <Badge variant="outline" className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          online ? "bg-success" : "bg-destructive"
        )}
        aria-hidden
      />
      {online ? (
        <span className="inline-flex items-center gap-1"><Cloud size={14} /> Online</span>
      ) : (
        <span className="inline-flex items-center gap-1"><CloudOff size={14} /> Modo offline</span>
      )}
    </Badge>
  );
}
