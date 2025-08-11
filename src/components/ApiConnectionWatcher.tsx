import { useEffect, useRef } from "react";
import { useApiHealth } from "@/hooks/useApi";
import { toast } from "@/components/ui/use-toast";

export default function ApiConnectionWatcher() {
  const { data } = useApiHealth();
  const prevOnline = useRef<boolean | null>(null);
  const online = !!data?.online;

  useEffect(() => {
    if (prevOnline.current === false && online === true) {
      toast({
        title: "Conexão restaurada",
        description: "A conexão com a API voltou. Dados em tempo real reativados.",
      });
    }
    prevOnline.current = online;
  }, [online]);

  return null;
}
