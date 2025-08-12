// Centralized API configuration and environment detection
// No env vars needed; supports override via localStorage or window.__API_BASE_URL__

export type ApiEnv = "development" | "production";

declare global {
  interface Window {
    __API_BASE_URL__?: string;
  }
}

const DEFAULTS: Record<ApiEnv, string> = {
  development: "http://localhost:8000",
  production: "https://api.example.com", // TODO: update when you have a production API URL
};

export function detectEnv(): ApiEnv {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" ? "development" : "production";
}

function sanitizeBaseUrl(url: string) {
  return url.replace(/\/$/, "");
}

export function getApiBaseUrl(): string {
  // Priority: window override > query param > localStorage > VITE env > defaults by env
  const fromWindow = window.__API_BASE_URL__;
  const fromQuery = new URLSearchParams(window.location.search).get("apiBase");
  const fromStorage = localStorage.getItem("API_BASE_URL") || undefined;
  const fromEnv = (import.meta as any).env?.VITE_API_BASE_URL as string | undefined;
  const fallback = DEFAULTS[detectEnv()];

  return sanitizeBaseUrl(fromWindow || fromQuery || fromStorage || fromEnv || fallback);
}

export function isApiOnlineFlagStorageKey() {
  return "API_ONLINE";
}
