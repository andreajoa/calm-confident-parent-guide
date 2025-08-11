import PageSEO from "@/components/PageSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useApiHealth, useProdutos, useCategorias, useBuscar } from "@/hooks/useApi";
import { useMemo, useState } from "react";

const SourceBadge = ({ source }: { source: "api" | "local" }) => (
  <Badge variant={source === "api" ? "default" : "outline"}>
    Fonte: {source === "api" ? "API" : "Local"}
  </Badge>
);

export default function ApiDemo() {
  const { data: health } = useApiHealth();
  const { data: produtos } = useProdutos();
  const { data: categorias } = useCategorias();
  const [term, setTerm] = useState("a");
  const { data: busca } = useBuscar(term);

  const online = health?.online;

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
        <p className="text-muted-foreground">Status: {online ? "Online" : "Offline"}</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Produtos</CardTitle>
            {produtos && <SourceBadge source={produtos.source} />}
          </CardHeader>
          <CardContent>
            {Array.isArray(produtosList) && produtosList.length > 0 ? (
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
            {Array.isArray(categoriasList) && categoriasList.length > 0 ? (
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
            <div className="flex gap-2">
              <Input value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Termo de busca" />
              <Button type="button" onClick={() => { /* react-query atualiza automaticamente pelo key */ }}>Buscar</Button>
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

      <aside className="text-xs text-muted-foreground">
        Dica: para trocar a URL da API, defina window.__API_BASE_URL__ no console, ou salve em
        localStorage.setItem('API_BASE_URL', 'http://localhost:8000'). Você também pode usar
        ?apiBase=http://localhost:8000 na URL.
      </aside>
    </main>
  );
}
