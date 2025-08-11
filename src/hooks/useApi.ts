import { useQuery } from "@tanstack/react-query";
import { fetchProdutos, fetchProduto, fetchCategorias, fetchBuscar, fetchHealth } from "@/lib/api/services";
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from "@/lib/api/mock";

export type SourceTag = "api" | "local";
export type WithSource<T> = { data: T; source: SourceTag };
export type QueryOptions = { forceLocal?: boolean };

export function useApiHealth() {
  return useQuery<{ online: boolean; raw?: any }>({
    queryKey: ["api", "health"],
    queryFn: async () => {
      try {
        const res = await fetchHealth();
        return { online: true, raw: res };
      } catch (e) {
        return { online: false };
      }
    },
    refetchInterval: 30000,
    staleTime: 30000,
  });
}

export function useProdutos(options?: QueryOptions) {
  return useQuery<WithSource<any>>({
    queryKey: ["produtos", options?.forceLocal ?? false],
    queryFn: async () => {
      if (options?.forceLocal) {
        return { data: MOCK_PRODUCTS, source: "local" as const };
      }
      try {
        const data = await fetchProdutos();
        return { data, source: "api" as const };
      } catch (e) {
        return { data: MOCK_PRODUCTS, source: "local" as const };
      }
    },
    staleTime: 60000,
    retry: false,
  });
}


export function useProduto(id: string | number, options?: QueryOptions) {
  return useQuery<WithSource<any>>({
    queryKey: ["produto", id, options?.forceLocal ?? false],
    queryFn: async () => {
      if (options?.forceLocal) {
        const fallback = Array.isArray(MOCK_PRODUCTS)
          ? MOCK_PRODUCTS.find((p: any) => String(p.id) === String(id))
          : undefined;
        return { data: fallback, source: "local" as const };
      }
      try {
        const data = await fetchProduto(id);
        return { data, source: "api" as const };
      } catch (e) {
        // Try find in mock
        const fallback = Array.isArray(MOCK_PRODUCTS)
          ? MOCK_PRODUCTS.find((p: any) => String(p.id) === String(id))
          : undefined;
        return { data: fallback, source: "local" as const };
      }
    },
    staleTime: 60000,
    retry: false,
  });
}


export function useCategorias(options?: QueryOptions) {
  return useQuery<WithSource<any>>({
    queryKey: ["categorias", options?.forceLocal ?? false],
    queryFn: async () => {
      if (options?.forceLocal) {
        return { data: MOCK_CATEGORIES, source: "local" as const };
      }
      try {
        const data = await fetchCategorias();
        return { data, source: "api" as const };
      } catch (e) {
        return { data: MOCK_CATEGORIES, source: "local" as const };
      }
    },
    staleTime: 60000,
    retry: false,
  });
}


export function useBuscar(q: string, options?: QueryOptions) {
  return useQuery<WithSource<any>>({
    queryKey: ["buscar", q, options?.forceLocal ?? false],
    queryFn: async () => {
      if (!q) return { data: [], source: "local" as const };
      if (options?.forceLocal) {
        const ql = q.toLowerCase();
        const data = (MOCK_PRODUCTS || []).filter((p: any) =>
          JSON.stringify(p).toLowerCase().includes(ql)
        );
        return { data, source: "local" as const };
      }
      try {
        const data = await fetchBuscar(q);
        return { data, source: "api" as const };
      } catch (e) {
        // naive local search over mock products
        const ql = q.toLowerCase();
        const data = (MOCK_PRODUCTS || []).filter((p: any) =>
          JSON.stringify(p).toLowerCase().includes(ql)
        );
        return { data, source: "local" as const };
      }
    },
    staleTime: 30000,
    retry: false,
  });
}

