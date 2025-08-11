import PageSEO from "@/components/PageSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { useApiHealth, useProdutos, useCategorias, useBuscar } from "@/hooks/useApi";
import { useMemo, useState } from "react";
import { CheckCircle2, Cloud, CloudOff, RefreshCw } from "lucide-react";
import { fetchHealth, fetchProdutos as svcProdutos, fetchCategorias as svcCategorias } from "@/lib/api/services";

const SourceBadge = ({ source }: { source: "api" | "local" }) => (
  <Badge variant={source === "api" ? "default" : "outline"}>
    Fonte: {source === "api" ? "API" : "Local"} {source === "api" && <CheckCircle2 className="inline ml-1 text-success" size={14} />}
  </Badge>
);

export default function ApiDemo() {
  const { data: health, isFetching: fetchingHealth } = useApiHealth();
  const [forceLocal, setForceLocal] = useState(false);
  const { data: produtos, isLoading: loadingProdutos, isFetching: fetchingProdutos } = useProdutos({ forceLocal });
  const { data: categorias, isLoading: loadingCategorias, isFetching: fetchingCategorias } = useCategorias({ forceLocal });
  const [term, setTerm] = useState("a");
  const { data: busca, isLoading: loadingBusca, isFetching: fetchingBusca } = useBuscar(term, { forceLocal });

  const online = health?.online;

  const [timings, setTimings] = useState<Record<string, number>>({});

  const produtosList = useMemo(() => produtos?.data || [], [produtos]);
  const categoriasList = useMemo(() => categorias?.data || [], [categorias]);
  const buscaList = useMemo(() => busca?.data || [], [busca]);

  return (
    <main className="container mx-auto px-4 py-10 space-y-8">
      <PageSEO
        title="API Demo | Conexão com FastAPI"
        description="Página de demonstração para testar a conexão do site com o backend FastAPI (produtos, categorias e busca)."
        canonical={window.location.href}
      />

      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Demonstração da API</h1>
        <p className="text-muted-foreground flex items-center gap-2">
          Status: {online ? (
            <span className="inline-flex items-center gap-1 text-success"><Cloud size={16} /> Online</span>
          ) : (
            <span className="inline-flex items-center gap-1 text-destructive"><CloudOff size={16} /> Offline</span>
          )}
          {fetchingHealth && <Spinner size={14} />}
        </p>
      </header>

      {!online && (
        <Alert className="max-w-3xl">
          <AlertTitle>Usando dados locais</AlertTitle>
          <AlertDescription>
            A API parece estar offline. Algumas informações podem não estar atualizadas.
          </AlertDescription>
        </Alert>
      )}

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Produtos</CardTitle>
            {produtos && <SourceBadge source={produtos.source} />}
          </CardHeader>
          <CardContent>
            {(loadingProdutos || fetchingProdutos) ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2"><Spinner /><span className="text-sm text-muted-foreground">Carregando produtos...</span></div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            ) : Array.isArray(produtosList) && produtosList.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">
                {produtosList.map((p: any, idx: number) => (
                  <li key={p.id ?? idx} className="text-sm">
                    <code className="text-xs">{JSON.stringify(p)}</code>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Sem dados.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Categorias</CardTitle>
            {categorias && <SourceBadge source={categorias.source} />}
          </CardHeader>
          <CardContent>
            {(loadingCategorias || fetchingCategorias) ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2"><Spinner /><span className="text-sm text-muted-foreground">Carregando categorias...</span></div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            ) : Array.isArray(categoriasList) && categoriasList.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">
                {categoriasList.map((c: any, idx: number) => (
                  <li key={c.id ?? idx} className="text-sm">
                    <code className="text-xs">{JSON.stringify(c)}</code>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Sem dados.</p>
            )}
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle className="text-xl">Busca</CardTitle>
            {busca && <SourceBadge source={busca.source} />}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2 items-center">
              <Input value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Termo de busca" />
              <Button type="button" onClick={() => { /* react-query atualiza pelo key */ }}>
                Buscar
              </Button>
              {(loadingBusca || fetchingBusca) && <Spinner />}
            </div>
            {Array.isArray(buscaList) && buscaList.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">
                {buscaList.map((r: any, idx: number) => (
                  <li key={r.id ?? idx} className="text-sm">
                    <code className="text-xs">{JSON.stringify(r)}</code>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Sem resultados.</p>
            )}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Ferramentas de Teste</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2 items-center">
              <Button type="button" variant="secondary" onClick={async () => {
                const t0 = performance.now();
                await fetchHealth();
                const t1 = performance.now();
                setTimings((prev) => ({ ...prev, health: Math.round(t1 - t0) }));
              }}>
                <RefreshCw className="mr-2 h-4 w-4" /> Testar /api/health {timings.health != null && <span className="ml-2 text-muted-foreground">{timings.health} ms</span>}
              </Button>
              <Button type="button" variant="secondary" onClick={async () => {
                const t0 = performance.now();
                await svcProdutos();
                const t1 = performance.now();
                setTimings((prev) => ({ ...prev, produtos: Math.round(t1 - t0) }));
              }}>
                <RefreshCw className="mr-2 h-4 w-4" /> Testar /api/produtos {timings.produtos != null && <span className="ml-2 text-muted-foreground">{timings.produtos} ms</span>}
              </Button>
              <Button type="button" variant="secondary" onClick={async () => {
                const t0 = performance.now();
                await svcCategorias();
                const t1 = performance.now();
                setTimings((prev) => ({ ...prev, categorias: Math.round(t1 - t0) }));
              }}>
                <RefreshCw className="mr-2 h-4 w-4" /> Testar /api/categorias {timings.categorias != null && <span className="ml-2 text-muted-foreground">{timings.categorias} ms</span>}
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="forceLocal" checked={forceLocal} onCheckedChange={setForceLocal} />
              <Label htmlFor="forceLocal">Forçar usar dados locais (testar fallback)</Label>
            </div>
          </CardContent>
        </Card>
      </section>

      <aside className="text-xs text-muted-foreground">
        Dica: para trocar a URL da API, defina window.__API_BASE_URL__ no console, ou salve em
        localStorage.setItem('API_BASE_URL', 'http://localhost:8000'). Você também pode usar
        ?apiBase=http://localhost:8000 na URL.
      </aside>
    </main>
  );
}
