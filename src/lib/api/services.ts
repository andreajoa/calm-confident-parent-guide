import { apiGet } from "./client";

export async function fetchProdutos() {
  return apiGet<any>("/api/produtos");
}

export async function fetchProduto(id: string | number) {
  return apiGet<any>(`/api/produto/${id}`);
}

export async function fetchCategorias() {
  return apiGet<any>("/api/categorias");
}

export async function fetchHealth() {
  return apiGet<{ status: string } | any>("/api/health");
}

export async function fetchBuscar(q: string) {
  return apiGet<any>("/api/buscar", { params: { q } });
}

export async function fetchSeoMeta(params: { title?: string; description?: string }) {
  return apiGet<any>("/api/seo/meta", { params });
}
