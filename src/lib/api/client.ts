import { getApiBaseUrl } from "./config";

export class ApiError extends Error {
  status?: number;
  url?: string;
  constructor(message: string, status?: number, url?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.url = url;
  }
}

export type RequestOptions = {
  params?: Record<string, any>;
  timeoutMs?: number;
  headers?: Record<string, string>;
};

function buildUrl(path: string, params?: Record<string, any>) {
  const base = getApiBaseUrl();
  const url = new URL(path.startsWith("/") ? path : `/${path}`, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.append(k, String(v));
    });
  }
  return url.toString();
}

export async function apiGet<T = any>(path: string, options: RequestOptions = {}): Promise<T> {
  const { params, timeoutMs = 5000, headers = {} } = options;
  const url = buildUrl(path, params);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        ...headers,
      },
      signal: controller.signal,
      keepalive: true,
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new ApiError(text || `Request failed with status ${res.status}`, res.status, url);
    }

    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return (await res.json()) as T;
    }
    // Fallback parse text
    return (await res.text()) as unknown as T;
  } finally {
    clearTimeout(timer);
  }
}
